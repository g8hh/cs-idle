var colorValue = {
    "red": 80,
    "fuchsia": 15,
    "darkmagenta": 4,
    "dodgerBlue": 0.5,
    "lightblue": 0.1,
    "gray": 0.05
}

var chances = {
    "knife": 999,
    "st": 8
}

var ranks = {
1: "Silver I",
2: "Silver II",
3: "Silver III",
4: "Silver IV",
5: "Silver Elite",
6: "Silver Elite Master",
7: "Gold Nova I",
8: "Gold Nova II",
9: "Gold Nova III",
10: "Gold Nova Master",
11: "Master Guardian I",
12: "Master Guardian II",
13: "Master Guardian Elite",
14: "Distinguished Master Guardian",
15: "Legendary Eagle",
16: "Legendary Eagle Master",
17: "Supreme Master First Class",
18: "The Global Elite",
19: "[&#9733;] Silver I",
20: "[&#9733;] Silver II",
21: "[&#9733;] Silver III",
22: "[&#9733;] Silver IV",
23: "[&#9733;] Silver Elite",
24: "[&#9733;] Silver Elite Master",
25: "[&#9733;] Gold Nova I",
26: "[&#9733;] Gold Nova II",
27: "[&#9733;] Gold Nova III",
28: "[&#9733;] Gold Nova Master",
29: "[&#9733;] Master Guardian I",
30: "[&#9733;] Master Guardian II",
31: "[&#9733;] Master Guardian Elite",
32: "[&#9733;] Distinguished Master Guardian",
33: "[&#9733;] Legendary Eagle",
34: "[&#9733;] Legendary Eagle Master",
35: "[&#9733;] Supreme Master First Class",
36: "[&#9733;] The Global Elite"

}


var weapons = {
    "fuchsia": {
        "item": ["M4A1-S I Master Piece"]
    },
    "darkmagenta": {
        "item": ["P2000 I Amber Fade", "AWP I Pink DDPAT", "USP-S I Road Rash", "Tec-9 I Nuclear Threat",
        "P250 I Nuclear Threat", "MAG-7 I Bulldozer", "Glock-18 I Fade", "MP9 I Bulldozer"]
    },
    "dodgerBlue": {
        "item": ["M4A1-S I VariCamo", "PP-Bizon I Brass",
        "SG 553 I Damascus Steel", "CZ75-Auto I Nitro",
        "XM1014 I VariCamo Blue", "SSG 08 I Detour", "M4A4 I Radiation Hazard",
        "MAC-10 I Amber Fade", "UMP-45 I Blaze", "MP9 I Hot Rod", "AUG I Hot Rod",
        "Negev I Anodized Navy", "Five-SeveN I Candy Apple", "Tec-9 I Ossified"]
        
    },
    "lightblue": {
        "item": ["Tec-9 I VariCamo", "MAC-10 I Palm",
        "Five-SeveN I Orange Peel", "AK-47 I Safari Mesh",
        "Sawed-Off I Snake Camo", "Desert Eagle I Urban DDPAT", "MP7 I Gunsmoke",
        "Glock-18 I Night", "P2000 I Grassland", "XM1014 I Fallout Warning",
        "UMP-45 I Fallout Warning", "P90 I Fallout Warning", "Negev I CaliCamo",
        "SSG 08 I Tropical Storm", "SG 553 I Gator Mesh", "Glock-18 I Groundwater",
        "MP7 I Orange Peel", "UMP-45 I Caramel", "SG 553 I Tornado", "M4A4 I Jungle Tiger",
        "AK-47 I Jungle Spray"
        ]
    },
    "gray": {
        "item": ["Nova I Predator", "SCAR-20 I Sand Mesh",
            "P90 I Sand Spray", "MP9 I Sand Dashed",
            "P250 I Sand Dune", "G3SG1 I Desert Storm", "Sawed-Off I Sage Spray", "UMP-45 I Scorched",
            "M249 I Contrast Spray", "MAG-7 I Storm", "MP9 I Storm", "PP-Bizon I Irradiated Alert", 
            "Sawed-Off I Irradiated Alert", "MAG-7 I Irradiated Alert", "P250 I Bone Mask", "Five-SeveN I Contractor",
            "AUG I Colony", "G3SG1 I Safari Mesh", "P90 I Scorched", "Galil AR I Hunting Blind",
            "SSG 08 I Lichen Dashed", "Five-SeveN I Jungle", "Nova I Forest Leaves"
        ]
    }
}
var wear = ["Battle-Scarred", "Well-Worn", "Field-Tested", "Minimal Wear",
    "Factory New"
]
var vanillaSkins = [ "Blue Steel", "Boreal Forest", "Case Hardened", "Crimson Web", "Fade", 
        "Forest DDPAT", "Night", "Safari Mesh", "Scorched", "Slaughter", "Stained", "Urban Masked" ]
        
var vanillaKnives = ["Karambit", "M9 Bayonet", "Bayonet", "Flip Knife", "Gut Knife"];
var wearValue = {
    "Battle-Scarred": 0.3,
    "Well-Worn": 0.5,
    "Field-Tested": 0.9,
    "Minimal Wear": 1,
    "Factory New": 1.5
}
var knifeValue = {
    "Gut Knife": 40,
    "Flip Knife": 70,
    "Bayonet": 110,
    "Butterfly Knife": 160,
    "Huntsman Knife": 140,
    "M9 Bayonet": 150,
    "Karambit": 200,
};

