/* For All Global Variables see db.js */
/* Main Game */

function Game() {
    
/* Declare variables to be used in Save Files */

this.netWorth = 0;
this.inv = 0;
this.invspace = 50;
this.money = 0;
this.cases = 0;
this.keys = 0;
this.dropFrequency = 20;
this.dropHistory = "";
this.sec = 0;
this.rank = 1;
this.totalMoneyGained = 0;
this.rankCost = 50;
this.freqCost = 100;
this.exp = 0;
this.nextLevel = 100;
this.grayNum = 0;
this.lightblueNum = 0;
this.dodgerBlueNum = 0;
this.darkmagentaNum = 0;
this.fuchsiaNum = 0;
this.redNum = 0;
this.knifeNum = 0;
this.knifeHistory = "";
this.trophies = [];
this.expGain = 1;
this.multiplier = 1;
this.lastCase = "Chroma Case";
}


var dropFrequencyDisplay = document.getElementById("dropFrequency");
var usedSlotsDisplay = document.getElementById("usedSlots");
var keysDisplay = document.getElementById("keys");
var casesDisplay = document.getElementById("cases");
var moneyDisplay = document.getElementById("money");
var invspaceDisplay = document.getElementById("maxSlots");
var netWorthDisplay = document.getElementById("networth");
var drop_noteDisplay = document.getElementById("drop_note");
var drops_listDisplay = document.getElementById("drops_list");
var loadedSave = {};
var caseAudio = new Audio("audio/open.wav");
var knifeAudio = new Audio("audio/knifeget.mp3");
var nextDrop = 20;


/* Replica of random.ranchoice from Python */
function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