var skinValue = {
    "Damascus Steel": 4,
    "Doppler": 5,
    "Marble Fade": 6,
    "Tiger Tooth": 4,
    "Rust Coat": 1,
    "Ultraviolet": 1.5,
    "Blue Steel": 1.5,
    "Boreal Forest": 0.5,
    "Case Hardened": 1.5,
    "Crimson Web": 2,
    "Fade": 5,
    "Forest DDPAT": 0.5,
    "Night": 1.5,
    "Safari Mesh": 0.5,
    "Scorched": 0.5,
    "Slaughter": 3,
    "Stained": 0.7,
    "Urban Masked": 0.7
};
var csCases = {
    "Chroma Case": {
        "cost": 0.7,
        "knife": {
            "availKnife": vanillaKnives,
            "availSkin": ["Doppler", "Marble Fade",
            "Ultraviolet", "Tiger Tooth", "Rust Coat", "Damascus Steel"]
        },
        "red": {
            "col": "red",
            "item": ["Galil AR I Chatterbox", "AWP I Man-o-war"]
        },
        "fuchsia": {
            "col": "fuchsia",
            "item": ["P250 I Muertos", "M4A4 I Dragon King", "AK-47 I Cartel"]
        },
        "darkmagenta": {
            "col": "darkmagenta",
            "item": ["MAC-10 I Malachite", "Sawed-Off I Serenity", "Dual Berettas I Urban Shock",
            "Desert Eagle I Naga"]
        },
        "dodgerBlue": {
            "col": "dodgerBlue",
            "item": ["Glock-18 I Catacombs", "M249 I System Lock", "XM1014 I Quicksilver", "MP9 I Deadly Poison",
            "SCAR-20 I Grotto"]
        }
    },
    
 "Breakout Case": {
    "cost": 0.7,
    "knife": {
        "availKnife": ["Butterfly Knife"],
        "availSkin": vanillaSkins
    },
    "red": {
        "item": ["M4A1-S I Cyrex", "P90 I Asiimov"]
    },
    "fuchsia": {
        "item": ["Desert Eagle I Conspiracy", "Five-SeveN I Fowl Play", "Glock-18 I Water Elemental"]
    },
    "darkmagenta": {
        "item": ["Nova I Koi", "P250 I Supernova", "PP-Bizon I Osiris", "CZ75-Auto I Tigris"]
    },
    "dodgerBlue": {
        "item": ["MP7 I Urban Hazard", "Negev I Desert Strike", "SSG 08 I Abyss", "UMP-45 I Labyrinth", "P2000 I Ivory"]
    }
},
 "Huntsman Case": {
     "cost": 0.7,
     "knife": {
         "availKnife": ["Huntsman Knife"],
         "availSkin": vanillaSkins
    },
    "red": {
        "item": ["M4A4 I Desert Strike", "AK-47 I Vulcan"]
    },
    "fuchsia": {
        "item": ["M4A1-S I Atomic Alloy", "SCAR-20 I Cyrex"]  
        },
    "darkmagenta": {
        "item": ["MAC-10 I Tatter", "AUG I Torque", "PP-Bizon I Antique", "XM1014 I Heaven Guard"]
    },
    "dodgerBlue": {
        "item": ["CZ75-Auto I Twist", "P90 I Module", "P2000 I Pulse", "Tec-9 I Isaac", "SSG 08 I Slashed",
        "Galil AR I Kami"]
    }
 },
 "Winter Offensive Case": {
     "cost": 0.7,
     "knife": {
         "availKnife": vanillaKnives,
         "availSkin": vanillaSkins
     },
     "red": {
        "item": ["M4A4 I Asiimov", "Sawed-Off I The Kraken"]
    },
    "fuchsia": {
        "item": ["M4A1-S I Guardian", "P250 I Mehndi", "AWP I Redline"] 
        },
    "darkmagenta": {
        "item": ["FAMAS I Pulse", "Dual Berettas I Marina", "MP9 I Rose Iron", "Nova I Rising Skull"]
    },
    "dodgerBlue": {
        "item": ["Galil AR I Sandstorm", "Five-SeveN I Kami", "M249 I Magma", "PP-Bizon I Cobalt Halftone"]
    }
 },
 "eSports 2014 Summer Case": {
     "cost": 0.7,
     "knife": {
         "availKnife": vanillaKnives,
         "availSkin": vanillaSkins
     },
     "red": {
        "item": ["M4A4 I Bullet Rain", "AK-47 I Jaguar"]
    },
    "fuchsia": {
        "item": ["P2000 I Corticera", "AWP I Corticera", "Nova I Boomstick", "AUG I Bengal Tiger"] 
        },
    "darkmagenta": {
        "item": ["Desert Eagle I Crimson Web", "Glock-18 I Steel Disruption", "MP7 I Ocean Foam", 
        "PP-Bizon I Blue Streak", "P90 I Virus"]
    },
    "dodgerBlue": {
        "item": ["XM1014 I Red Python", "Negev I Bratatat", "CZ75-Auto I Hexane", "USP-S I Blood Tiger",
        "MAC-10 I Ultraviolet", "SSG 08 I Dark Water"]
    }
 }
}