/* Generate a random integer between min, max */
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Converts Seconds to minutes */
function pad(val) {
    return val > 9 ? val : "0" + val;
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function removeElement(id)
{
    return (elem=document.getElementById(id)).parentNode.removeChild(elem);
}

/* Save and Load game */
function saveGame() {
    var playerSave6 = JSON.stringify(Game);
    window.localStorage['playerSave6'] = playerSave6;
    document.getElementById("saveBtn").innerHTML = "Saved!";
    setTimeout(function(){document.getElementById("saveBtn").innerHTML = "Save"}, 1000)
	
}

function loadGame() {
    var playerSave6 = window.localStorage['playerSave6'];  
    Game = JSON.parse(playerSave6);
	console.log(Game);
    document.getElementById("loadBtn").disabled = true;
    nextDrop = Game.sec+Game.dropFrequency;
    updateValues();
    setTimeout(function(){document.getElementById("loadBtn").disabled = false}, 2000)
}

function resetSave() {
    var a = confirm("Are you sure you want to reset your save? There's no way to get it back!");
    if (a === true) {
        var b = confirm ("Are you really, really sure?")
    if (b === true) {
    Game = JSON.parse(cleanSave);
    nextDrop = Game.sec+Game.dropFrequency;
    saveGame();
    updateValues();
    }
    }
    else {}
}
    
/* Update all display values */
function updateValues() {
    Game.freqCost = Number(21 - Game.dropFrequency) * 40;
    dropFrequencyDisplay.innerHTML = Game.dropFrequency;
    usedSlotsDisplay.innerHTML = Game.inv;
    keysDisplay.innerHTML = "";
    casesDisplay.innerHTML = "";
    keysDisplay.innerHTML = Game.keys;
    casesDisplay.innerHTML = Game.cases;
    moneyDisplay.innerHTML = parseFloat(Game.money).toFixed(2)+" €";
    invspaceDisplay.innerHTML = Game.invspace;
    netWorthDisplay.innerHTML = parseFloat(Game.netWorth).toFixed(2)+" €";
    drops_listDisplay.innerHTML = Game.dropHistory;
    document.getElementById("rankText").innerHTML = ranks[Game.rank];
    document.getElementById("totalMoney").innerHTML = Game.totalMoneyGained.toFixed(2)+" €";
    /* document.getElementById("rankBtn").innerHTML = Game.rankCost.toFixed(2)+" €"; */
    document.getElementById("freqBtn").innerHTML = Game.freqCost.toFixed(2)+" €";
    document.getElementById("currentExp").innerHTML = Game.exp;
    document.getElementById("nextLevel").innerHTML = Game.nextLevel;
    document.getElementById("rankImage").src = "img/rank/"+Game.rank+".png";
    document.getElementById("totalGray").innerHTML = Game.grayNum;
    document.getElementById("totalLightblue").innerHTML = Game.lightblueNum;
    document.getElementById("totalDodgerBlue").innerHTML = Game.dodgerBlueNum;
    document.getElementById("totalDarkmagenta").innerHTML = Game.darkmagentaNum;
    document.getElementById("totalFuchsia").innerHTML = Game.fuchsiaNum;
    document.getElementById("totalRed").innerHTML = Game.redNum;
    document.getElementById("totalKnives").innerHTML = Game.knifeNum;
    document.getElementById("skillLevel").innerHTML = Game.expGain;
    if (Game.cases <= 0) {
        document.getElementById("chosenCase").disabled = false;
    }
    else {
        document.getElementById("chosenCase").disabled = true;
    }
    
   
    
}

/* Call when gettign a new Drop */
function newDrop() {
    var chosen = randint(1,100)
    var newcol = "blue"
    if (chosen >= 1 && chosen <= 40) {
        newcol = "gray"
        Game.grayNum++;
    }
    else if (chosen >= 41 && chosen <= 89) {
        newcol = "lightblue"
        Game.lightblueNum++;
    }
    else if (chosen >= 90 && chosen <= 96) {
        newcol = "dodgerBlue"
        Game.dodgerBlueNum++;
    }
    else if (chosen >= 97 && chosen <= 99) {
        newcol = "darkmagenta"
        Game.darkmagentaNum++;
    }
    else {
        newcol = "fuchsia"
        Game.fuchsiaNum++;
    }
    
    var newitem = choose(weapons[newcol]["item"]);
    var newimage = "img/collection/"+newitem+".png"
    var newwear = choose(wear);
    var newname = newitem + " (" + newwear + ")";
    var newvalue = Number(Number(colorValue[newcol] * wearValue[newwear])+0.02).toFixed(
        2);
    return [newcol, newname, newvalue, newimage]
}

function removeItem(item) {
    Game.dropHistory.replace(item, "");
}

/* Sell all items */
function sellAll() {
    var worth = Game.netWorth * 0.85;
    Game.money += worth;
    Game.netWorth = 0;
    drops_listDisplay.innerHTML = "";
    Game.dropHistory = ""
    netWorthDisplay.innerHTML = "0 €";
    Game.inv = 0;
    usedSlotsDisplay.innerHTML = Game.inv;
    nextDrop = Game.sec+Game.dropFrequency;
    document.getElementById("sellBtn").disabled = true;
    Game.totalMoneyGained += worth;
    updateValues();
    setTimeout( function(){document.getElementById("sellBtn").disabled = false;}, 5e3);
}
/* Choose Keys / Case amount */

document.getElementById("keysAm").addEventListener("input", function() {
	if (document.getElementById("keysAm").value < 1 || document.getElementById("keysAm").value > 9999 || isNaN(document.getElementById("keysAm").value)) {
	document.getElementById("keysAm").value = 1;
	}
	else {
    document.getElementById("buyKeyBtn").innerHTML = "Buy Keys ("+Number(2.15 * document.getElementById("keysAm").value).toFixed(2)+")";
}
	})

document.getElementById("caseAm").addEventListener("input", function() {
if (document.getElementById("caseAm").value < 1 || document.getElementById("caseAm").value > 9999 || isNaN(document.getElementById("caseAm").value)) {
	document.getElementById("caseAm").value = 1;
	}
else {
    document.getElementById("buyCaseBtn").innerHTML = "Buy "+document.getElementById("chosenCase").value+" ("+Number(csCases[document.getElementById("chosenCase").value]["cost"] * document.getElementById("caseAm").value).toFixed(2)+")";
}})
/* Buy a Chroma Case */
function buyCase() {
    am = document.getElementById("caseAm").value;
    
    if (Game.money < csCases[document.getElementById("chosenCase").value]["cost"] * am) {}
    else {
        Game.money -= csCases[document.getElementById("chosenCase").value]["cost"] * am;
        Game.cases+=1*am;
        moneyDisplay.innerHTML = Game.money.toFixed(2)+" €";
        casesDisplay.innerHTML = Game.cases;
        document.getElementById("chosenCase").disabled = true;
        updateValues();
        Game.lastCase = document.getElementById("chosenCase").value
    }
    document.getElementById("sellCasesBtn").innerHTML = "Sell Cases ("+Number(Number(Game.cases * 0.7) * 0.85).toFixed(2)+")";
}

/* Buy a Chroma Case Key */
function buyKey() {
    am = document.getElementById("keysAm").value;
    if (Game.money < 2.15*am) {}
    else {
        Game.money-=2.15*am;
        Game.keys+=1*am;
        updateValues();
    }
}

/* Sell back your cases for 85% */
function sellCases() {
    worth = Number(Game.cases * 0.7) * 0.85;
    Game.money += worth
    Game.cases = 0;
    document.getElementById("sellCasesBtn").innerHTML = "Sell Cases ("+Number(Number(Game.cases * 0.7) * 0.85).toFixed(2)+")";
    updateValues();
}

/* Called by openCase(); if user gets a regular item */
function gotItem() {
    var caseWorth = {
    "Battle-Scarred": 0.6,
    "Well-Worn": 0.9,
    "Field-Tested": 1,
    "Minimal Wear": 1.2,
    "Factory New": 1.6
}
    var a = document.getElementById("chosenCase").value;
    console.log("Player Opened a "+a);
    chosen = randint(1,100)
    var newcol = "blue"
    if (chosen >= 1 && chosen <= 77) {
        newcol = "dodgerBlue"
        Game.dodgerBlueNum++;
    }
    else if (chosen >= 78 && chosen <= 95) {
        newcol = "darkmagenta"
        Game.darkmagentaNum++;
    }
    else if (chosen >= 96 && chosen <= 98) {
        newcol = "fuchsia"
        Game.fuchsiaNum++;
    }
    else {
        newcol = "red"
        Game.redNum++;
    }
    
    var newitem = choose(csCases[a][newcol]["item"]);
    var newimage = "img/"+a+"/"+newitem+".png";
    console.log("...They got a: "+newitem);
    var newwear = choose(wear);
    var newname = newitem + " (" + newwear + ")";
    var newvalue = Number(colorValue[newcol] * caseWorth[newwear]).toFixed(2);
    return [newcol, newname, newvalue, newimage];
    
    
}
/* Called by openCase(); if user recieves a knife */
function gotKnife() {
        knifeAudio.play();
        Game.knifeNum++;
        var a = document.getElementById("chosenCase").value;
        var b = csCases[a]['knife']['availKnife']
		var c = csCases[a]['knife']['availSkin']
		var d = wear;
		var newKnife = [choose(b), choose(c), choose(d)];
        var newimage = "img/knife/"+newKnife[0]+"/"+newKnife[1]+".png";
		var knifeWorth = Number(knifeValue[newKnife[0]] * skinValue[newKnife[1]]) * wearValue[newKnife[2]]  
		var knifeName = "&#9733; "+newKnife[0]+" I "+newKnife[1]+" ("+newKnife[2]+")";
		var newcol = "#FF0000";
        document.getElementById("openCaseBtn").disabled = true;
        setTimeout(function(){document.getElementById("openCaseBtn").disabled = false;}, 1500)
		return [newcol, knifeName, knifeWorth, newimage];
        
}


/* Open CS Case */
function openCase() {
    if (Game.cases < 1 || Game.keys < 1 || Game.inv >= Game.invspace) {}
    else{
    Game.keys--;
    Game.cases--;
	var chance = randint(1,chances["knife"])
    var isSt = randint(1,chances["st"]) 
        if (isSt === 1) {
            var statTrak = 2.1;
            var statTrakString = "StatTrak&#0153; "
        }
        else {
            var statTrak = 1;
            var statTrakString = "";
        }
   
	if (chance <= 995) {
		var newKnife = gotItem();
        var glow = "";
		}
	else {
		var newKnife = gotKnife();
        var glow = "text-shadow:0 0 15px red;";
        var bglow = "box-shadow:0 0 15px red;"
        if (statTrak > 1.1) {
            statTrak = 3.1;
        }
		}
    caseAudio.play();
	Game.inv += 1;
	knifeName = newKnife[1];
	knifeWorth = parseFloat(newKnife[2] * statTrak);
    newimage = newKnife[3];
	knifeCol = newKnife[0];
	Game.netWorth += knifeWorth
    updateValues();
	itemString = "<div class='itemBoxWrapper'><div class='itemBox' title='"+knifeName+"' style='border:2px solid "+knifeCol+";background-image:url(\""+newimage+"\");'><div class='itemBoxText'>"+knifeWorth.toFixed(2)+" €</span></div></div><span style='margin:0 0 0 10px;color:"+knifeCol+"'>"+statTrakString+knifeName+"</span></div>"
	Game.dropHistory += itemString
    drops_listDisplay.innerHTML = Game.dropHistory;
    document.getElementById("caseItemImage").style.backgroundImage = "url('"+newimage+"')";
    document.getElementById("caseItemImage").style.border = "3px solid "+knifeCol;
    document.getElementById("caseItemImage").style.boxShadow = "0 0 40px "+knifeCol;
	drops_listDisplay.scrollTop = drops_listDisplay.scrollHeight;
 
    if (Game.cases <= 0) {
        document.getElementById("chosenCase").disabled = false;
    }
    saveGame();
	}
    /* setTimeout(function(){document.getElementById("openCaseBtn").disabled = false;}, 210) */
}

/* Listens for change of selected case and updates values accordingly. */
document.getElementById("chosenCase").addEventListener("change", function() {
    document.getElementById("buyCaseBtn").innerHTML = "Buy "+document.getElementById("chosenCase").value+" ("+csCases[document.getElementById("chosenCase").value]["cost"].toFixed(2)+" €)";
   
})
    
/* Player Upgrades */

/* Buy additional inventory slots for 125€*/
function buyInventory() {
    if (Game.money < 100) {}
    else  {
        Game.money -= 100;
        Game.invspace+=5;
        updateValues();
    }
}

/* Decrease Drop Frequency up to 5 times for 250 * 1.2 ^ 16 */
function buyFrequency() {
    if (Game.money < Game.freqCost || Game.dropFrequency <= 4) {}
    else {
        Game.money -= Game.freqCost;
        Game.dropFrequency-=1;
        Game.freqCost = Number(21 - Game.dropFrequency) * 40;
        updateValues();
    }
}

/* Called by Main Tick when EXP = EXP to next level */
function levelUp() {
    Game.exp = Game.exp - Game.nextLevel
    Game.nextLevel = Math.round(Game.nextLevel * 1.15 + 80);
    Game.rank++;
    if (Game.rank >= 36) {
        Game.nextLevel = Infinity;
    }
    updateValues();
}
/* Autosave */

    /* Main Tick. For recieving drops. */
var mainTick = setInterval(function() {
    document.getElementById("seconds").innerHTML = pad(++Game.sec % 60);
    document.getElementById("minutes").innerHTML = pad(parseInt(Game.sec /
        60, 10));
        /* Getting a Drop */
    if (Game.sec === nextDrop && Game.inv < Game.invspace) {
        var properties = newDrop();
        var colored = properties[0];
        var dropped = properties[1];
        var valued = properties[2];
        var gunImage = properties[3];
        drop_noteDisplay.style.border =
            "1px solid black";
        drop_noteDisplay.style.background = colored;
        drop_noteDisplay.style.visibility = "visible";
        Game.netWorth += parseFloat(valued);
        netWorthDisplay.innerHTML = Game.netWorth.toFixed(2)+" €";
        drop_noteDisplay.innerHTML = "New Drop: " + dropped;
        setTimeout(function() {
            drop_noteDisplay.style.visibility = "hidden";
            
        }, 3000);
       
        nextDrop += Game.dropFrequency;
        Game.inv++;
        usedSlotsDisplay.innerHTML = Game.inv;
        dropString = "<div class='itemBoxWrapper'><div class='itemBox' title='"+dropped+"' style='border:2px solid "+colored+";background-image:url(\""+gunImage+"\");'><div class='itemBoxText'>"+valued+" €</span></div></div><span style='margin:0 0 0 10px;color:"+colored+"'>"+dropped+"</span></div>";
        Game.dropHistory += dropString;
        drops_listDisplay.innerHTML = Game.dropHistory;
        drops_listDisplay.scrollTop = drops_listDisplay.scrollHeight;
        updateValues();
        
    } /* */
    Game.exp += Game.expGain;
	
        if (Game.exp >= Game.nextLevel) {
            levelUp();
        }
        updateValues();
}, 1000);

/* Init new game and set starting timer */
var Game = new Game();
var cleanSave = JSON.stringify(Game)
nextDrop = Game.sec+Game.dropFrequency;
document.getElementById("openCaseBtn").disabled = false;
loadGame();
updateValues();
document.getElementById("chosenCase").value = Game.lastCase
