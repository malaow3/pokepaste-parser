function myFunction(data, sheetName) {
    var sheetToPopulate = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    var cellValue = sheetToPopulate.getRange('A2').getValue();
    let count = data[cellValue].count;
    // Set the value of cell A3 to the count
    sheetToPopulate.getRange('A3').setValue(count);

    // Clear out the contents of column B -> I starting at row 2
    sheetToPopulate.getRange('B2:I').clearContent();

    // For each move in the json object, write to column B
    let moves = data[cellValue]["move_percents"];
    let moveKeys = Object.keys(moves);
    let moveValues = Object.values(moves);
    // Sort the moveKeys by the moveValues
    moveKeys.sort(function(a, b) {
        return moves[b] - moves[a];
    });
    // Sort the moveValues by value
    moveValues.sort(function(a, b) {
        return b - a;
    });

    for (let i = 0; i < moveKeys.length; i++) {
        sheetToPopulate.getRange('B' + (i + 2)).setValue(moveKeys[i]);
        sheetToPopulate.getRange('C' + (i + 2)).setValue(moveValues[i]);
    }

    // For each ability in the json object, write to column D
    let abilities = data[cellValue]["ability_percents"];
    let abilityKeys = Object.keys(abilities);
    let abilityValues = Object.values(abilities);
    // Sort the abilityKeys by the abilityValues
    abilityKeys.sort(function(a, b) {
        return abilities[b] - abilities[a];
    });
    // Sort the abilityValues by value
    abilityValues.sort(function(a, b) {
        return b - a;
    });
    for (let i = 0; i < abilityKeys.length; i++) {
        sheetToPopulate.getRange('D' + (i + 2)).setValue(abilityKeys[i]);
        sheetToPopulate.getRange('E' + (i + 2)).setValue(abilityValues[i]);
    }

    // For each item in the json object, write to column F
    let items = data[cellValue]["item_percents"];
    let itemKeys = Object.keys(items);
    let itemValues = Object.values(items);
    // Sort the itemKeys by the itemValues
    itemKeys.sort(function(a, b) {
        return items[b] - items[a];
    });
    // Sort the itemValues by value
    itemValues.sort(function(a, b) {
        return b - a;
    });
    for (let i = 0; i < itemKeys.length; i++) {
        sheetToPopulate.getRange('F' + (i + 2)).setValue(itemKeys[i]);
        sheetToPopulate.getRange('G' + (i + 2)).setValue(itemValues[i]);
    }

    // For each tera type in the json object, write to column H
    let teraTypes = data[cellValue]["tera_type_percents"];
    let teraTypeKeys = Object.keys(teraTypes);
    let teraTypeValues = Object.values(teraTypes);
    // Sort the teraTypeKeys by the teraTypeValues
    teraTypeKeys.sort(function(a, b) {
        return teraTypes[b] - teraTypes[a];
    });
    // Sort the teraTypeValues by value
    teraTypeValues.sort(function(a, b) {
        return b - a;
    });
    for (let i = 0; i < teraTypeKeys.length; i++) {
        sheetToPopulate.getRange('H' + (i + 2)).setValue(teraTypeKeys[i]);
        sheetToPopulate.getRange('I' + (i + 2)).setValue(teraTypeValues[i]);
    }

}

// function onChangeTrigger(e) {
//     var editedSheet = e.source.getActiveSheet();
//     var editedCellAddress = 'A2';

//     var editedRange = e.source.getActiveRange();
//     var editedCell = editedRange.getCell(1, 2);

//     if (editedSheet.getName() === "Per-Mon Data" && editedCell.getA1Notation() === editedCellAddress) {
//         myFunction();
//     }
// }

function onChangeTrigger(e) {
    var editedSheet = e.source.getActiveSheet();
    var editedCellAddress = 'A2';

    var editedRange = e.range;

    if (editedSheet.getName() === 'Per-Mon Data' && editedRange.getA1Notation() === editedCellAddress) {
        myFunction(json, "Per-Mon Data");
    } else if (editedSheet.getName() === 'Top Cut Per-Mon Data' && editedRange.getA1Notation() === editedCellAddress) {
        myFunction(top_cut_json, "Top Cut Per-Mon Data");
    }
}

// This info comes from the output of the python script.
let json = {
    "iron hands": {
        "count": 47,
        "move_raw_count": {
            "Wild Charge": 43,
            "Drain Punch": 44,
            "Heavy Slam": 35,
            "Fake Out": 46,
            "Volt Switch": 9,
            "Close Combat": 6,
            "Thunder Punch": 2,
            "Ice Punch": 1,
            "Swords Dance": 1,
            "Protect": 1
        },
        "move_percents": {
            "Wild Charge": 0.9148936170212766,
            "Drain Punch": 0.9361702127659575,
            "Heavy Slam": 0.7446808510638298,
            "Fake Out": 0.9787234042553191,
            "Volt Switch": 0.19148936170212766,
            "Close Combat": 0.1276595744680851,
            "Thunder Punch": 0.0425531914893617,
            "Ice Punch": 0.02127659574468085,
            "Swords Dance": 0.02127659574468085,
            "Protect": 0.02127659574468085
        },
        "ability_raw_count": {
            "Ability: Quark Drive": 47
        },
        "ability_percents": {
            "Ability: Quark Drive": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 44,
            "Clear Amulet": 3
        },
        "item_percents": {
            "Assault Vest": 0.9361702127659575,
            "Clear Amulet": 0.06382978723404255
        },
        "tera_type_raw_count": {
            "Grass": 24,
            "Fire": 6,
            "Water": 12,
            "Bug": 5
        },
        "tera_type_percents": {
            "Grass": 0.5106382978723404,
            "Fire": 0.1276595744680851,
            "Water": 0.2553191489361702,
            "Bug": 0.10638297872340426
        }
    },
    "grimmsnarl": {
        "count": 17,
        "move_raw_count": {
            "Reflect": 17,
            "Thunder Wave": 15,
            "Foul Play": 6,
            "Light Screen": 17,
            "Spirit Break": 11,
            "Taunt": 1,
            "Misty Terrain": 1
        },
        "move_percents": {
            "Reflect": 1.0,
            "Thunder Wave": 0.8823529411764706,
            "Foul Play": 0.35294117647058826,
            "Light Screen": 1.0,
            "Spirit Break": 0.6470588235294118,
            "Taunt": 0.058823529411764705,
            "Misty Terrain": 0.058823529411764705
        },
        "ability_raw_count": {
            "Ability: Prankster": 17
        },
        "ability_percents": {
            "Ability: Prankster": 1.0
        },
        "item_raw_count": {
            "Light Clay": 16,
            "Covert Cloak": 1
        },
        "item_percents": {
            "Light Clay": 0.9411764705882353,
            "Covert Cloak": 0.058823529411764705
        },
        "tera_type_raw_count": {
            "Ghost": 14,
            "Ground": 1,
            "Grass": 1,
            "Steel": 1
        },
        "tera_type_percents": {
            "Ghost": 0.8235294117647058,
            "Ground": 0.058823529411764705,
            "Grass": 0.058823529411764705,
            "Steel": 0.058823529411764705
        }
    },
    "urshifu-rapid-strike": {
        "count": 119,
        "move_raw_count": {
            "Surging Strikes": 119,
            "Protect": 31,
            "Close Combat": 119,
            "Taunt": 18,
            "Aqua Jet": 85,
            "Detect": 38,
            "U-turn": 50,
            "Coaching": 14,
            "Brick Break": 1,
            "Helping Hand": 1
        },
        "move_percents": {
            "Surging Strikes": 1.0,
            "Protect": 0.2605042016806723,
            "Close Combat": 1.0,
            "Taunt": 0.15126050420168066,
            "Aqua Jet": 0.7142857142857143,
            "Detect": 0.31932773109243695,
            "U-turn": 0.42016806722689076,
            "Coaching": 0.11764705882352941,
            "Brick Break": 0.008403361344537815,
            "Helping Hand": 0.008403361344537815
        },
        "ability_raw_count": {
            "Ability: Unseen Fist": 119
        },
        "ability_percents": {
            "Ability: Unseen Fist": 1.0
        },
        "item_raw_count": {
            "Safety Goggles": 1,
            "Focus Sash": 51,
            "Choice Scarf": 40,
            "Mystic Water": 14,
            "Life Orb": 3,
            "Choice Band": 9,
            "Assault Vest": 1
        },
        "item_percents": {
            "Safety Goggles": 0.008403361344537815,
            "Focus Sash": 0.42857142857142855,
            "Choice Scarf": 0.33613445378151263,
            "Mystic Water": 0.11764705882352941,
            "Life Orb": 0.025210084033613446,
            "Choice Band": 0.07563025210084033,
            "Assault Vest": 0.008403361344537815
        },
        "tera_type_raw_count": {
            "Water": 50,
            "Ghost": 17,
            "Stellar": 33,
            "Grass": 13,
            "Poison": 4,
            "Normal": 2
        },
        "tera_type_percents": {
            "Water": 0.42016806722689076,
            "Ghost": 0.14285714285714285,
            "Stellar": 0.2773109243697479,
            "Grass": 0.1092436974789916,
            "Poison": 0.03361344537815126,
            "Normal": 0.01680672268907563
        }
    },
    "terapagos-terastal": {
        "count": 6,
        "move_raw_count": {
            "Ice Beam": 1,
            "Tera Starstorm": 6,
            "Earth Power": 3,
            "Dark Pulse": 1,
            "Hyper Beam": 2,
            "Dazzling Gleam": 2,
            "Flamethrower": 1,
            "Calm Mind": 3,
            "Protect": 3,
            "Substitute": 1,
            "Rock Polish": 1
        },
        "move_percents": {
            "Ice Beam": 0.16666666666666666,
            "Tera Starstorm": 1.0,
            "Earth Power": 0.5,
            "Dark Pulse": 0.16666666666666666,
            "Hyper Beam": 0.3333333333333333,
            "Dazzling Gleam": 0.3333333333333333,
            "Flamethrower": 0.16666666666666666,
            "Calm Mind": 0.5,
            "Protect": 0.5,
            "Substitute": 0.16666666666666666,
            "Rock Polish": 0.16666666666666666
        },
        "ability_raw_count": {
            "Ability: Tera Shell": 6
        },
        "ability_percents": {
            "Ability: Tera Shell": 1.0
        },
        "item_raw_count": {
            "Choice Specs": 3,
            "Leftovers": 3
        },
        "item_percents": {
            "Choice Specs": 0.5,
            "Leftovers": 0.5
        },
        "tera_type_raw_count": {
            "Stellar": 6
        },
        "tera_type_percents": {
            "Stellar": 1.0
        }
    },
    "flutter mane": {
        "count": 30,
        "move_raw_count": {
            "Moonblast": 30,
            "Shadow Ball": 14,
            "Icy Wind": 22,
            "Protect": 22,
            "Thunder Wave": 8,
            "Fake Tears": 1,
            "Trick Room": 1,
            "Dazzling Gleam": 8,
            "Taunt": 10,
            "Perish Song": 1,
            "Sunny Day": 2
        },
        "move_percents": {
            "Moonblast": 1.0,
            "Shadow Ball": 0.4666666666666667,
            "Icy Wind": 0.7333333333333333,
            "Protect": 0.7333333333333333,
            "Thunder Wave": 0.26666666666666666,
            "Fake Tears": 0.03333333333333333,
            "Trick Room": 0.03333333333333333,
            "Dazzling Gleam": 0.26666666666666666,
            "Taunt": 0.3333333333333333,
            "Perish Song": 0.03333333333333333,
            "Sunny Day": 0.06666666666666667
        },
        "ability_raw_count": {
            "Ability: Protosynthesis": 30
        },
        "ability_percents": {
            "Ability: Protosynthesis": 1.0
        },
        "item_raw_count": {
            "Booster Energy": 21,
            "Focus Sash": 4,
            "Choice Specs": 5
        },
        "item_percents": {
            "Booster Energy": 0.7,
            "Focus Sash": 0.13333333333333333,
            "Choice Specs": 0.16666666666666666
        },
        "tera_type_raw_count": {
            "Fairy": 23,
            "Water": 3,
            "Ground": 1,
            "Grass": 2,
            "Normal": 1
        },
        "tera_type_percents": {
            "Fairy": 0.7666666666666667,
            "Water": 0.1,
            "Ground": 0.03333333333333333,
            "Grass": 0.06666666666666667,
            "Normal": 0.03333333333333333
        }
    },
    "chi-yu": {
        "count": 34,
        "move_raw_count": {
            "Heat Wave": 34,
            "Snarl": 22,
            "Protect": 11,
            "Overheat": 28,
            "Dark Pulse": 28,
            "Taunt": 3,
            "Flamethrower": 2,
            "Tera Blast": 5,
            "Psychic": 2,
            "Nasty Plot": 1
        },
        "move_percents": {
            "Heat Wave": 1.0,
            "Snarl": 0.6470588235294118,
            "Protect": 0.3235294117647059,
            "Overheat": 0.8235294117647058,
            "Dark Pulse": 0.8235294117647058,
            "Taunt": 0.08823529411764706,
            "Flamethrower": 0.058823529411764705,
            "Tera Blast": 0.14705882352941177,
            "Psychic": 0.058823529411764705,
            "Nasty Plot": 0.029411764705882353
        },
        "ability_raw_count": {
            "Ability: Beads of Ruin": 34
        },
        "ability_percents": {
            "Ability: Beads of Ruin": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 8,
            "Covert Cloak": 3,
            "Choice Scarf": 17,
            "Assault Vest": 2,
            "Choice Specs": 1,
            "Wide Lens": 1,
            "Life Orb": 1,
            "Safety Goggles": 1
        },
        "item_percents": {
            "Focus Sash": 0.23529411764705882,
            "Covert Cloak": 0.08823529411764706,
            "Choice Scarf": 0.5,
            "Assault Vest": 0.058823529411764705,
            "Choice Specs": 0.029411764705882353,
            "Wide Lens": 0.029411764705882353,
            "Life Orb": 0.029411764705882353,
            "Safety Goggles": 0.029411764705882353
        },
        "tera_type_raw_count": {
            "Ghost": 22,
            "Water": 5,
            "Ground": 6,
            "Fire": 1
        },
        "tera_type_percents": {
            "Ghost": 0.6470588235294118,
            "Water": 0.14705882352941177,
            "Ground": 0.17647058823529413,
            "Fire": 0.029411764705882353
        }
    },
    "koraidon": {
        "count": 13,
        "move_raw_count": {
            "Collision Course": 13,
            "Flare Blitz": 13,
            "Flame Charge": 9,
            "Protect": 13,
            "U-turn": 3,
            "Helping Hand": 1
        },
        "move_percents": {
            "Collision Course": 1.0,
            "Flare Blitz": 1.0,
            "Flame Charge": 0.6923076923076923,
            "Protect": 1.0,
            "U-turn": 0.23076923076923078,
            "Helping Hand": 0.07692307692307693
        },
        "ability_raw_count": {
            "Ability: Orichalcum Pulse": 13
        },
        "ability_percents": {
            "Ability: Orichalcum Pulse": 1.0
        },
        "item_raw_count": {
            "Clear Amulet": 13
        },
        "item_percents": {
            "Clear Amulet": 1.0
        },
        "tera_type_raw_count": {
            "Fire": 13
        },
        "tera_type_percents": {
            "Fire": 1.0
        }
    },
    "venusaur": {
        "count": 4,
        "move_raw_count": {
            "Sludge Bomb": 4,
            "Giga Drain": 1,
            "Sleep Powder": 4,
            "Protect": 4,
            "Grass Knot": 2,
            "Energy Ball": 1
        },
        "move_percents": {
            "Sludge Bomb": 1.0,
            "Giga Drain": 0.25,
            "Sleep Powder": 1.0,
            "Protect": 1.0,
            "Grass Knot": 0.5,
            "Energy Ball": 0.25
        },
        "ability_raw_count": {
            "Ability: Chlorophyll": 4
        },
        "ability_percents": {
            "Ability: Chlorophyll": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 4
        },
        "item_percents": {
            "Covert Cloak": 1.0
        },
        "tera_type_raw_count": {
            "Water": 4
        },
        "tera_type_percents": {
            "Water": 1.0
        }
    },
    "raging bolt": {
        "count": 80,
        "move_raw_count": {
            "Draco Meteor": 69,
            "Thunderclap": 80,
            "Thunderbolt": 72,
            "Volt Switch": 8,
            "Dragon Pulse": 11,
            "Calm Mind": 2,
            "Protect": 65,
            "Thunder": 1,
            "Weather Ball": 1,
            "Electroweb": 9,
            "Snarl": 2
        },
        "move_percents": {
            "Draco Meteor": 0.8625,
            "Thunderclap": 1.0,
            "Thunderbolt": 0.9,
            "Volt Switch": 0.1,
            "Dragon Pulse": 0.1375,
            "Calm Mind": 0.025,
            "Protect": 0.8125,
            "Thunder": 0.0125,
            "Weather Ball": 0.0125,
            "Electroweb": 0.1125,
            "Snarl": 0.025
        },
        "ability_raw_count": {
            "Ability: Protosynthesis": 80
        },
        "ability_percents": {
            "Ability: Protosynthesis": 1.0
        },
        "item_raw_count": {
            "Booster Energy": 49,
            "Life Orb": 17,
            "Assault Vest": 14
        },
        "item_percents": {
            "Booster Energy": 0.6125,
            "Life Orb": 0.2125,
            "Assault Vest": 0.175
        },
        "tera_type_raw_count": {
            "Electric": 62,
            "Fairy": 17,
            "Water": 1
        },
        "tera_type_percents": {
            "Electric": 0.775,
            "Fairy": 0.2125,
            "Water": 0.0125
        }
    },
    "porygon2": {
        "count": 3,
        "move_raw_count": {
            "Tera Blast": 3,
            "Ice Beam": 2,
            "Trick Room": 3,
            "Protect": 1,
            "Recover": 2,
            "Shadow Ball": 1
        },
        "move_percents": {
            "Tera Blast": 1.0,
            "Ice Beam": 0.6666666666666666,
            "Trick Room": 1.0,
            "Protect": 0.3333333333333333,
            "Recover": 0.6666666666666666,
            "Shadow Ball": 0.3333333333333333
        },
        "ability_raw_count": {
            "Ability: Download": 3
        },
        "ability_percents": {
            "Ability: Download": 1.0
        },
        "item_raw_count": {
            "Eviolite": 3
        },
        "item_percents": {
            "Eviolite": 1.0
        },
        "tera_type_raw_count": {
            "Poison": 1,
            "Ground": 2
        },
        "tera_type_percents": {
            "Poison": 0.3333333333333333,
            "Ground": 0.6666666666666666
        }
    },
    "ursaluna": {
        "count": 11,
        "move_raw_count": {
            "Facade": 11,
            "Headlong Rush": 11,
            "Play Rough": 1,
            "Protect": 11,
            "Swords Dance": 3,
            "Earthquake": 3,
            "Substitute": 3,
            "Helping Hand": 1
        },
        "move_percents": {
            "Facade": 1.0,
            "Headlong Rush": 1.0,
            "Play Rough": 0.09090909090909091,
            "Protect": 1.0,
            "Swords Dance": 0.2727272727272727,
            "Earthquake": 0.2727272727272727,
            "Substitute": 0.2727272727272727,
            "Helping Hand": 0.09090909090909091
        },
        "ability_raw_count": {
            "Ability: Guts": 11
        },
        "ability_percents": {
            "Ability: Guts": 1.0
        },
        "item_raw_count": {
            "Flame Orb": 11
        },
        "item_percents": {
            "Flame Orb": 1.0
        },
        "tera_type_raw_count": {
            "Fairy": 4,
            "Poison": 1,
            "Water": 1,
            "Ghost": 4,
            "Normal": 1
        },
        "tera_type_percents": {
            "Fairy": 0.36363636363636365,
            "Poison": 0.09090909090909091,
            "Water": 0.09090909090909091,
            "Ghost": 0.36363636363636365,
            "Normal": 0.09090909090909091
        }
    },
    "miraidon": {
        "count": 32,
        "move_raw_count": {
            "Electro Drift": 32,
            "Draco Meteor": 29,
            "Dazzling Gleam": 26,
            "Volt Switch": 32,
            "Parabolic Charge": 2,
            "Overheat": 1,
            "Discharge": 3,
            "Dragon Pulse": 3
        },
        "move_percents": {
            "Electro Drift": 1.0,
            "Draco Meteor": 0.90625,
            "Dazzling Gleam": 0.8125,
            "Volt Switch": 1.0,
            "Parabolic Charge": 0.0625,
            "Overheat": 0.03125,
            "Discharge": 0.09375,
            "Dragon Pulse": 0.09375
        },
        "ability_raw_count": {
            "Ability: Hadron Engine": 32
        },
        "ability_percents": {
            "Ability: Hadron Engine": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 5,
            "Choice Specs": 27
        },
        "item_percents": {
            "Assault Vest": 0.15625,
            "Choice Specs": 0.84375
        },
        "tera_type_raw_count": {
            "Fairy": 26,
            "Electric": 6
        },
        "tera_type_percents": {
            "Fairy": 0.8125,
            "Electric": 0.1875
        }
    },
    "dondozo": {
        "count": 15,
        "move_raw_count": {
            "Protect": 15,
            "Order Up": 15,
            "Earthquake": 10,
            "Wave Crash": 10,
            "Rest": 1,
            "Body Press": 5,
            "Substitute": 2,
            "Liquidation": 2
        },
        "move_percents": {
            "Protect": 1.0,
            "Order Up": 1.0,
            "Earthquake": 0.6666666666666666,
            "Wave Crash": 0.6666666666666666,
            "Rest": 0.06666666666666667,
            "Body Press": 0.3333333333333333,
            "Substitute": 0.13333333333333333,
            "Liquidation": 0.13333333333333333
        },
        "ability_raw_count": {
            "Ability: Unaware": 13,
            "Ability: Oblivious": 2
        },
        "ability_percents": {
            "Ability: Unaware": 0.8666666666666667,
            "Ability: Oblivious": 0.13333333333333333
        },
        "item_raw_count": {
            "Leftovers": 14,
            "Rocky Helmet": 1
        },
        "item_percents": {
            "Leftovers": 0.9333333333333333,
            "Rocky Helmet": 0.06666666666666667
        },
        "tera_type_raw_count": {
            "Grass": 11,
            "Dragon": 2,
            "Fairy": 2
        },
        "tera_type_percents": {
            "Grass": 0.7333333333333333,
            "Dragon": 0.13333333333333333,
            "Fairy": 0.13333333333333333
        }
    },
    "tatsugiri": {
        "count": 10,
        "move_raw_count": {
            "Draco Meteor": 9,
            "Dragon Pulse": 5,
            "Muddy Water": 10,
            "Icy Wind": 7,
            "Mirror Coat": 2,
            "Counter": 1,
            "Helping Hand": 3,
            "Protect": 2,
            "Taunt": 1
        },
        "move_percents": {
            "Draco Meteor": 0.9,
            "Dragon Pulse": 0.5,
            "Muddy Water": 1.0,
            "Icy Wind": 0.7,
            "Mirror Coat": 0.2,
            "Counter": 0.1,
            "Helping Hand": 0.3,
            "Protect": 0.2,
            "Taunt": 0.1
        },
        "ability_raw_count": {
            "Ability: Commander": 10
        },
        "ability_percents": {
            "Ability: Commander": 1.0
        },
        "item_raw_count": {
            "Choice Scarf": 4,
            "Assault Vest": 2,
            "Focus Sash": 4
        },
        "item_percents": {
            "Choice Scarf": 0.4,
            "Assault Vest": 0.2,
            "Focus Sash": 0.4
        },
        "tera_type_raw_count": {
            "Normal": 4,
            "Steel": 5,
            "Water": 1
        },
        "tera_type_percents": {
            "Normal": 0.4,
            "Steel": 0.5,
            "Water": 0.1
        }
    },
    "dragonite": {
        "count": 6,
        "move_raw_count": {
            "Extreme Speed": 6,
            "Aqua Jet": 2,
            "Aerial Ace": 6,
            "Iron Head": 2,
            "Stomping Tantrum": 4,
            "Outrage": 3,
            "Dragon Claw": 1
        },
        "move_percents": {
            "Extreme Speed": 1.0,
            "Aqua Jet": 0.3333333333333333,
            "Aerial Ace": 1.0,
            "Iron Head": 0.3333333333333333,
            "Stomping Tantrum": 0.6666666666666666,
            "Outrage": 0.5,
            "Dragon Claw": 0.16666666666666666
        },
        "ability_raw_count": {
            "Ability: Multiscale": 2,
            "Ability: Inner Focus": 4
        },
        "ability_percents": {
            "Ability: Multiscale": 0.3333333333333333,
            "Ability: Inner Focus": 0.6666666666666666
        },
        "item_raw_count": {
            "Choice Band": 6
        },
        "item_percents": {
            "Choice Band": 1.0
        },
        "tera_type_raw_count": {
            "Normal": 6
        },
        "tera_type_percents": {
            "Normal": 1.0
        }
    },
    "regigigas": {
        "count": 2,
        "move_raw_count": {
            "Protect": 2,
            "Wide Guard": 2,
            "High Horsepower": 1,
            "Crush Grip": 2,
            "Knock Off": 1
        },
        "move_percents": {
            "Protect": 1.0,
            "Wide Guard": 1.0,
            "High Horsepower": 0.5,
            "Crush Grip": 1.0,
            "Knock Off": 0.5
        },
        "ability_raw_count": {
            "Ability: Slow Start": 2
        },
        "ability_percents": {
            "Ability: Slow Start": 1.0
        },
        "item_raw_count": {
            "Life Orb": 2
        },
        "item_percents": {
            "Life Orb": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 1,
            "Fairy": 1
        },
        "tera_type_percents": {
            "Ghost": 0.5,
            "Fairy": 0.5
        }
    },
    "weezing-galar": {
        "count": 7,
        "move_raw_count": {
            "Protect": 6,
            "Taunt": 2,
            "Poison Gas": 7,
            "Strange Steam": 6,
            "Toxic Spikes": 6,
            "Sludge Bomb": 1
        },
        "move_percents": {
            "Protect": 0.8571428571428571,
            "Taunt": 0.2857142857142857,
            "Poison Gas": 1.0,
            "Strange Steam": 0.8571428571428571,
            "Toxic Spikes": 0.8571428571428571,
            "Sludge Bomb": 0.14285714285714285
        },
        "ability_raw_count": {
            "Ability: Neutralizing Gas": 7
        },
        "ability_percents": {
            "Ability: Neutralizing Gas": 1.0
        },
        "item_raw_count": {
            "Rocky Helmet": 1,
            "Covert Cloak": 5,
            "Sitrus Berry": 1
        },
        "item_percents": {
            "Rocky Helmet": 0.14285714285714285,
            "Covert Cloak": 0.7142857142857143,
            "Sitrus Berry": 0.14285714285714285
        },
        "tera_type_raw_count": {
            "Dark": 3,
            "Normal": 1,
            "Water": 2,
            "Ghost": 1
        },
        "tera_type_percents": {
            "Dark": 0.42857142857142855,
            "Normal": 0.14285714285714285,
            "Water": 0.2857142857142857,
            "Ghost": 0.14285714285714285
        }
    },
    "calyrex-shadow": {
        "count": 61,
        "move_raw_count": {
            "Astral Barrage": 60,
            "Psychic": 9,
            "Nasty Plot": 34,
            "Protect": 52,
            "Shadow Ball": 6,
            "Pollen Puff": 7,
            "Psyshock": 16,
            "Expanding Force": 10,
            "Draining Kiss": 22,
            "Tera Blast": 6,
            "Calm Mind": 12,
            "Hyper Beam": 3,
            "Giga Drain": 3,
            "Snarl": 1,
            "Agility": 1,
            "Trick": 2
        },
        "move_percents": {
            "Astral Barrage": 0.9836065573770492,
            "Psychic": 0.14754098360655737,
            "Nasty Plot": 0.5573770491803278,
            "Protect": 0.8524590163934426,
            "Shadow Ball": 0.09836065573770492,
            "Pollen Puff": 0.11475409836065574,
            "Psyshock": 0.26229508196721313,
            "Expanding Force": 0.16393442622950818,
            "Draining Kiss": 0.36065573770491804,
            "Tera Blast": 0.09836065573770492,
            "Calm Mind": 0.19672131147540983,
            "Hyper Beam": 0.04918032786885246,
            "Giga Drain": 0.04918032786885246,
            "Snarl": 0.01639344262295082,
            "Agility": 0.01639344262295082,
            "Trick": 0.03278688524590164
        },
        "ability_raw_count": {
            "Ability: As One (Spectrier)": 61
        },
        "ability_percents": {
            "Ability: As One (Spectrier)": 1.0
        },
        "item_raw_count": {
            "Spooky Plate": 4,
            "Choice Specs": 9,
            "Sitrus Berry": 10,
            "Life Orb": 9,
            "Covert Cloak": 16,
            "Spell Tag": 11,
            "Safety Goggles": 1,
            "Rocky Helmet": 1
        },
        "item_percents": {
            "Spooky Plate": 0.06557377049180328,
            "Choice Specs": 0.14754098360655737,
            "Sitrus Berry": 0.16393442622950818,
            "Life Orb": 0.14754098360655737,
            "Covert Cloak": 0.26229508196721313,
            "Spell Tag": 0.18032786885245902,
            "Safety Goggles": 0.01639344262295082,
            "Rocky Helmet": 0.01639344262295082
        },
        "tera_type_raw_count": {
            "Normal": 15,
            "Ghost": 7,
            "Fairy": 28,
            "Water": 4,
            "Dark": 2,
            "Grass": 3,
            "Fighting": 1,
            "Poison": 1
        },
        "tera_type_percents": {
            "Normal": 0.2459016393442623,
            "Ghost": 0.11475409836065574,
            "Fairy": 0.45901639344262296,
            "Water": 0.06557377049180328,
            "Dark": 0.03278688524590164,
            "Grass": 0.04918032786885246,
            "Fighting": 0.01639344262295082,
            "Poison": 0.01639344262295082
        }
    },
    "clefairy": {
        "count": 23,
        "move_raw_count": {
            "Follow Me": 23,
            "Helping Hand": 23,
            "After You": 10,
            "Protect": 22,
            "Sing": 5,
            "Life Dew": 4,
            "Heal Pulse": 1,
            "Moonblast": 2,
            "Thunder Wave": 2
        },
        "move_percents": {
            "Follow Me": 1.0,
            "Helping Hand": 1.0,
            "After You": 0.43478260869565216,
            "Protect": 0.9565217391304348,
            "Sing": 0.21739130434782608,
            "Life Dew": 0.17391304347826086,
            "Heal Pulse": 0.043478260869565216,
            "Moonblast": 0.08695652173913043,
            "Thunder Wave": 0.08695652173913043
        },
        "ability_raw_count": {
            "Ability: Friend Guard": 23
        },
        "ability_percents": {
            "Ability: Friend Guard": 1.0
        },
        "item_raw_count": {
            "Eviolite": 23
        },
        "item_percents": {
            "Eviolite": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 19,
            "Ground": 1,
            "Dragon": 1,
            "Fairy": 1,
            "Water": 1
        },
        "tera_type_percents": {
            "Grass": 0.8260869565217391,
            "Ground": 0.043478260869565216,
            "Dragon": 0.043478260869565216,
            "Fairy": 0.043478260869565216,
            "Water": 0.043478260869565216
        }
    },
    "incineroar": {
        "count": 76,
        "move_raw_count": {
            "Parting Shot": 72,
            "Knock Off": 64,
            "Taunt": 17,
            "Fake Out": 76,
            "Flare Blitz": 24,
            "Will-O-Wisp": 40,
            "Helping Hand": 5,
            "U-turn": 3,
            "Nasty Plot": 1,
            "Snarl": 1,
            "Protect": 1
        },
        "move_percents": {
            "Parting Shot": 0.9473684210526315,
            "Knock Off": 0.8421052631578947,
            "Taunt": 0.2236842105263158,
            "Fake Out": 1.0,
            "Flare Blitz": 0.3157894736842105,
            "Will-O-Wisp": 0.5263157894736842,
            "Helping Hand": 0.06578947368421052,
            "U-turn": 0.039473684210526314,
            "Nasty Plot": 0.013157894736842105,
            "Snarl": 0.013157894736842105,
            "Protect": 0.013157894736842105
        },
        "ability_raw_count": {
            "Ability: Intimidate": 76
        },
        "ability_percents": {
            "Ability: Intimidate": 1.0
        },
        "item_raw_count": {
            "Safety Goggles": 67,
            "Assault Vest": 3,
            "Rocky Helmet": 4,
            "Sitrus Berry": 1,
            "Ability Shield": 1
        },
        "item_percents": {
            "Safety Goggles": 0.881578947368421,
            "Assault Vest": 0.039473684210526314,
            "Rocky Helmet": 0.05263157894736842,
            "Sitrus Berry": 0.013157894736842105,
            "Ability Shield": 0.013157894736842105
        },
        "tera_type_raw_count": {
            "Ghost": 55,
            "Water": 17,
            "Grass": 4
        },
        "tera_type_percents": {
            "Ghost": 0.7236842105263158,
            "Water": 0.2236842105263158,
            "Grass": 0.05263157894736842
        }
    },
    "rillaboom": {
        "count": 104,
        "move_raw_count": {
            "Grassy Glide": 104,
            "U-turn": 93,
            "Wood Hammer": 98,
            "Fake Out": 102,
            "Knock Off": 1,
            "Protect": 3,
            "Drum Beating": 4,
            "High Horsepower": 10,
            "Taunt": 1
        },
        "move_percents": {
            "Grassy Glide": 1.0,
            "U-turn": 0.8942307692307693,
            "Wood Hammer": 0.9423076923076923,
            "Fake Out": 0.9807692307692307,
            "Knock Off": 0.009615384615384616,
            "Protect": 0.028846153846153848,
            "Drum Beating": 0.038461538461538464,
            "High Horsepower": 0.09615384615384616,
            "Taunt": 0.009615384615384616
        },
        "ability_raw_count": {
            "Ability: Grassy Surge": 104
        },
        "ability_percents": {
            "Ability: Grassy Surge": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 95,
            "Choice Band": 2,
            "Miracle Seed": 7
        },
        "item_percents": {
            "Assault Vest": 0.9134615384615384,
            "Choice Band": 0.019230769230769232,
            "Miracle Seed": 0.0673076923076923
        },
        "tera_type_raw_count": {
            "Fire": 71,
            "Normal": 12,
            "Grass": 9,
            "Water": 6,
            "Poison": 2,
            "Ground": 4
        },
        "tera_type_percents": {
            "Fire": 0.6826923076923077,
            "Normal": 0.11538461538461539,
            "Grass": 0.08653846153846154,
            "Water": 0.057692307692307696,
            "Poison": 0.019230769230769232,
            "Ground": 0.038461538461538464
        }
    },
    "tornadus": {
        "count": 40,
        "move_raw_count": {
            "Bleakwind Storm": 38,
            "Tailwind": 39,
            "Rain Dance": 35,
            "Taunt": 15,
            "Protect": 22,
            "Sunny Day": 5,
            "Hurricane": 1,
            "Scary Face": 1,
            "Leer": 1
        },
        "move_percents": {
            "Bleakwind Storm": 0.95,
            "Tailwind": 0.975,
            "Rain Dance": 0.875,
            "Taunt": 0.375,
            "Protect": 0.55,
            "Sunny Day": 0.125,
            "Hurricane": 0.025,
            "Scary Face": 0.025,
            "Leer": 0.025
        },
        "ability_raw_count": {
            "Ability: Prankster": 40
        },
        "ability_percents": {
            "Ability: Prankster": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 23,
            "Rocky Helmet": 5,
            "Focus Sash": 11,
            "": 1
        },
        "item_percents": {
            "Covert Cloak": 0.575,
            "Rocky Helmet": 0.125,
            "Focus Sash": 0.275,
            "": 0.025
        },
        "tera_type_raw_count": {
            "Dark": 19,
            "Ghost": 6,
            "Fire": 1,
            "Flying": 9,
            "Steel": 4,
            "Ground": 1
        },
        "tera_type_percents": {
            "Dark": 0.475,
            "Ghost": 0.15,
            "Fire": 0.025,
            "Flying": 0.225,
            "Steel": 0.1,
            "Ground": 0.025
        }
    },
    "maushold": {
        "count": 3,
        "move_raw_count": {
            "Feint": 3,
            "Follow Me": 3,
            "Helping Hand": 2,
            "Protect": 3,
            "Taunt": 1
        },
        "move_percents": {
            "Feint": 1.0,
            "Follow Me": 1.0,
            "Helping Hand": 0.6666666666666666,
            "Protect": 1.0,
            "Taunt": 0.3333333333333333
        },
        "ability_raw_count": {
            "Ability: Friend Guard": 3
        },
        "ability_percents": {
            "Ability: Friend Guard": 1.0
        },
        "item_raw_count": {
            "Rocky Helmet": 2,
            "Safety Goggles": 1
        },
        "item_percents": {
            "Rocky Helmet": 0.6666666666666666,
            "Safety Goggles": 0.3333333333333333
        },
        "tera_type_raw_count": {
            "Ghost": 2,
            "Ground": 1
        },
        "tera_type_percents": {
            "Ghost": 0.6666666666666666,
            "Ground": 0.3333333333333333
        }
    },
    "mienshao": {
        "count": 6,
        "move_raw_count": {
            "Close Combat": 6,
            "Feint": 6,
            "Fake Out": 6,
            "Wide Guard": 6
        },
        "move_percents": {
            "Close Combat": 1.0,
            "Feint": 1.0,
            "Fake Out": 1.0,
            "Wide Guard": 1.0
        },
        "ability_raw_count": {
            "Ability: Inner Focus": 6
        },
        "ability_percents": {
            "Ability: Inner Focus": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 6
        },
        "item_percents": {
            "Focus Sash": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 3,
            "Fighting": 3
        },
        "tera_type_percents": {
            "Ghost": 0.5,
            "Fighting": 0.5
        }
    },
    "smeargle": {
        "count": 18,
        "move_raw_count": {
            "Spore": 18,
            "Spiky Shield": 6,
            "Follow Me": 16,
            "Wide Guard": 12,
            "Fake Out": 11,
            "Decorate": 7,
            "Instruct": 1,
            "Seismic Toss": 1
        },
        "move_percents": {
            "Spore": 1.0,
            "Spiky Shield": 0.3333333333333333,
            "Follow Me": 0.8888888888888888,
            "Wide Guard": 0.6666666666666666,
            "Fake Out": 0.6111111111111112,
            "Decorate": 0.3888888888888889,
            "Instruct": 0.05555555555555555,
            "Seismic Toss": 0.05555555555555555
        },
        "ability_raw_count": {
            "Ability: Moody": 12,
            "Ability: Own Tempo": 6
        },
        "ability_percents": {
            "Ability: Moody": 0.6666666666666666,
            "Ability: Own Tempo": 0.3333333333333333
        },
        "item_raw_count": {
            "Focus Sash": 18
        },
        "item_percents": {
            "Focus Sash": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 9,
            "Grass": 8,
            "Normal": 1
        },
        "tera_type_percents": {
            "Ghost": 0.5,
            "Grass": 0.4444444444444444,
            "Normal": 0.05555555555555555
        }
    },
    "kyogre": {
        "count": 25,
        "move_raw_count": {
            "Water Spout": 20,
            "Ice Beam": 24,
            "Origin Pulse": 23,
            "Hydro Pump": 9,
            "Calm Mind": 5,
            "Protect": 10,
            "Thunder": 8,
            "Tera Blast": 1
        },
        "move_percents": {
            "Water Spout": 0.8,
            "Ice Beam": 0.96,
            "Origin Pulse": 0.92,
            "Hydro Pump": 0.36,
            "Calm Mind": 0.2,
            "Protect": 0.4,
            "Thunder": 0.32,
            "Tera Blast": 0.04
        },
        "ability_raw_count": {
            "Ability: Drizzle": 25
        },
        "ability_percents": {
            "Ability: Drizzle": 1.0
        },
        "item_raw_count": {
            "Choice Scarf": 6,
            "Leftovers": 5,
            "Assault Vest": 7,
            "Choice Specs": 2,
            "Mystic Water": 5
        },
        "item_percents": {
            "Choice Scarf": 0.24,
            "Leftovers": 0.2,
            "Assault Vest": 0.28,
            "Choice Specs": 0.08,
            "Mystic Water": 0.2
        },
        "tera_type_raw_count": {
            "Water": 7,
            "Grass": 18
        },
        "tera_type_percents": {
            "Water": 0.28,
            "Grass": 0.72
        }
    },
    "tsareena": {
        "count": 13,
        "move_raw_count": {
            "Triple Axel": 13,
            "Power Whip": 12,
            "Taunt": 6,
            "Helping Hand": 8,
            "Protect": 12,
            "Bullet Seed": 1
        },
        "move_percents": {
            "Triple Axel": 1.0,
            "Power Whip": 0.9230769230769231,
            "Taunt": 0.46153846153846156,
            "Helping Hand": 0.6153846153846154,
            "Protect": 0.9230769230769231,
            "Bullet Seed": 0.07692307692307693
        },
        "ability_raw_count": {
            "Ability: Queenly Majesty": 13
        },
        "ability_percents": {
            "Ability: Queenly Majesty": 1.0
        },
        "item_raw_count": {
            "Wide Lens": 12,
            "Loaded Dice": 1
        },
        "item_percents": {
            "Wide Lens": 0.9230769230769231,
            "Loaded Dice": 0.07692307692307693
        },
        "tera_type_raw_count": {
            "Ice": 9,
            "Fire": 2,
            "Water": 1,
            "Dark": 1
        },
        "tera_type_percents": {
            "Ice": 0.6923076923076923,
            "Fire": 0.15384615384615385,
            "Water": 0.07692307692307693,
            "Dark": 0.07692307692307693
        }
    },
    "chien-pao": {
        "count": 21,
        "move_raw_count": {
            "Protect": 21,
            "Ice Spinner": 7,
            "Sucker Punch": 21,
            "Sacred Sword": 9,
            "Icicle Crash": 14,
            "Tera Blast": 1,
            "Icy Wind": 2,
            "Crunch": 2,
            "Throat Chop": 5,
            "Lash Out": 2
        },
        "move_percents": {
            "Protect": 1.0,
            "Ice Spinner": 0.3333333333333333,
            "Sucker Punch": 1.0,
            "Sacred Sword": 0.42857142857142855,
            "Icicle Crash": 0.6666666666666666,
            "Tera Blast": 0.047619047619047616,
            "Icy Wind": 0.09523809523809523,
            "Crunch": 0.09523809523809523,
            "Throat Chop": 0.23809523809523808,
            "Lash Out": 0.09523809523809523
        },
        "ability_raw_count": {
            "Ability: Sword of Ruin": 21
        },
        "ability_percents": {
            "Ability: Sword of Ruin": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 19,
            "Life Orb": 2
        },
        "item_percents": {
            "Focus Sash": 0.9047619047619048,
            "Life Orb": 0.09523809523809523
        },
        "tera_type_raw_count": {
            "Stellar": 6,
            "Ghost": 14,
            "Water": 1
        },
        "tera_type_percents": {
            "Stellar": 0.2857142857142857,
            "Ghost": 0.6666666666666666,
            "Water": 0.047619047619047616
        }
    },
    "electabuzz": {
        "count": 8,
        "move_raw_count": {
            "Protect": 4,
            "Feint": 8,
            "Thunder": 4,
            "Follow Me": 8,
            "Volt Switch": 4,
            "Taunt": 4
        },
        "move_percents": {
            "Protect": 0.5,
            "Feint": 1.0,
            "Thunder": 0.5,
            "Follow Me": 1.0,
            "Volt Switch": 0.5,
            "Taunt": 0.5
        },
        "ability_raw_count": {
            "Ability: Vital Spirit": 8
        },
        "ability_percents": {
            "Ability: Vital Spirit": 1.0
        },
        "item_raw_count": {
            "Eviolite": 8
        },
        "item_percents": {
            "Eviolite": 1.0
        },
        "tera_type_raw_count": {
            "Water": 1,
            "Ghost": 7
        },
        "tera_type_percents": {
            "Water": 0.125,
            "Ghost": 0.875
        }
    },
    "farigiraf": {
        "count": 69,
        "move_raw_count": {
            "Shadow Ball": 13,
            "Hyper Voice": 28,
            "Trick Room": 69,
            "Psychic Noise": 44,
            "Foul Play": 33,
            "Helping Hand": 64,
            "Psyshock": 1,
            "Protect": 3,
            "Tera Blast": 4,
            "Psychic": 13,
            "Dazzling Gleam": 1,
            "Reflect": 1,
            "Ally Switch": 2
        },
        "move_percents": {
            "Shadow Ball": 0.18840579710144928,
            "Hyper Voice": 0.4057971014492754,
            "Trick Room": 1.0,
            "Psychic Noise": 0.6376811594202898,
            "Foul Play": 0.4782608695652174,
            "Helping Hand": 0.927536231884058,
            "Psyshock": 0.014492753623188406,
            "Protect": 0.043478260869565216,
            "Tera Blast": 0.057971014492753624,
            "Psychic": 0.18840579710144928,
            "Dazzling Gleam": 0.014492753623188406,
            "Reflect": 0.014492753623188406,
            "Ally Switch": 0.028985507246376812
        },
        "ability_raw_count": {
            "Ability: Armor Tail": 69
        },
        "ability_percents": {
            "Ability: Armor Tail": 1.0
        },
        "item_raw_count": {
            "Throat Spray": 24,
            "Electric Seed": 23,
            "Life Orb": 2,
            "Mental Herb": 4,
            "Safety Goggles": 4,
            "Sitrus Berry": 11,
            "Rocky Helmet": 1
        },
        "item_percents": {
            "Throat Spray": 0.34782608695652173,
            "Electric Seed": 0.3333333333333333,
            "Life Orb": 0.028985507246376812,
            "Mental Herb": 0.057971014492753624,
            "Safety Goggles": 0.057971014492753624,
            "Sitrus Berry": 0.15942028985507245,
            "Rocky Helmet": 0.014492753623188406
        },
        "tera_type_raw_count": {
            "Water": 30,
            "Ground": 14,
            "Fairy": 13,
            "Dark": 2,
            "Fire": 5,
            "Normal": 1,
            "Dragon": 3,
            "Grass": 1
        },
        "tera_type_percents": {
            "Water": 0.43478260869565216,
            "Ground": 0.2028985507246377,
            "Fairy": 0.18840579710144928,
            "Dark": 0.028985507246376812,
            "Fire": 0.07246376811594203,
            "Normal": 0.014492753623188406,
            "Dragon": 0.043478260869565216,
            "Grass": 0.014492753623188406
        }
    },
    "ogerpon-cornerstone": {
        "count": 36,
        "move_raw_count": {
            "Follow Me": 34,
            "Spiky Shield": 36,
            "Ivy Cudgel": 36,
            "Taunt": 2,
            "Horn Leech": 19,
            "Power Whip": 14,
            "Superpower": 1,
            "Stomping Tantrum": 1,
            "U-turn": 1
        },
        "move_percents": {
            "Follow Me": 0.9444444444444444,
            "Spiky Shield": 1.0,
            "Ivy Cudgel": 1.0,
            "Taunt": 0.05555555555555555,
            "Horn Leech": 0.5277777777777778,
            "Power Whip": 0.3888888888888889,
            "Superpower": 0.027777777777777776,
            "Stomping Tantrum": 0.027777777777777776,
            "U-turn": 0.027777777777777776
        },
        "ability_raw_count": {
            "Ability: Sturdy": 36
        },
        "ability_percents": {
            "Ability: Sturdy": 1.0
        },
        "item_raw_count": {
            "Cornerstone Mask": 36
        },
        "item_percents": {
            "Cornerstone Mask": 1.0
        },
        "tera_type_raw_count": {
            "Rock": 36
        },
        "tera_type_percents": {
            "Rock": 1.0
        }
    },
    "calyrex-ice": {
        "count": 50,
        "move_raw_count": {
            "Glacial Lance": 50,
            "High Horsepower": 44,
            "Trick Room": 50,
            "Protect": 48,
            "Close Combat": 5,
            "Tera Blast": 1,
            "Swords Dance": 2
        },
        "move_percents": {
            "Glacial Lance": 1.0,
            "High Horsepower": 0.88,
            "Trick Room": 1.0,
            "Protect": 0.96,
            "Close Combat": 0.1,
            "Tera Blast": 0.02,
            "Swords Dance": 0.04
        },
        "ability_raw_count": {
            "Ability: As One (Glastrier)": 50
        },
        "ability_percents": {
            "Ability: As One (Glastrier)": 1.0
        },
        "item_raw_count": {
            "Clear Amulet": 48,
            "Covert Cloak": 2
        },
        "item_percents": {
            "Clear Amulet": 0.96,
            "Covert Cloak": 0.04
        },
        "tera_type_raw_count": {
            "Fire": 29,
            "Electric": 1,
            "Water": 11,
            "Grass": 5,
            "Normal": 1,
            "Fairy": 1,
            "Dragon": 2
        },
        "tera_type_percents": {
            "Fire": 0.58,
            "Electric": 0.02,
            "Water": 0.22,
            "Grass": 0.1,
            "Normal": 0.02,
            "Fairy": 0.02,
            "Dragon": 0.04
        }
    },
    "indeedee-f": {
        "count": 18,
        "move_raw_count": {
            "Helping Hand": 17,
            "Alluring Voice": 6,
            "Follow Me": 18,
            "Trick Room": 17,
            "Psychic": 3,
            "Play Rough": 1,
            "Dazzling Gleam": 5,
            "Healing Wish": 1,
            "Tera Blast": 1,
            "Protect": 1,
            "Baton Pass": 1,
            "Reflect": 1
        },
        "move_percents": {
            "Helping Hand": 0.9444444444444444,
            "Alluring Voice": 0.3333333333333333,
            "Follow Me": 1.0,
            "Trick Room": 0.9444444444444444,
            "Psychic": 0.16666666666666666,
            "Play Rough": 0.05555555555555555,
            "Dazzling Gleam": 0.2777777777777778,
            "Healing Wish": 0.05555555555555555,
            "Tera Blast": 0.05555555555555555,
            "Protect": 0.05555555555555555,
            "Baton Pass": 0.05555555555555555,
            "Reflect": 0.05555555555555555
        },
        "ability_raw_count": {
            "Ability: Psychic Surge": 18
        },
        "ability_percents": {
            "Ability: Psychic Surge": 1.0
        },
        "item_raw_count": {
            "Rocky Helmet": 10,
            "Safety Goggles": 1,
            "Psychic Seed": 7
        },
        "item_percents": {
            "Rocky Helmet": 0.5555555555555556,
            "Safety Goggles": 0.05555555555555555,
            "Psychic Seed": 0.3888888888888889
        },
        "tera_type_raw_count": {
            "Grass": 7,
            "Fairy": 6,
            "Water": 3,
            "Dragon": 1,
            "Fighting": 1
        },
        "tera_type_percents": {
            "Grass": 0.3888888888888889,
            "Fairy": 0.3333333333333333,
            "Water": 0.16666666666666666,
            "Dragon": 0.05555555555555555,
            "Fighting": 0.05555555555555555
        }
    },
    "urshifu": {
        "count": 26,
        "move_raw_count": {
            "Wicked Blow": 26,
            "Sucker Punch": 25,
            "Close Combat": 26,
            "Detect": 16,
            "Protect": 7,
            "U-turn": 3,
            "Poison Jab": 1
        },
        "move_percents": {
            "Wicked Blow": 1.0,
            "Sucker Punch": 0.9615384615384616,
            "Close Combat": 1.0,
            "Detect": 0.6153846153846154,
            "Protect": 0.2692307692307692,
            "U-turn": 0.11538461538461539,
            "Poison Jab": 0.038461538461538464
        },
        "ability_raw_count": {
            "Ability: Unseen Fist": 26
        },
        "ability_percents": {
            "Ability: Unseen Fist": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 20,
            "Power Band": 1,
            "Clear Amulet": 1,
            "Life Orb": 1,
            "Choice Scarf": 1,
            "Choice Band": 2
        },
        "item_percents": {
            "Focus Sash": 0.7692307692307693,
            "Power Band": 0.038461538461538464,
            "Clear Amulet": 0.038461538461538464,
            "Life Orb": 0.038461538461538464,
            "Choice Scarf": 0.038461538461538464,
            "Choice Band": 0.07692307692307693
        },
        "tera_type_raw_count": {
            "Dark": 23,
            "Grass": 1,
            "Ghost": 1,
            "Poison": 1
        },
        "tera_type_percents": {
            "Dark": 0.8846153846153846,
            "Grass": 0.038461538461538464,
            "Ghost": 0.038461538461538464,
            "Poison": 0.038461538461538464
        }
    },
    "ogerpon-hearthflame": {
        "count": 33,
        "move_raw_count": {
            "Ivy Cudgel": 33,
            "Horn Leech": 9,
            "Follow Me": 30,
            "Spiky Shield": 33,
            "Grassy Glide": 13,
            "Wood Hammer": 7,
            "Swords Dance": 2,
            "Focus Energy": 3,
            "Play Rough": 1,
            "Power Whip": 1
        },
        "move_percents": {
            "Ivy Cudgel": 1.0,
            "Horn Leech": 0.2727272727272727,
            "Follow Me": 0.9090909090909091,
            "Spiky Shield": 1.0,
            "Grassy Glide": 0.3939393939393939,
            "Wood Hammer": 0.21212121212121213,
            "Swords Dance": 0.06060606060606061,
            "Focus Energy": 0.09090909090909091,
            "Play Rough": 0.030303030303030304,
            "Power Whip": 0.030303030303030304
        },
        "ability_raw_count": {
            "Ability: Mold Breaker": 33
        },
        "ability_percents": {
            "Ability: Mold Breaker": 1.0
        },
        "item_raw_count": {
            "Hearthflame Mask": 33
        },
        "item_percents": {
            "Hearthflame Mask": 1.0
        },
        "tera_type_raw_count": {
            "Fire": 33
        },
        "tera_type_percents": {
            "Fire": 1.0
        }
    },
    "whimsicott": {
        "count": 36,
        "move_raw_count": {
            "Light Screen": 21,
            "Tailwind": 36,
            "Moonblast": 36,
            "Encore": 31,
            "Helping Hand": 5,
            "Protect": 6,
            "Endeavor": 1,
            "Cotton Spore": 2,
            "Misty Terrain": 1,
            "Worry Seed": 1,
            "Sunny Day": 2,
            "Taunt": 1,
            "Charm": 1
        },
        "move_percents": {
            "Light Screen": 0.5833333333333334,
            "Tailwind": 1.0,
            "Moonblast": 1.0,
            "Encore": 0.8611111111111112,
            "Helping Hand": 0.1388888888888889,
            "Protect": 0.16666666666666666,
            "Endeavor": 0.027777777777777776,
            "Cotton Spore": 0.05555555555555555,
            "Misty Terrain": 0.027777777777777776,
            "Worry Seed": 0.027777777777777776,
            "Sunny Day": 0.05555555555555555,
            "Taunt": 0.027777777777777776,
            "Charm": 0.027777777777777776
        },
        "ability_raw_count": {
            "Ability: Prankster": 36
        },
        "ability_percents": {
            "Ability: Prankster": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 28,
            "Focus Sash": 6,
            "Mental Herb": 2
        },
        "item_percents": {
            "Covert Cloak": 0.7777777777777778,
            "Focus Sash": 0.16666666666666666,
            "Mental Herb": 0.05555555555555555
        },
        "tera_type_raw_count": {
            "Fire": 9,
            "Dark": 11,
            "Ghost": 7,
            "Water": 5,
            "Fairy": 1,
            "Normal": 1,
            "Poison": 1,
            "Rock": 1
        },
        "tera_type_percents": {
            "Fire": 0.25,
            "Dark": 0.3055555555555556,
            "Ghost": 0.19444444444444445,
            "Water": 0.1388888888888889,
            "Fairy": 0.027777777777777776,
            "Normal": 0.027777777777777776,
            "Poison": 0.027777777777777776,
            "Rock": 0.027777777777777776
        }
    },
    "torkoal": {
        "count": 5,
        "move_raw_count": {
            "Eruption": 5,
            "Weather Ball": 4,
            "Heat Wave": 3,
            "Protect": 3,
            "Earth Power": 4,
            "Overheat": 1
        },
        "move_percents": {
            "Eruption": 1.0,
            "Weather Ball": 0.8,
            "Heat Wave": 0.6,
            "Protect": 0.6,
            "Earth Power": 0.8,
            "Overheat": 0.2
        },
        "ability_raw_count": {
            "Ability: Drought": 5
        },
        "ability_percents": {
            "Ability: Drought": 1.0
        },
        "item_raw_count": {
            "Charcoal": 2,
            "Choice Specs": 2,
            "Covert Cloak": 1
        },
        "item_percents": {
            "Charcoal": 0.4,
            "Choice Specs": 0.4,
            "Covert Cloak": 0.2
        },
        "tera_type_raw_count": {
            "Fire": 5
        },
        "tera_type_percents": {
            "Fire": 1.0
        }
    },
    "annihilape": {
        "count": 9,
        "move_raw_count": {
            "Final Gambit": 9,
            "Close Combat": 8,
            "Shadow Claw": 8,
            "Coaching": 8,
            "Phantom Force": 1,
            "U-turn": 2
        },
        "move_percents": {
            "Final Gambit": 1.0,
            "Close Combat": 0.8888888888888888,
            "Shadow Claw": 0.8888888888888888,
            "Coaching": 0.8888888888888888,
            "Phantom Force": 0.1111111111111111,
            "U-turn": 0.2222222222222222
        },
        "ability_raw_count": {
            "Ability: Vital Spirit": 1,
            "Ability: Defiant": 8
        },
        "ability_percents": {
            "Ability: Vital Spirit": 0.1111111111111111,
            "Ability: Defiant": 0.8888888888888888
        },
        "item_raw_count": {
            "Choice Scarf": 9
        },
        "item_percents": {
            "Choice Scarf": 1.0
        },
        "tera_type_raw_count": {
            "": 1,
            "Grass": 8
        },
        "tera_type_percents": {
            "": 0.1111111111111111,
            "Grass": 0.8888888888888888
        }
    },
    "ursaluna-bloodmoon": {
        "count": 19,
        "move_raw_count": {
            "Blood Moon": 19,
            "Earth Power": 16,
            "Hyper Voice": 19,
            "Protect": 18,
            "Vacuum Wave": 1,
            "Calm Mind": 1,
            "Substitute": 2
        },
        "move_percents": {
            "Blood Moon": 1.0,
            "Earth Power": 0.8421052631578947,
            "Hyper Voice": 1.0,
            "Protect": 0.9473684210526315,
            "Vacuum Wave": 0.05263157894736842,
            "Calm Mind": 0.05263157894736842,
            "Substitute": 0.10526315789473684
        },
        "ability_raw_count": {
            "Ability: Mind's Eye": 19
        },
        "ability_percents": {
            "Ability: Mind's Eye": 1.0
        },
        "item_raw_count": {
            "Life Orb": 13,
            "Covert Cloak": 1,
            "Assault Vest": 1,
            "Silk Scarf": 4
        },
        "item_percents": {
            "Life Orb": 0.6842105263157895,
            "Covert Cloak": 0.05263157894736842,
            "Assault Vest": 0.05263157894736842,
            "Silk Scarf": 0.21052631578947367
        },
        "tera_type_raw_count": {
            "Normal": 18,
            "Ghost": 1
        },
        "tera_type_percents": {
            "Normal": 0.9473684210526315,
            "Ghost": 0.05263157894736842
        }
    },
    "hariyama": {
        "count": 1,
        "move_raw_count": {
            "Close Combat": 1,
            "Wide Guard": 1,
            "Coaching": 1,
            "Fake Out": 1
        },
        "move_percents": {
            "Close Combat": 1.0,
            "Wide Guard": 1.0,
            "Coaching": 1.0,
            "Fake Out": 1.0
        },
        "ability_raw_count": {
            "Ability: Thick Fat": 1
        },
        "ability_percents": {
            "Ability: Thick Fat": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 1
        },
        "item_percents": {
            "Covert Cloak": 1.0
        },
        "tera_type_raw_count": {
            "Steel": 1
        },
        "tera_type_percents": {
            "Steel": 1.0
        }
    },
    "volcarona": {
        "count": 13,
        "move_raw_count": {
            "Fiery Dance": 7,
            "Giga Drain": 5,
            "Quiver Dance": 8,
            "Protect": 11,
            "Bug Buzz": 2,
            "Will-O-Wisp": 5,
            "Rage Powder": 5,
            "Heat Wave": 3,
            "Tera Blast": 3,
            "Flamethrower": 2,
            "Struggle Bug": 1
        },
        "move_percents": {
            "Fiery Dance": 0.5384615384615384,
            "Giga Drain": 0.38461538461538464,
            "Quiver Dance": 0.6153846153846154,
            "Protect": 0.8461538461538461,
            "Bug Buzz": 0.15384615384615385,
            "Will-O-Wisp": 0.38461538461538464,
            "Rage Powder": 0.38461538461538464,
            "Heat Wave": 0.23076923076923078,
            "Tera Blast": 0.23076923076923078,
            "Flamethrower": 0.15384615384615385,
            "Struggle Bug": 0.07692307692307693
        },
        "ability_raw_count": {
            "Ability: Flame Body": 13
        },
        "ability_percents": {
            "Ability: Flame Body": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 2,
            "Safety Goggles": 3,
            "Leftovers": 5,
            "Sitrus Berry": 2,
            "Rocky Helmet": 1
        },
        "item_percents": {
            "Covert Cloak": 0.15384615384615385,
            "Safety Goggles": 0.23076923076923078,
            "Leftovers": 0.38461538461538464,
            "Sitrus Berry": 0.15384615384615385,
            "Rocky Helmet": 0.07692307692307693
        },
        "tera_type_raw_count": {
            "Water": 6,
            "Dragon": 2,
            "Grass": 3,
            "Fairy": 2
        },
        "tera_type_percents": {
            "Water": 0.46153846153846156,
            "Dragon": 0.15384615384615385,
            "Grass": 0.23076923076923078,
            "Fairy": 0.15384615384615385
        }
    },
    "maushold-four": {
        "count": 2,
        "move_raw_count": {
            "Super Fang": 1,
            "Follow Me": 2,
            "Taunt": 2,
            "Protect": 1,
            "Helping Hand": 1,
            "Feint": 1
        },
        "move_percents": {
            "Super Fang": 0.5,
            "Follow Me": 1.0,
            "Taunt": 1.0,
            "Protect": 0.5,
            "Helping Hand": 0.5,
            "Feint": 0.5
        },
        "ability_raw_count": {
            "Ability: Friend Guard": 2
        },
        "ability_percents": {
            "Ability: Friend Guard": 1.0
        },
        "item_raw_count": {
            "Rocky Helmet": 2
        },
        "item_percents": {
            "Rocky Helmet": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 2
        },
        "tera_type_percents": {
            "Ghost": 1.0
        }
    },
    "lunala": {
        "count": 5,
        "move_raw_count": {
            "Moongeist Beam": 5,
            "Moonblast": 3,
            "Calm Mind": 2,
            "Protect": 3,
            "Meteor Beam": 2,
            "Trick Room": 3,
            "Wide Guard": 1,
            "Expanding Force": 1
        },
        "move_percents": {
            "Moongeist Beam": 1.0,
            "Moonblast": 0.6,
            "Calm Mind": 0.4,
            "Protect": 0.6,
            "Meteor Beam": 0.4,
            "Trick Room": 0.6,
            "Wide Guard": 0.2,
            "Expanding Force": 0.2
        },
        "ability_raw_count": {
            "Ability: Shadow Shield": 5
        },
        "ability_percents": {
            "Ability: Shadow Shield": 1.0
        },
        "item_raw_count": {
            "Leftovers": 2,
            "Power Herb": 2,
            "Safety Goggles": 1
        },
        "item_percents": {
            "Leftovers": 0.4,
            "Power Herb": 0.4,
            "Safety Goggles": 0.2
        },
        "tera_type_raw_count": {
            "Fairy": 4,
            "Grass": 1
        },
        "tera_type_percents": {
            "Fairy": 0.8,
            "Grass": 0.2
        }
    },
    "terapagos": {
        "count": 12,
        "move_raw_count": {
            "Tera Starstorm": 12,
            "Hyper Beam": 4,
            "Earth Power": 11,
            "Dark Pulse": 5,
            "Protect": 7,
            "Calm Mind": 6,
            "Flamethrower": 1,
            "Tri Attack": 1,
            "Sleep Talk": 1
        },
        "move_percents": {
            "Tera Starstorm": 1.0,
            "Hyper Beam": 0.3333333333333333,
            "Earth Power": 0.9166666666666666,
            "Dark Pulse": 0.4166666666666667,
            "Protect": 0.5833333333333334,
            "Calm Mind": 0.5,
            "Flamethrower": 0.08333333333333333,
            "Tri Attack": 0.08333333333333333,
            "Sleep Talk": 0.08333333333333333
        },
        "ability_raw_count": {
            "Ability: Tera Shift": 12
        },
        "ability_percents": {
            "Ability: Tera Shift": 1.0
        },
        "item_raw_count": {
            "Choice Specs": 6,
            "Leftovers": 3,
            "Covert Cloak": 3
        },
        "item_percents": {
            "Choice Specs": 0.5,
            "Leftovers": 0.25,
            "Covert Cloak": 0.25
        },
        "tera_type_raw_count": {
            "Stellar": 12
        },
        "tera_type_percents": {
            "Stellar": 1.0
        }
    },
    "landorus": {
        "count": 11,
        "move_raw_count": {
            "Earth Power": 10,
            "Sludge Bomb": 11,
            "Sandsear Storm": 8,
            "Psychic": 2,
            "Protect": 10,
            "Substitute": 2,
            "Taunt": 1
        },
        "move_percents": {
            "Earth Power": 0.9090909090909091,
            "Sludge Bomb": 1.0,
            "Sandsear Storm": 0.7272727272727273,
            "Psychic": 0.18181818181818182,
            "Protect": 0.9090909090909091,
            "Substitute": 0.18181818181818182,
            "Taunt": 0.09090909090909091
        },
        "ability_raw_count": {
            "Ability: Sheer Force": 11
        },
        "ability_percents": {
            "Ability: Sheer Force": 1.0
        },
        "item_raw_count": {
            "Choice Scarf": 1,
            "Life Orb": 10
        },
        "item_percents": {
            "Choice Scarf": 0.09090909090909091,
            "Life Orb": 0.9090909090909091
        },
        "tera_type_raw_count": {
            "Poison": 4,
            "Fairy": 3,
            "Water": 2,
            "Normal": 1,
            "Steel": 1
        },
        "tera_type_percents": {
            "Poison": 0.36363636363636365,
            "Fairy": 0.2727272727272727,
            "Water": 0.18181818181818182,
            "Normal": 0.09090909090909091,
            "Steel": 0.09090909090909091
        }
    },
    "zamazenta-crowned": {
        "count": 6,
        "move_raw_count": {
            "Body Press": 6,
            "Wide Guard": 6,
            "Protect": 6,
            "Heavy Slam": 6
        },
        "move_percents": {
            "Body Press": 1.0,
            "Wide Guard": 1.0,
            "Protect": 1.0,
            "Heavy Slam": 1.0
        },
        "ability_raw_count": {
            "Ability: Dauntless Shield": 6
        },
        "ability_percents": {
            "Ability: Dauntless Shield": 1.0
        },
        "item_raw_count": {
            "Rusted Shield": 6
        },
        "item_percents": {
            "Rusted Shield": 1.0
        },
        "tera_type_raw_count": {
            "Dragon": 4,
            "Water": 1,
            "Grass": 1
        },
        "tera_type_percents": {
            "Dragon": 0.6666666666666666,
            "Water": 0.16666666666666666,
            "Grass": 0.16666666666666666
        }
    },
    "spectrier": {
        "count": 1,
        "move_raw_count": {
            "Will-O-Wisp": 1,
            "Shadow Ball": 1,
            "Snarl": 1,
            "Taunt": 1
        },
        "move_percents": {
            "Will-O-Wisp": 1.0,
            "Shadow Ball": 1.0,
            "Snarl": 1.0,
            "Taunt": 1.0
        },
        "ability_raw_count": {
            "Ability: Grim Neigh": 1
        },
        "ability_percents": {
            "Ability: Grim Neigh": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 1
        },
        "item_percents": {
            "Sitrus Berry": 1.0
        },
        "tera_type_raw_count": {
            "Fairy": 1
        },
        "tera_type_percents": {
            "Fairy": 1.0
        }
    },
    "heatran": {
        "count": 1,
        "move_raw_count": {
            "Heat Wave": 1,
            "Flash Cannon": 1,
            "Earth Power": 1,
            "Tera Blast": 1
        },
        "move_percents": {
            "Heat Wave": 1.0,
            "Flash Cannon": 1.0,
            "Earth Power": 1.0,
            "Tera Blast": 1.0
        },
        "ability_raw_count": {
            "Ability: Flash Fire": 1
        },
        "ability_percents": {
            "Ability: Flash Fire": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 1
        },
        "item_percents": {
            "Assault Vest": 1.0
        },
        "tera_type_raw_count": {
            "Fairy": 1
        },
        "tera_type_percents": {
            "Fairy": 1.0
        }
    },
    "ogerpon-wellspring": {
        "count": 11,
        "move_raw_count": {
            "Spiky Shield": 11,
            "Horn Leech": 7,
            "Ivy Cudgel": 11,
            "Follow Me": 11,
            "Grassy Glide": 1,
            "Taunt": 2,
            "Wood Hammer": 1
        },
        "move_percents": {
            "Spiky Shield": 1.0,
            "Horn Leech": 0.6363636363636364,
            "Ivy Cudgel": 1.0,
            "Follow Me": 1.0,
            "Grassy Glide": 0.09090909090909091,
            "Taunt": 0.18181818181818182,
            "Wood Hammer": 0.09090909090909091
        },
        "ability_raw_count": {
            "Ability: Water Absorb": 11
        },
        "ability_percents": {
            "Ability: Water Absorb": 1.0
        },
        "item_raw_count": {
            "Wellspring Mask": 11
        },
        "item_percents": {
            "Wellspring Mask": 1.0
        },
        "tera_type_raw_count": {
            "Water": 11
        },
        "tera_type_percents": {
            "Water": 1.0
        }
    },
    "murkrow": {
        "count": 1,
        "move_raw_count": {
            "Tailwind": 1,
            "Haze": 1,
            "Brave Bird": 1,
            "Protect": 1
        },
        "move_percents": {
            "Tailwind": 1.0,
            "Haze": 1.0,
            "Brave Bird": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Prankster": 1
        },
        "ability_percents": {
            "Ability: Prankster": 1.0
        },
        "item_raw_count": {
            "Eviolite": 1
        },
        "item_percents": {
            "Eviolite": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 1
        },
        "tera_type_percents": {
            "Ghost": 1.0
        }
    },
    "amoonguss": {
        "count": 29,
        "move_raw_count": {
            "Spore": 29,
            "Rage Powder": 29,
            "Pollen Puff": 22,
            "Protect": 27,
            "Sludge Bomb": 8,
            "Clear Smog": 1
        },
        "move_percents": {
            "Spore": 1.0,
            "Rage Powder": 1.0,
            "Pollen Puff": 0.7586206896551724,
            "Protect": 0.9310344827586207,
            "Sludge Bomb": 0.27586206896551724,
            "Clear Smog": 0.034482758620689655
        },
        "ability_raw_count": {
            "Ability: Regenerator": 28,
            "Ability: Effect Spore": 1
        },
        "ability_percents": {
            "Ability: Regenerator": 0.9655172413793104,
            "Ability: Effect Spore": 0.034482758620689655
        },
        "item_raw_count": {
            "Covert Cloak": 9,
            "Rocky Helmet": 13,
            "Mental Herb": 5,
            "Sitrus Berry": 1,
            "Leftovers": 1
        },
        "item_percents": {
            "Covert Cloak": 0.3103448275862069,
            "Rocky Helmet": 0.4482758620689655,
            "Mental Herb": 0.1724137931034483,
            "Sitrus Berry": 0.034482758620689655,
            "Leftovers": 0.034482758620689655
        },
        "tera_type_raw_count": {
            "Fairy": 4,
            "Water": 23,
            "Dark": 1,
            "Electric": 1
        },
        "tera_type_percents": {
            "Fairy": 0.13793103448275862,
            "Water": 0.7931034482758621,
            "Dark": 0.034482758620689655,
            "Electric": 0.034482758620689655
        }
    },
    "ditto": {
        "count": 9,
        "move_raw_count": {
            "Transform": 9
        },
        "move_percents": {
            "Transform": 1.0
        },
        "ability_raw_count": {
            "Ability: Imposter": 9
        },
        "ability_percents": {
            "Ability: Imposter": 1.0
        },
        "item_raw_count": {
            "Choice Scarf": 5,
            "Focus Sash": 3,
            "Safety Goggles": 1
        },
        "item_percents": {
            "Choice Scarf": 0.5555555555555556,
            "Focus Sash": 0.3333333333333333,
            "Safety Goggles": 0.1111111111111111
        },
        "tera_type_raw_count": {
            "Ghost": 4,
            "Normal": 2,
            "Fairy": 1,
            "Stellar": 2
        },
        "tera_type_percents": {
            "Ghost": 0.4444444444444444,
            "Normal": 0.2222222222222222,
            "Fairy": 0.1111111111111111,
            "Stellar": 0.2222222222222222
        }
    },
    "gholdengo": {
        "count": 4,
        "move_raw_count": {
            "Make It Rain": 4,
            "Shadow Ball": 4,
            "Nasty Plot": 4,
            "Protect": 4
        },
        "move_percents": {
            "Make It Rain": 1.0,
            "Shadow Ball": 1.0,
            "Nasty Plot": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Good as Gold": 4
        },
        "ability_percents": {
            "Ability: Good as Gold": 1.0
        },
        "item_raw_count": {
            "Leftovers": 3,
            "Metal Coat": 1
        },
        "item_percents": {
            "Leftovers": 0.75,
            "Metal Coat": 0.25
        },
        "tera_type_raw_count": {
            "Normal": 4
        },
        "tera_type_percents": {
            "Normal": 1.0
        }
    },
    "brute bonnet": {
        "count": 2,
        "move_raw_count": {
            "Bullet Seed": 1,
            "Spore": 2,
            "Rage Powder": 2,
            "Taunt": 1,
            "Seed Bomb": 1,
            "Sucker Punch": 1
        },
        "move_percents": {
            "Bullet Seed": 0.5,
            "Spore": 1.0,
            "Rage Powder": 1.0,
            "Taunt": 0.5,
            "Seed Bomb": 0.5,
            "Sucker Punch": 0.5
        },
        "ability_raw_count": {
            "Ability: Protosynthesis": 2
        },
        "ability_percents": {
            "Ability: Protosynthesis": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 2
        },
        "item_percents": {
            "Covert Cloak": 1.0
        },
        "tera_type_raw_count": {
            "Electric": 1,
            "Fairy": 1
        },
        "tera_type_percents": {
            "Electric": 0.5,
            "Fairy": 0.5
        }
    },
    "tyranitar": {
        "count": 2,
        "move_raw_count": {
            "Rock Slide": 2,
            "Knock Off": 2,
            "Low Kick": 2,
            "Protect": 1,
            "Tera Blast": 1
        },
        "move_percents": {
            "Rock Slide": 1.0,
            "Knock Off": 1.0,
            "Low Kick": 1.0,
            "Protect": 0.5,
            "Tera Blast": 0.5
        },
        "ability_raw_count": {
            "Ability: Sand Stream": 2
        },
        "ability_percents": {
            "Ability: Sand Stream": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 1,
            "Assault Vest": 1
        },
        "item_percents": {
            "Focus Sash": 0.5,
            "Assault Vest": 0.5
        },
        "tera_type_raw_count": {
            "Ghost": 1,
            "Flying": 1
        },
        "tera_type_percents": {
            "Ghost": 0.5,
            "Flying": 0.5
        }
    },
    "moltres-galar": {
        "count": 2,
        "move_raw_count": {
            "Fiery Wrath": 2,
            "Foul Play": 2,
            "Taunt": 2,
            "Protect": 2
        },
        "move_percents": {
            "Fiery Wrath": 1.0,
            "Foul Play": 1.0,
            "Taunt": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Berserk": 2
        },
        "ability_percents": {
            "Ability: Berserk": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 1,
            "Black Glasses": 1
        },
        "item_percents": {
            "Covert Cloak": 0.5,
            "Black Glasses": 0.5
        },
        "tera_type_raw_count": {
            "Ghost": 1,
            "Dark": 1
        },
        "tera_type_percents": {
            "Ghost": 0.5,
            "Dark": 0.5
        }
    },
    "latios": {
        "count": 1,
        "move_raw_count": {
            "Luster Purge": 1,
            "Draco Meteor": 1,
            "Tera Blast": 1,
            "Protect": 1
        },
        "move_percents": {
            "Luster Purge": 1.0,
            "Draco Meteor": 1.0,
            "Tera Blast": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Levitate": 1
        },
        "ability_percents": {
            "Ability: Levitate": 1.0
        },
        "item_raw_count": {
            "Life Orb": 1
        },
        "item_percents": {
            "Life Orb": 1.0
        },
        "tera_type_raw_count": {
            "Fire": 1
        },
        "tera_type_percents": {
            "Fire": 1.0
        }
    },
    "tatsugiri-droopy": {
        "count": 5,
        "move_raw_count": {
            "Draco Meteor": 5,
            "Mirror Coat": 2,
            "Counter": 2,
            "Taunt": 1,
            "Muddy Water": 3,
            "Icy Wind": 1,
            "Sleep Talk": 1,
            "Hydro Pump": 1,
            "Helping Hand": 2,
            "Protect": 2
        },
        "move_percents": {
            "Draco Meteor": 1.0,
            "Mirror Coat": 0.4,
            "Counter": 0.4,
            "Taunt": 0.2,
            "Muddy Water": 0.6,
            "Icy Wind": 0.2,
            "Sleep Talk": 0.2,
            "Hydro Pump": 0.2,
            "Helping Hand": 0.4,
            "Protect": 0.4
        },
        "ability_raw_count": {
            "Ability: Commander": 5
        },
        "ability_percents": {
            "Ability: Commander": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 3,
            "Assault Vest": 1,
            "Choice Scarf": 1
        },
        "item_percents": {
            "Focus Sash": 0.6,
            "Assault Vest": 0.2,
            "Choice Scarf": 0.2
        },
        "tera_type_raw_count": {
            "Dragon": 1,
            "Normal": 2,
            "Stellar": 2
        },
        "tera_type_percents": {
            "Dragon": 0.2,
            "Normal": 0.4,
            "Stellar": 0.4
        }
    },
    "pelipper": {
        "count": 9,
        "move_raw_count": {
            "Protect": 6,
            "Hurricane": 9,
            "Weather Ball": 9,
            "Wide Guard": 9,
            "Tailwind": 1,
            "Helping Hand": 2
        },
        "move_percents": {
            "Protect": 0.6666666666666666,
            "Hurricane": 1.0,
            "Weather Ball": 1.0,
            "Wide Guard": 1.0,
            "Tailwind": 0.1111111111111111,
            "Helping Hand": 0.2222222222222222
        },
        "ability_raw_count": {
            "Ability: Drizzle": 9
        },
        "ability_percents": {
            "Ability: Drizzle": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 2,
            "Focus Sash": 5,
            "Life Orb": 1,
            "Safety Goggles": 1
        },
        "item_percents": {
            "Covert Cloak": 0.2222222222222222,
            "Focus Sash": 0.5555555555555556,
            "Life Orb": 0.1111111111111111,
            "Safety Goggles": 0.1111111111111111
        },
        "tera_type_raw_count": {
            "Grass": 3,
            "Ghost": 6
        },
        "tera_type_percents": {
            "Grass": 0.3333333333333333,
            "Ghost": 0.6666666666666666
        }
    },
    "rhydon": {
        "count": 1,
        "move_raw_count": {
            "Protect": 1,
            "High Horsepower": 1,
            "Supercell Slam": 1,
            "Uproar": 1
        },
        "move_percents": {
            "Protect": 1.0,
            "High Horsepower": 1.0,
            "Supercell Slam": 1.0,
            "Uproar": 1.0
        },
        "ability_raw_count": {
            "Ability: Lightning Rod": 1
        },
        "ability_percents": {
            "Ability: Lightning Rod": 1.0
        },
        "item_raw_count": {
            "Eviolite": 1
        },
        "item_percents": {
            "Eviolite": 1.0
        },
        "tera_type_raw_count": {
            "Fairy": 1
        },
        "tera_type_percents": {
            "Fairy": 1.0
        }
    },
    "basculegion": {
        "count": 4,
        "move_raw_count": {
            "Wave Crash": 4,
            "Last Respects": 4,
            "Aqua Jet": 4,
            "Protect": 3,
            "Tera Blast": 1
        },
        "move_percents": {
            "Wave Crash": 1.0,
            "Last Respects": 1.0,
            "Aqua Jet": 1.0,
            "Protect": 0.75,
            "Tera Blast": 0.25
        },
        "ability_raw_count": {
            "Ability: Swift Swim": 4
        },
        "ability_percents": {
            "Ability: Swift Swim": 1.0
        },
        "item_raw_count": {
            "Life Orb": 3,
            "Choice Band": 1
        },
        "item_percents": {
            "Life Orb": 0.75,
            "Choice Band": 0.25
        },
        "tera_type_raw_count": {
            "Grass": 4
        },
        "tera_type_percents": {
            "Grass": 1.0
        }
    },
    "zacian-crowned": {
        "count": 4,
        "move_raw_count": {
            "Behemoth Blade": 3,
            "Play Rough": 4,
            "Swords Dance": 3,
            "Protect": 4,
            "Iron Head": 1,
            "Sacred Sword": 1
        },
        "move_percents": {
            "Behemoth Blade": 0.75,
            "Play Rough": 1.0,
            "Swords Dance": 0.75,
            "Protect": 1.0,
            "Iron Head": 0.25,
            "Sacred Sword": 0.25
        },
        "ability_raw_count": {
            "Ability: Intrepid Sword": 4
        },
        "ability_percents": {
            "Ability: Intrepid Sword": 1.0
        },
        "item_raw_count": {
            "Rusted Sword": 4
        },
        "item_percents": {
            "Rusted Sword": 1.0
        },
        "tera_type_raw_count": {
            "Fairy": 3,
            "Dragon": 1
        },
        "tera_type_percents": {
            "Fairy": 0.75,
            "Dragon": 0.25
        }
    },
    "umbreon": {
        "count": 2,
        "move_raw_count": {
            "Foul Play": 2,
            "Yawn": 2,
            "Taunt": 2,
            "Helping Hand": 2
        },
        "move_percents": {
            "Foul Play": 1.0,
            "Yawn": 1.0,
            "Taunt": 1.0,
            "Helping Hand": 1.0
        },
        "ability_raw_count": {
            "Ability: Inner Focus": 2
        },
        "ability_percents": {
            "Ability: Inner Focus": 1.0
        },
        "item_raw_count": {
            "Safety Goggles": 2
        },
        "item_percents": {
            "Safety Goggles": 1.0
        },
        "tera_type_raw_count": {
            "Water": 2
        },
        "tera_type_percents": {
            "Water": 1.0
        }
    },
    "kingambit": {
        "count": 2,
        "move_raw_count": {
            "Kowtow Cleave": 2,
            "Iron Head": 2,
            "Brick Break": 1,
            "Sucker Punch": 2,
            "Protect": 1
        },
        "move_percents": {
            "Kowtow Cleave": 1.0,
            "Iron Head": 1.0,
            "Brick Break": 0.5,
            "Sucker Punch": 1.0,
            "Protect": 0.5
        },
        "ability_raw_count": {
            "Ability: Defiant": 2
        },
        "ability_percents": {
            "Ability: Defiant": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 1,
            "Lum Berry": 1
        },
        "item_percents": {
            "Assault Vest": 0.5,
            "Lum Berry": 0.5
        },
        "tera_type_raw_count": {
            "Fairy": 1,
            "Poison": 1
        },
        "tera_type_percents": {
            "Fairy": 0.5,
            "Poison": 0.5
        }
    },
    "archaludon": {
        "count": 4,
        "move_raw_count": {
            "Electro Shot": 4,
            "Draco Meteor": 3,
            "Steel Beam": 3,
            "Protect": 3,
            "Dragon Pulse": 1,
            "Flash Cannon": 1,
            "Body Press": 1
        },
        "move_percents": {
            "Electro Shot": 1.0,
            "Draco Meteor": 0.75,
            "Steel Beam": 0.75,
            "Protect": 0.75,
            "Dragon Pulse": 0.25,
            "Flash Cannon": 0.25,
            "Body Press": 0.25
        },
        "ability_raw_count": {
            "Ability: Stalwart": 3,
            "Ability: Stamina": 1
        },
        "ability_percents": {
            "Ability: Stalwart": 0.75,
            "Ability: Stamina": 0.25
        },
        "item_raw_count": {
            "Safety Goggles": 3,
            "Assault Vest": 1
        },
        "item_percents": {
            "Safety Goggles": 0.75,
            "Assault Vest": 0.25
        },
        "tera_type_raw_count": {
            "Ghost": 2,
            "Bug": 1,
            "Fairy": 1
        },
        "tera_type_percents": {
            "Ghost": 0.5,
            "Bug": 0.25,
            "Fairy": 0.25
        }
    },
    "flamigo": {
        "count": 1,
        "move_raw_count": {
            "Close Combat": 1,
            "Feint": 1,
            "Wide Guard": 1,
            "Upper Hand": 1
        },
        "move_percents": {
            "Close Combat": 1.0,
            "Feint": 1.0,
            "Wide Guard": 1.0,
            "Upper Hand": 1.0
        },
        "ability_raw_count": {
            "Ability: Scrappy": 1
        },
        "ability_percents": {
            "Ability: Scrappy": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 1
        },
        "item_percents": {
            "Focus Sash": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 1
        },
        "tera_type_percents": {
            "Grass": 1.0
        }
    },
    "ogerpon": {
        "count": 3,
        "move_raw_count": {
            "Ivy Cudgel": 2,
            "Superpower": 2,
            "Follow Me": 2,
            "Spiky Shield": 3,
            "Wood Hammer": 1,
            "Horn Leech": 1,
            "U-turn": 1
        },
        "move_percents": {
            "Ivy Cudgel": 0.6666666666666666,
            "Superpower": 0.6666666666666666,
            "Follow Me": 0.6666666666666666,
            "Spiky Shield": 1.0,
            "Wood Hammer": 0.3333333333333333,
            "Horn Leech": 0.3333333333333333,
            "U-turn": 0.3333333333333333
        },
        "ability_raw_count": {
            "Ability: Defiant": 3
        },
        "ability_percents": {
            "Ability: Defiant": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 3
        },
        "item_percents": {
            "Covert Cloak": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 3
        },
        "tera_type_percents": {
            "Grass": 1.0
        }
    },
    "iron crown": {
        "count": 3,
        "move_raw_count": {
            "Tachyon Cutter": 3,
            "Expanding Force": 1,
            "Tera Blast": 3,
            "Protect": 3,
            "Calm Mind": 1,
            "Psychic Noise": 1
        },
        "move_percents": {
            "Tachyon Cutter": 1.0,
            "Expanding Force": 0.3333333333333333,
            "Tera Blast": 1.0,
            "Protect": 1.0,
            "Calm Mind": 0.3333333333333333,
            "Psychic Noise": 0.3333333333333333
        },
        "ability_raw_count": {
            "Ability: Quark Drive": 3
        },
        "ability_percents": {
            "Ability: Quark Drive": 1.0
        },
        "item_raw_count": {
            "Life Orb": 1,
            "Booster Energy": 2
        },
        "item_percents": {
            "Life Orb": 0.3333333333333333,
            "Booster Energy": 0.6666666666666666
        },
        "tera_type_raw_count": {
            "Ground": 3
        },
        "tera_type_percents": {
            "Ground": 1.0
        }
    },
    "pikachu": {
        "count": 1,
        "move_raw_count": {
            "Fake Out": 1,
            "Feint": 1,
            "Upper Hand": 1,
            "Thunder": 1
        },
        "move_percents": {
            "Fake Out": 1.0,
            "Feint": 1.0,
            "Upper Hand": 1.0,
            "Thunder": 1.0
        },
        "ability_raw_count": {
            "Ability: Lightning Rod": 1
        },
        "ability_percents": {
            "Ability: Lightning Rod": 1.0
        },
        "item_raw_count": {
            "Light Ball": 1
        },
        "item_percents": {
            "Light Ball": 1.0
        },
        "tera_type_raw_count": {
            "Fairy": 1
        },
        "tera_type_percents": {
            "Fairy": 1.0
        }
    },
    "entei": {
        "count": 9,
        "move_raw_count": {
            "Sacred Fire": 9,
            "Extreme Speed": 9,
            "Stomping Tantrum": 6,
            "Protect": 2,
            "Bulldoze": 1,
            "Stone Edge": 2,
            "Tera Blast": 1,
            "Flare Blitz": 4,
            "Eruption": 1,
            "Snarl": 1
        },
        "move_percents": {
            "Sacred Fire": 1.0,
            "Extreme Speed": 1.0,
            "Stomping Tantrum": 0.6666666666666666,
            "Protect": 0.2222222222222222,
            "Bulldoze": 0.1111111111111111,
            "Stone Edge": 0.2222222222222222,
            "Tera Blast": 0.1111111111111111,
            "Flare Blitz": 0.4444444444444444,
            "Eruption": 0.1111111111111111,
            "Snarl": 0.1111111111111111
        },
        "ability_raw_count": {
            "Ability: Pressure": 1,
            "Ability: Inner Focus": 8
        },
        "ability_percents": {
            "Ability: Pressure": 0.1111111111111111,
            "Ability: Inner Focus": 0.8888888888888888
        },
        "item_raw_count": {
            "Life Orb": 2,
            "Choice Band": 5,
            "Choice Scarf": 1,
            "Assault Vest": 1
        },
        "item_percents": {
            "Life Orb": 0.2222222222222222,
            "Choice Band": 0.5555555555555556,
            "Choice Scarf": 0.1111111111111111,
            "Assault Vest": 0.1111111111111111
        },
        "tera_type_raw_count": {
            "Grass": 2,
            "Normal": 6,
            "Fire": 1
        },
        "tera_type_percents": {
            "Grass": 0.2222222222222222,
            "Normal": 0.6666666666666666,
            "Fire": 0.1111111111111111
        }
    },
    "zamazenta": {
        "count": 3,
        "move_raw_count": {
            "Body Press": 3,
            "Heavy Slam": 3,
            "Wide Guard": 2,
            "Protect": 3,
            "Iron Defense": 1
        },
        "move_percents": {
            "Body Press": 1.0,
            "Heavy Slam": 1.0,
            "Wide Guard": 0.6666666666666666,
            "Protect": 1.0,
            "Iron Defense": 0.3333333333333333
        },
        "ability_raw_count": {
            "Ability: Dauntless Shield": 3
        },
        "ability_percents": {
            "Ability: Dauntless Shield": 1.0
        },
        "item_raw_count": {
            "Rusted Shield": 3
        },
        "item_percents": {
            "Rusted Shield": 1.0
        },
        "tera_type_raw_count": {
            "Dragon": 2,
            "Grass": 1
        },
        "tera_type_percents": {
            "Dragon": 0.6666666666666666,
            "Grass": 0.3333333333333333
        }
    },
    "regieleki": {
        "count": 4,
        "move_raw_count": {
            "Electroweb": 4,
            "Thunderbolt": 3,
            "Tera Blast": 1,
            "Protect": 4,
            "Volt Switch": 2,
            "Thunder": 1,
            "Thunder Wave": 1
        },
        "move_percents": {
            "Electroweb": 1.0,
            "Thunderbolt": 0.75,
            "Tera Blast": 0.25,
            "Protect": 1.0,
            "Volt Switch": 0.5,
            "Thunder": 0.25,
            "Thunder Wave": 0.25
        },
        "ability_raw_count": {
            "Ability: Transistor": 4
        },
        "ability_percents": {
            "Ability: Transistor": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 4
        },
        "item_percents": {
            "Focus Sash": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 3,
            "Electric": 1
        },
        "tera_type_percents": {
            "Ghost": 0.75,
            "Electric": 0.25
        }
    },
    "iron bundle": {
        "count": 3,
        "move_raw_count": {
            "Freeze-Dry": 3,
            "Icy Wind": 3,
            "Hydro Pump": 2,
            "Protect": 2,
            "Encore": 1,
            "Blizzard": 1
        },
        "move_percents": {
            "Freeze-Dry": 1.0,
            "Icy Wind": 1.0,
            "Hydro Pump": 0.6666666666666666,
            "Protect": 0.6666666666666666,
            "Encore": 0.3333333333333333,
            "Blizzard": 0.3333333333333333
        },
        "ability_raw_count": {
            "Ability: Quark Drive": 3
        },
        "ability_percents": {
            "Ability: Quark Drive": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 2,
            "Choice Specs": 1
        },
        "item_percents": {
            "Focus Sash": 0.6666666666666666,
            "Choice Specs": 0.3333333333333333
        },
        "tera_type_raw_count": {
            "Ghost": 2,
            "Ice": 1
        },
        "tera_type_percents": {
            "Ghost": 0.6666666666666666,
            "Ice": 0.3333333333333333
        }
    },
    "iron treads": {
        "count": 1,
        "move_raw_count": {
            "High Horsepower": 1,
            "Steel Roller": 1,
            "Protect": 1,
            "Iron Head": 1
        },
        "move_percents": {
            "High Horsepower": 1.0,
            "Steel Roller": 1.0,
            "Protect": 1.0,
            "Iron Head": 1.0
        },
        "ability_raw_count": {
            "Ability: Quark Drive": 1
        },
        "ability_percents": {
            "Ability: Quark Drive": 1.0
        },
        "item_raw_count": {
            "Life Orb": 1
        },
        "item_percents": {
            "Life Orb": 1.0
        },
        "tera_type_raw_count": {
            "Stellar": 1
        },
        "tera_type_percents": {
            "Stellar": 1.0
        }
    },
    "hatterene": {
        "count": 2,
        "move_raw_count": {
            "Trick Room": 2,
            "Giga Drain": 1,
            "Dazzling Gleam": 2,
            "Expanding Force": 2,
            "Protect": 1
        },
        "move_percents": {
            "Trick Room": 1.0,
            "Giga Drain": 0.5,
            "Dazzling Gleam": 1.0,
            "Expanding Force": 1.0,
            "Protect": 0.5
        },
        "ability_raw_count": {
            "Ability: Magic Bounce": 2
        },
        "ability_percents": {
            "Ability: Magic Bounce": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 1,
            "Life Orb": 1
        },
        "item_percents": {
            "Covert Cloak": 0.5,
            "Life Orb": 0.5
        },
        "tera_type_raw_count": {
            "Water": 1,
            "Fire": 1
        },
        "tera_type_percents": {
            "Water": 0.5,
            "Fire": 0.5
        }
    },
    "garganacl": {
        "count": 1,
        "move_raw_count": {
            "Protect": 1,
            "Wide Guard": 1,
            "Recover": 1,
            "Salt Cure": 1
        },
        "move_percents": {
            "Protect": 1.0,
            "Wide Guard": 1.0,
            "Recover": 1.0,
            "Salt Cure": 1.0
        },
        "ability_raw_count": {
            "Ability: Purifying Salt": 1
        },
        "ability_percents": {
            "Ability: Purifying Salt": 1.0
        },
        "item_raw_count": {
            "Leftovers": 1
        },
        "item_percents": {
            "Leftovers": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 1
        },
        "tera_type_percents": {
            "Ghost": 1.0
        }
    },
    "araquanid": {
        "count": 1,
        "move_raw_count": {
            "Liquidation": 1,
            "Leech Life": 1,
            "Waterfall": 1,
            "Wide Guard": 1
        },
        "move_percents": {
            "Liquidation": 1.0,
            "Leech Life": 1.0,
            "Waterfall": 1.0,
            "Wide Guard": 1.0
        },
        "ability_raw_count": {
            "Ability: Water Bubble": 1
        },
        "ability_percents": {
            "Ability: Water Bubble": 1.0
        },
        "item_raw_count": {
            "Mystic Water": 1
        },
        "item_percents": {
            "Mystic Water": 1.0
        },
        "tera_type_raw_count": {
            "Water": 1
        },
        "tera_type_percents": {
            "Water": 1.0
        }
    },
    "regidrago": {
        "count": 1,
        "move_raw_count": {
            "Dragon Energy": 1,
            "Draco Meteor": 1,
            "Earth Power": 1,
            "Protect": 1
        },
        "move_percents": {
            "Dragon Energy": 1.0,
            "Draco Meteor": 1.0,
            "Earth Power": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Dragon's Maw": 1
        },
        "ability_percents": {
            "Ability: Dragon's Maw": 1.0
        },
        "item_raw_count": {
            "Dragon Fang": 1
        },
        "item_percents": {
            "Dragon Fang": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 1
        },
        "tera_type_percents": {
            "Ghost": 1.0
        }
    },
    "goodra-hisui": {
        "count": 1,
        "move_raw_count": {
            "Heavy Slam": 1,
            "Body Press": 1,
            "Shelter": 1,
            "Feint": 1
        },
        "move_percents": {
            "Heavy Slam": 1.0,
            "Body Press": 1.0,
            "Shelter": 1.0,
            "Feint": 1.0
        },
        "ability_raw_count": {
            "Ability: Shell Armor": 1
        },
        "ability_percents": {
            "Ability: Shell Armor": 1.0
        },
        "item_raw_count": {
            "Electric Seed": 1
        },
        "item_percents": {
            "Electric Seed": 1.0
        },
        "tera_type_raw_count": {
            "Fairy": 1
        },
        "tera_type_percents": {
            "Fairy": 1.0
        }
    },
    "wo-chien": {
        "count": 2,
        "move_raw_count": {
            "Ruination": 1,
            "Leech Seed": 1,
            "Pollen Puff": 2,
            "Protect": 1,
            "Foul Play": 1,
            "Leaf Storm": 1,
            "Snarl": 1
        },
        "move_percents": {
            "Ruination": 0.5,
            "Leech Seed": 0.5,
            "Pollen Puff": 1.0,
            "Protect": 0.5,
            "Foul Play": 0.5,
            "Leaf Storm": 0.5,
            "Snarl": 0.5
        },
        "ability_raw_count": {
            "Ability: Tablets of Ruin": 2
        },
        "ability_percents": {
            "Ability: Tablets of Ruin": 1.0
        },
        "item_raw_count": {
            "Leftovers": 1,
            "Assault Vest": 1
        },
        "item_percents": {
            "Leftovers": 0.5,
            "Assault Vest": 0.5
        },
        "tera_type_raw_count": {
            "Poison": 2
        },
        "tera_type_percents": {
            "Poison": 1.0
        }
    },
    "iron jugulis": {
        "count": 1,
        "move_raw_count": {
            "Tailwind": 1,
            "Hurricane": 1,
            "Protect": 1,
            "Snarl": 1
        },
        "move_percents": {
            "Tailwind": 1.0,
            "Hurricane": 1.0,
            "Protect": 1.0,
            "Snarl": 1.0
        },
        "ability_raw_count": {
            "Ability: Quark Drive": 1
        },
        "ability_percents": {
            "Ability: Quark Drive": 1.0
        },
        "item_raw_count": {
            "Booster Energy": 1
        },
        "item_percents": {
            "Booster Energy": 1.0
        },
        "tera_type_raw_count": {
            "Water": 1
        },
        "tera_type_percents": {
            "Water": 1.0
        }
    },
    "chandelure": {
        "count": 1,
        "move_raw_count": {
            "Protect": 1,
            "Heat Wave": 1,
            "Trick Room": 1,
            "Shadow Ball": 1
        },
        "move_percents": {
            "Protect": 1.0,
            "Heat Wave": 1.0,
            "Trick Room": 1.0,
            "Shadow Ball": 1.0
        },
        "ability_raw_count": {
            "Ability: Flash Fire": 1
        },
        "ability_percents": {
            "Ability: Flash Fire": 1.0
        },
        "item_raw_count": {
            "Life Orb": 1
        },
        "item_percents": {
            "Life Orb": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 1
        },
        "tera_type_percents": {
            "Grass": 1.0
        }
    },
    "okidogi": {
        "count": 1,
        "move_raw_count": {
            "Upper Hand": 1,
            "Drain Punch": 1,
            "High Horsepower": 1,
            "Poison Jab": 1
        },
        "move_percents": {
            "Upper Hand": 1.0,
            "Drain Punch": 1.0,
            "High Horsepower": 1.0,
            "Poison Jab": 1.0
        },
        "ability_raw_count": {
            "Ability: Guard Dog": 1
        },
        "ability_percents": {
            "Ability: Guard Dog": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 1
        },
        "item_percents": {
            "Assault Vest": 1.0
        },
        "tera_type_raw_count": {
            "Ground": 1
        },
        "tera_type_percents": {
            "Ground": 1.0
        }
    },
    "ho-oh": {
        "count": 1,
        "move_raw_count": {
            "Sacred Fire": 1,
            "Brave Bird": 1,
            "Tailwind": 1,
            "Recover": 1
        },
        "move_percents": {
            "Sacred Fire": 1.0,
            "Brave Bird": 1.0,
            "Tailwind": 1.0,
            "Recover": 1.0
        },
        "ability_raw_count": {
            "Ability: Regenerator": 1
        },
        "ability_percents": {
            "Ability: Regenerator": 1.0
        },
        "item_raw_count": {
            "Leftovers": 1
        },
        "item_percents": {
            "Leftovers": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 1
        },
        "tera_type_percents": {
            "Grass": 1.0
        }
    },
    "lapras": {
        "count": 1,
        "move_raw_count": {
            "Freeze-Dry": 1,
            "Alluring Voice": 1,
            "Hydro Pump": 1,
            "Protect": 1
        },
        "move_percents": {
            "Freeze-Dry": 1.0,
            "Alluring Voice": 1.0,
            "Hydro Pump": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Water Absorb": 1
        },
        "ability_percents": {
            "Ability: Water Absorb": 1.0
        },
        "item_raw_count": {
            "Expert Belt": 1
        },
        "item_percents": {
            "Expert Belt": 1.0
        },
        "tera_type_raw_count": {
            "Fairy": 1
        },
        "tera_type_percents": {
            "Fairy": 1.0
        }
    },
    "roaring moon": {
        "count": 2,
        "move_raw_count": {
            "Acrobatics": 1,
            "Knock Off": 2,
            "Dragon Dance": 1,
            "Protect": 1,
            "Taunt": 1,
            "Tailwind": 1,
            "Dragon Claw": 1
        },
        "move_percents": {
            "Acrobatics": 0.5,
            "Knock Off": 1.0,
            "Dragon Dance": 0.5,
            "Protect": 0.5,
            "Taunt": 0.5,
            "Tailwind": 0.5,
            "Dragon Claw": 0.5
        },
        "ability_raw_count": {
            "Ability: Protosynthesis": 2
        },
        "ability_percents": {
            "Ability: Protosynthesis": 1.0
        },
        "item_raw_count": {
            "Booster Energy": 2
        },
        "item_percents": {
            "Booster Energy": 1.0
        },
        "tera_type_raw_count": {
            "Flying": 1,
            "Ghost": 1
        },
        "tera_type_percents": {
            "Flying": 0.5,
            "Ghost": 0.5
        }
    },
    "zacian": {
        "count": 2,
        "move_raw_count": {
            "Iron Head": 2,
            "Play Rough": 2,
            "Protect": 2,
            "Swords Dance": 2
        },
        "move_percents": {
            "Iron Head": 1.0,
            "Play Rough": 1.0,
            "Protect": 1.0,
            "Swords Dance": 1.0
        },
        "ability_raw_count": {
            "Ability: Intrepid Sword": 2
        },
        "ability_percents": {
            "Ability: Intrepid Sword": 1.0
        },
        "item_raw_count": {
            "Rusted Sword": 2
        },
        "item_percents": {
            "Rusted Sword": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 1,
            "Dragon": 1
        },
        "tera_type_percents": {
            "Grass": 0.5,
            "Dragon": 0.5
        }
    },
    "iron moth": {
        "count": 1,
        "move_raw_count": {
            "Fire Blast": 1,
            "Heat Wave": 1,
            "Sludge Wave": 1,
            "Energy Ball": 1
        },
        "move_percents": {
            "Fire Blast": 1.0,
            "Heat Wave": 1.0,
            "Sludge Wave": 1.0,
            "Energy Ball": 1.0
        },
        "ability_raw_count": {
            "Ability: Quark Drive": 1
        },
        "ability_percents": {
            "Ability: Quark Drive": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 1
        },
        "item_percents": {
            "Assault Vest": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 1
        },
        "tera_type_percents": {
            "Grass": 1.0
        }
    },
    "landorus-therian": {
        "count": 1,
        "move_raw_count": {
            "U-turn": 1,
            "Rock Slide": 1,
            "Rock Tomb": 1,
            "Stomping Tantrum": 1
        },
        "move_percents": {
            "U-turn": 1.0,
            "Rock Slide": 1.0,
            "Rock Tomb": 1.0,
            "Stomping Tantrum": 1.0
        },
        "ability_raw_count": {
            "Ability: Intimidate": 1
        },
        "ability_percents": {
            "Ability: Intimidate": 1.0
        },
        "item_raw_count": {
            "Choice Scarf": 1
        },
        "item_percents": {
            "Choice Scarf": 1.0
        },
        "tera_type_raw_count": {
            "Steel": 1
        },
        "tera_type_percents": {
            "Steel": 1.0
        }
    },
    "comfey": {
        "count": 1,
        "move_raw_count": {
            "Floral Healing": 1,
            "Draining Kiss": 1,
            "Trick Room": 1,
            "Protect": 1
        },
        "move_percents": {
            "Floral Healing": 1.0,
            "Draining Kiss": 1.0,
            "Trick Room": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Triage": 1
        },
        "ability_percents": {
            "Ability: Triage": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 1
        },
        "item_percents": {
            "Sitrus Berry": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 1
        },
        "tera_type_percents": {
            "Grass": 1.0
        }
    },
    "armarouge": {
        "count": 2,
        "move_raw_count": {
            "Armor Cannon": 2,
            "Expanding Force": 1,
            "Wide Guard": 2,
            "Meteor Beam": 1,
            "Trick Room": 1,
            "Psychic": 1
        },
        "move_percents": {
            "Armor Cannon": 1.0,
            "Expanding Force": 0.5,
            "Wide Guard": 1.0,
            "Meteor Beam": 0.5,
            "Trick Room": 0.5,
            "Psychic": 0.5
        },
        "ability_raw_count": {
            "Ability: Flash Fire": 2
        },
        "ability_percents": {
            "Ability: Flash Fire": 1.0
        },
        "item_raw_count": {
            "Power Herb": 1,
            "Sitrus Berry": 1
        },
        "item_percents": {
            "Power Herb": 0.5,
            "Sitrus Berry": 0.5
        },
        "tera_type_raw_count": {
            "Grass": 2
        },
        "tera_type_percents": {
            "Grass": 1.0
        }
    },
    "thundurus": {
        "count": 1,
        "move_raw_count": {
            "Thunderbolt": 1,
            "Eerie Impulse": 1,
            "Thunder Wave": 1,
            "Taunt": 1
        },
        "move_percents": {
            "Thunderbolt": 1.0,
            "Eerie Impulse": 1.0,
            "Thunder Wave": 1.0,
            "Taunt": 1.0
        },
        "ability_raw_count": {
            "Ability: Prankster": 1
        },
        "ability_percents": {
            "Ability: Prankster": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 1
        },
        "item_percents": {
            "Covert Cloak": 1.0
        },
        "tera_type_raw_count": {
            "Dark": 1
        },
        "tera_type_percents": {
            "Dark": 1.0
        }
    },
    "dialga-origin": {
        "count": 1,
        "move_raw_count": {
            "Draco Meteor": 1,
            "Flash Cannon": 1,
            "Ice Beam": 1,
            "Protect": 1
        },
        "move_percents": {
            "Draco Meteor": 1.0,
            "Flash Cannon": 1.0,
            "Ice Beam": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Telepathy": 1
        },
        "ability_percents": {
            "Ability: Telepathy": 1.0
        },
        "item_raw_count": {
            "Adamant Crystal": 1
        },
        "item_percents": {
            "Adamant Crystal": 1.0
        },
        "tera_type_raw_count": {
            "Flying": 1
        },
        "tera_type_percents": {
            "Flying": 1.0
        }
    },
    "zoroark-hisui": {
        "count": 1,
        "move_raw_count": {
            "Hyper Voice": 1,
            "Shadow Ball": 1,
            "Nasty Plot": 1,
            "Protect": 1
        },
        "move_percents": {
            "Hyper Voice": 1.0,
            "Shadow Ball": 1.0,
            "Nasty Plot": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Illusion": 1
        },
        "ability_percents": {
            "Ability: Illusion": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 1
        },
        "item_percents": {
            "Focus Sash": 1.0
        },
        "tera_type_raw_count": {
            "Normal": 1
        },
        "tera_type_percents": {
            "Normal": 1.0
        }
    },
    "gallade": {
        "count": 1,
        "move_raw_count": {
            "Wide Guard": 1,
            "Trick Room": 1,
            "Sacred Sword": 1,
            "Psycho Cut": 1
        },
        "move_percents": {
            "Wide Guard": 1.0,
            "Trick Room": 1.0,
            "Sacred Sword": 1.0,
            "Psycho Cut": 1.0
        },
        "ability_raw_count": {
            "Ability: Sharpness": 1
        },
        "ability_percents": {
            "Ability: Sharpness": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 1
        },
        "item_percents": {
            "Sitrus Berry": 1.0
        },
        "tera_type_raw_count": {
            "Fairy": 1
        },
        "tera_type_percents": {
            "Fairy": 1.0
        }
    },
    "great tusk": {
        "count": 1,
        "move_raw_count": {
            "Protect": 1,
            "Endeavor": 1,
            "Close Combat": 1,
            "Headlong Rush": 1
        },
        "move_percents": {
            "Protect": 1.0,
            "Endeavor": 1.0,
            "Close Combat": 1.0,
            "Headlong Rush": 1.0
        },
        "ability_raw_count": {
            "Ability: Protosynthesis": 1
        },
        "ability_percents": {
            "Ability: Protosynthesis": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 1
        },
        "item_percents": {
            "Focus Sash": 1.0
        },
        "tera_type_raw_count": {
            "Stellar": 1
        },
        "tera_type_percents": {
            "Stellar": 1.0
        }
    },
    "gothitelle": {
        "count": 1,
        "move_raw_count": {
            "Foul Play": 1,
            "Fake Out": 1,
            "Taunt": 1,
            "Helping Hand": 1
        },
        "move_percents": {
            "Foul Play": 1.0,
            "Fake Out": 1.0,
            "Taunt": 1.0,
            "Helping Hand": 1.0
        },
        "ability_raw_count": {
            "Ability: Shadow Tag": 1
        },
        "ability_percents": {
            "Ability: Shadow Tag": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 1
        },
        "item_percents": {
            "Covert Cloak": 1.0
        },
        "tera_type_raw_count": {
            "Dark": 1
        },
        "tera_type_percents": {
            "Dark": 1.0
        }
    },
    "talonflame": {
        "count": 2,
        "move_raw_count": {
            "Will-O-Wisp": 1,
            "Tailwind": 2,
            "Brave Bird": 2,
            "Feint": 2,
            "Quick Guard": 1
        },
        "move_percents": {
            "Will-O-Wisp": 0.5,
            "Tailwind": 1.0,
            "Brave Bird": 1.0,
            "Feint": 1.0,
            "Quick Guard": 0.5
        },
        "ability_raw_count": {
            "Ability: Gale Wings": 2
        },
        "ability_percents": {
            "Ability: Gale Wings": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 1,
            "Sharp Beak": 1
        },
        "item_percents": {
            "Covert Cloak": 0.5,
            "Sharp Beak": 0.5
        },
        "tera_type_raw_count": {
            "Flying": 2
        },
        "tera_type_percents": {
            "Flying": 1.0
        }
    },
    "overqwil": {
        "count": 2,
        "move_raw_count": {
            "Liquidation": 1,
            "Crunch": 2,
            "Poison Jab": 1,
            "Fell Stinger": 1,
            "Gunk Shot": 1,
            "Acid Spray": 1,
            "Protect": 1
        },
        "move_percents": {
            "Liquidation": 0.5,
            "Crunch": 1.0,
            "Poison Jab": 0.5,
            "Fell Stinger": 0.5,
            "Gunk Shot": 0.5,
            "Acid Spray": 0.5,
            "Protect": 0.5
        },
        "ability_raw_count": {
            "Ability: Swift Swim": 2
        },
        "ability_percents": {
            "Ability: Swift Swim": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 1,
            "Life Orb": 1
        },
        "item_percents": {
            "Assault Vest": 0.5,
            "Life Orb": 0.5
        },
        "tera_type_raw_count": {
            "Water": 1,
            "Poison": 1
        },
        "tera_type_percents": {
            "Water": 0.5,
            "Poison": 0.5
        }
    },
    "eternatus": {
        "count": 1,
        "move_raw_count": {
            "Dynamax Cannon": 1,
            "Sludge Bomb": 1,
            "Flamethrower": 1,
            "Draco Meteor": 1
        },
        "move_percents": {
            "Dynamax Cannon": 1.0,
            "Sludge Bomb": 1.0,
            "Flamethrower": 1.0,
            "Draco Meteor": 1.0
        },
        "ability_raw_count": {
            "Ability: Pressure": 1
        },
        "ability_percents": {
            "Ability: Pressure": 1.0
        },
        "item_raw_count": {
            "Choice Specs": 1
        },
        "item_percents": {
            "Choice Specs": 1.0
        },
        "tera_type_raw_count": {
            "Water": 1
        },
        "tera_type_percents": {
            "Water": 1.0
        }
    },
    "iron valiant": {
        "count": 1,
        "move_raw_count": {
            "Moonblast": 1,
            "Close Combat": 1,
            "Shadow Sneak": 1,
            "Protect": 1
        },
        "move_percents": {
            "Moonblast": 1.0,
            "Close Combat": 1.0,
            "Shadow Sneak": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Quark Drive": 1
        },
        "ability_percents": {
            "Ability: Quark Drive": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 1
        },
        "item_percents": {
            "Focus Sash": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 1
        },
        "tera_type_percents": {
            "Ghost": 1.0
        }
    },
    "frosmoth": {
        "count": 1,
        "move_raw_count": {
            "Ice Beam": 1,
            "Giga Drain": 1,
            "Quiver Dance": 1,
            "Wide Guard": 1
        },
        "move_percents": {
            "Ice Beam": 1.0,
            "Giga Drain": 1.0,
            "Quiver Dance": 1.0,
            "Wide Guard": 1.0
        },
        "ability_raw_count": {
            "Ability: Ice Scales": 1
        },
        "ability_percents": {
            "Ability: Ice Scales": 1.0
        },
        "item_raw_count": {
            "Leftovers": 1
        },
        "item_percents": {
            "Leftovers": 1.0
        },
        "tera_type_raw_count": {
            "Dark": 1
        },
        "tera_type_percents": {
            "Dark": 1.0
        }
    },
    "glimmora": {
        "count": 1,
        "move_raw_count": {
            "Meteor Beam": 1,
            "Sludge Bomb": 1,
            "Earth Power": 1,
            "Spiky Shield": 1
        },
        "move_percents": {
            "Meteor Beam": 1.0,
            "Sludge Bomb": 1.0,
            "Earth Power": 1.0,
            "Spiky Shield": 1.0
        },
        "ability_raw_count": {
            "Ability: Toxic Debris": 1
        },
        "ability_percents": {
            "Ability: Toxic Debris": 1.0
        },
        "item_raw_count": {
            "Power Herb": 1
        },
        "item_percents": {
            "Power Herb": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 1
        },
        "tera_type_percents": {
            "Grass": 1.0
        }
    },
    "mimikyu": {
        "count": 1,
        "move_raw_count": {
            "Trick Room": 1,
            "Will-O-Wisp": 1,
            "Taunt": 1,
            "Play Rough": 1
        },
        "move_percents": {
            "Trick Room": 1.0,
            "Will-O-Wisp": 1.0,
            "Taunt": 1.0,
            "Play Rough": 1.0
        },
        "ability_raw_count": {
            "Ability: Disguise": 1
        },
        "ability_percents": {
            "Ability: Disguise": 1.0
        },
        "item_raw_count": {
            "Mental Herb": 1
        },
        "item_percents": {
            "Mental Herb": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 1
        },
        "tera_type_percents": {
            "Grass": 1.0
        }
    },
    "ninetales-alola": {
        "count": 1,
        "move_raw_count": {
            "Blizzard": 1,
            "Moonblast": 1,
            "Aurora Veil": 1,
            "Protect": 1
        },
        "move_percents": {
            "Blizzard": 1.0,
            "Moonblast": 1.0,
            "Aurora Veil": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Snow Warning": 1
        },
        "ability_percents": {
            "Ability: Snow Warning": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 1
        },
        "item_percents": {
            "Focus Sash": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 1
        },
        "tera_type_percents": {
            "Ghost": 1.0
        }
    },
    "necrozma-dawn-wings": {
        "count": 1,
        "move_raw_count": {
            "Trick Room": 1,
            "Expanding Force": 1,
            "Moongeist Beam": 1,
            "Meteor Beam": 1
        },
        "move_percents": {
            "Trick Room": 1.0,
            "Expanding Force": 1.0,
            "Moongeist Beam": 1.0,
            "Meteor Beam": 1.0
        },
        "ability_raw_count": {
            "Ability: Prism Armor": 1
        },
        "ability_percents": {
            "Ability: Prism Armor": 1.0
        },
        "item_raw_count": {
            "Power Herb": 1
        },
        "item_percents": {
            "Power Herb": 1.0
        },
        "tera_type_raw_count": {
            "Water": 1
        },
        "tera_type_percents": {
            "Water": 1.0
        }
    },
    "lilligant-hisui": {
        "count": 1,
        "move_raw_count": {
            "Solar Blade": 1,
            "Sleep Powder": 1,
            "Close Combat": 1,
            "After You": 1
        },
        "move_percents": {
            "Solar Blade": 1.0,
            "Sleep Powder": 1.0,
            "Close Combat": 1.0,
            "After You": 1.0
        },
        "ability_raw_count": {
            "Ability: Chlorophyll": 1
        },
        "ability_percents": {
            "Ability: Chlorophyll": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 1
        },
        "item_percents": {
            "Focus Sash": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 1
        },
        "tera_type_percents": {
            "Ghost": 1.0
        }
    },
    "giratina": {
        "count": 1,
        "move_raw_count": {
            "Shadow Force": 1,
            "Dragon Claw": 1,
            "Tera Blast": 1,
            "Iron Head": 1
        },
        "move_percents": {
            "Shadow Force": 1.0,
            "Dragon Claw": 1.0,
            "Tera Blast": 1.0,
            "Iron Head": 1.0
        },
        "ability_raw_count": {
            "Ability: Telepathy": 1
        },
        "ability_percents": {
            "Ability: Telepathy": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 1
        },
        "item_percents": {
            "Assault Vest": 1.0
        },
        "tera_type_raw_count": {
            "Stellar": 1
        },
        "tera_type_percents": {
            "Stellar": 1.0
        }
    },
    "magmar": {
        "count": 1,
        "move_raw_count": {
            "Clear Smog": 1,
            "Flamethrower": 1,
            "Protect": 1,
            "Follow Me": 1
        },
        "move_percents": {
            "Clear Smog": 1.0,
            "Flamethrower": 1.0,
            "Protect": 1.0,
            "Follow Me": 1.0
        },
        "ability_raw_count": {
            "Ability: Flame Body": 1
        },
        "ability_percents": {
            "Ability: Flame Body": 1.0
        },
        "item_raw_count": {
            "Eviolite": 1
        },
        "item_percents": {
            "Eviolite": 1.0
        },
        "tera_type_raw_count": {
            "Water": 1
        },
        "tera_type_percents": {
            "Water": 1.0
        }
    },
    "groudon": {
        "count": 1,
        "move_raw_count": {
            "Precipice Blades": 1,
            "Heat Crash": 1,
            "High Horsepower": 1,
            "Stone Edge": 1
        },
        "move_percents": {
            "Precipice Blades": 1.0,
            "Heat Crash": 1.0,
            "High Horsepower": 1.0,
            "Stone Edge": 1.0
        },
        "ability_raw_count": {
            "Ability: Drought": 1
        },
        "ability_percents": {
            "Ability: Drought": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 1
        },
        "item_percents": {
            "Assault Vest": 1.0
        },
        "tera_type_raw_count": {
            "Fire": 1
        },
        "tera_type_percents": {
            "Fire": 1.0
        }
    }
}

let top_cut_json = {
    "calyrex-shadow": {
        "count": 25,
        "move_raw_count": {
            "Protect": 23,
            "Giga Drain": 3,
            "Nasty Plot": 16,
            "Astral Barrage": 25,
            "Psychic": 4,
            "Calm Mind": 5,
            "Draining Kiss": 9,
            "Expanding Force": 4,
            "Psyshock": 4,
            "Hyper Beam": 2,
            "Shadow Ball": 2,
            "Pollen Puff": 2,
            "Tera Blast": 1
        },
        "move_percents": {
            "Protect": 0.92,
            "Giga Drain": 0.12,
            "Nasty Plot": 0.64,
            "Astral Barrage": 1.0,
            "Psychic": 0.16,
            "Calm Mind": 0.2,
            "Draining Kiss": 0.36,
            "Expanding Force": 0.16,
            "Psyshock": 0.16,
            "Hyper Beam": 0.08,
            "Shadow Ball": 0.08,
            "Pollen Puff": 0.08,
            "Tera Blast": 0.04
        },
        "ability_raw_count": {
            "Ability: As One (Spectrier)": 25
        },
        "ability_percents": {
            "Ability: As One (Spectrier)": 1.0
        },
        "item_raw_count": {
            "Spell Tag": 5,
            "Life Orb": 4,
            "Spooky Plate": 3,
            "Covert Cloak": 6,
            "Sitrus Berry": 4,
            "Choice Specs": 2,
            "Rocky Helmet": 1
        },
        "item_percents": {
            "Spell Tag": 0.2,
            "Life Orb": 0.16,
            "Spooky Plate": 0.12,
            "Covert Cloak": 0.24,
            "Sitrus Berry": 0.16,
            "Choice Specs": 0.08,
            "Rocky Helmet": 0.04
        },
        "tera_type_raw_count": {
            "Grass": 3,
            "Normal": 5,
            "Dark": 1,
            "Fairy": 12,
            "Water": 1,
            "Ghost": 2,
            "Poison": 1
        },
        "tera_type_percents": {
            "Grass": 0.12,
            "Normal": 0.2,
            "Dark": 0.04,
            "Fairy": 0.48,
            "Water": 0.04,
            "Ghost": 0.08,
            "Poison": 0.04
        }
    },
    "smeargle": {
        "count": 6,
        "move_raw_count": {
            "Spore": 6,
            "Follow Me": 5,
            "Wide Guard": 6,
            "Spiky Shield": 3,
            "Fake Out": 3,
            "Decorate": 1
        },
        "move_percents": {
            "Spore": 1.0,
            "Follow Me": 0.8333333333333334,
            "Wide Guard": 1.0,
            "Spiky Shield": 0.5,
            "Fake Out": 0.5,
            "Decorate": 0.16666666666666666
        },
        "ability_raw_count": {
            "Ability: Moody": 5,
            "Ability: Own Tempo": 1
        },
        "ability_percents": {
            "Ability: Moody": 0.8333333333333334,
            "Ability: Own Tempo": 0.16666666666666666
        },
        "item_raw_count": {
            "Focus Sash": 6
        },
        "item_percents": {
            "Focus Sash": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 4,
            "Grass": 1,
            "Normal": 1
        },
        "tera_type_percents": {
            "Ghost": 0.6666666666666666,
            "Grass": 0.16666666666666666,
            "Normal": 0.16666666666666666
        }
    },
    "raging bolt": {
        "count": 21,
        "move_raw_count": {
            "Protect": 17,
            "Thunderclap": 21,
            "Draco Meteor": 16,
            "Thunderbolt": 19,
            "Volt Switch": 3,
            "Dragon Pulse": 5,
            "Electroweb": 2,
            "Calm Mind": 1
        },
        "move_percents": {
            "Protect": 0.8095238095238095,
            "Thunderclap": 1.0,
            "Draco Meteor": 0.7619047619047619,
            "Thunderbolt": 0.9047619047619048,
            "Volt Switch": 0.14285714285714285,
            "Dragon Pulse": 0.23809523809523808,
            "Electroweb": 0.09523809523809523,
            "Calm Mind": 0.047619047619047616
        },
        "ability_raw_count": {
            "Ability: Protosynthesis": 21
        },
        "ability_percents": {
            "Ability: Protosynthesis": 1.0
        },
        "item_raw_count": {
            "Life Orb": 3,
            "Booster Energy": 14,
            "Assault Vest": 4
        },
        "item_percents": {
            "Life Orb": 0.14285714285714285,
            "Booster Energy": 0.6666666666666666,
            "Assault Vest": 0.19047619047619047
        },
        "tera_type_raw_count": {
            "Electric": 18,
            "Fairy": 3
        },
        "tera_type_percents": {
            "Electric": 0.8571428571428571,
            "Fairy": 0.14285714285714285
        }
    },
    "urshifu-rapid-strike": {
        "count": 42,
        "move_raw_count": {
            "Surging Strikes": 42,
            "Close Combat": 42,
            "Aqua Jet": 30,
            "U-turn": 18,
            "Taunt": 8,
            "Detect": 13,
            "Protect": 11,
            "Coaching": 4
        },
        "move_percents": {
            "Surging Strikes": 1.0,
            "Close Combat": 1.0,
            "Aqua Jet": 0.7142857142857143,
            "U-turn": 0.42857142857142855,
            "Taunt": 0.19047619047619047,
            "Detect": 0.30952380952380953,
            "Protect": 0.2619047619047619,
            "Coaching": 0.09523809523809523
        },
        "ability_raw_count": {
            "Ability: Unseen Fist": 42
        },
        "ability_percents": {
            "Ability: Unseen Fist": 1.0
        },
        "item_raw_count": {
            "Choice Scarf": 12,
            "Focus Sash": 18,
            "Mystic Water": 5,
            "Choice Band": 5,
            "Life Orb": 2
        },
        "item_percents": {
            "Choice Scarf": 0.2857142857142857,
            "Focus Sash": 0.42857142857142855,
            "Mystic Water": 0.11904761904761904,
            "Choice Band": 0.11904761904761904,
            "Life Orb": 0.047619047619047616
        },
        "tera_type_raw_count": {
            "Ghost": 2,
            "Stellar": 14,
            "Water": 16,
            "Poison": 4,
            "Grass": 6
        },
        "tera_type_percents": {
            "Ghost": 0.047619047619047616,
            "Stellar": 0.3333333333333333,
            "Water": 0.38095238095238093,
            "Poison": 0.09523809523809523,
            "Grass": 0.14285714285714285
        }
    },
    "rillaboom": {
        "count": 35,
        "move_raw_count": {
            "Fake Out": 34,
            "Wood Hammer": 33,
            "Grassy Glide": 35,
            "U-turn": 31,
            "Taunt": 1,
            "Drum Beating": 2,
            "Protect": 2,
            "High Horsepower": 1,
            "Knock Off": 1
        },
        "move_percents": {
            "Fake Out": 0.9714285714285714,
            "Wood Hammer": 0.9428571428571428,
            "Grassy Glide": 1.0,
            "U-turn": 0.8857142857142857,
            "Taunt": 0.02857142857142857,
            "Drum Beating": 0.05714285714285714,
            "Protect": 0.05714285714285714,
            "High Horsepower": 0.02857142857142857,
            "Knock Off": 0.02857142857142857
        },
        "ability_raw_count": {
            "Ability: Grassy Surge": 35
        },
        "ability_percents": {
            "Ability: Grassy Surge": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 30,
            "Miracle Seed": 4,
            "Choice Band": 1
        },
        "item_percents": {
            "Assault Vest": 0.8571428571428571,
            "Miracle Seed": 0.11428571428571428,
            "Choice Band": 0.02857142857142857
        },
        "tera_type_raw_count": {
            "Fire": 24,
            "Grass": 3,
            "Normal": 4,
            "Water": 3,
            "Poison": 1
        },
        "tera_type_percents": {
            "Fire": 0.6857142857142857,
            "Grass": 0.08571428571428572,
            "Normal": 0.11428571428571428,
            "Water": 0.08571428571428572,
            "Poison": 0.02857142857142857
        }
    },
    "incineroar": {
        "count": 26,
        "move_raw_count": {
            "Fake Out": 26,
            "Flare Blitz": 8,
            "Parting Shot": 26,
            "Taunt": 6,
            "Knock Off": 19,
            "Helping Hand": 4,
            "Will-O-Wisp": 14,
            "Protect": 1
        },
        "move_percents": {
            "Fake Out": 1.0,
            "Flare Blitz": 0.3076923076923077,
            "Parting Shot": 1.0,
            "Taunt": 0.23076923076923078,
            "Knock Off": 0.7307692307692307,
            "Helping Hand": 0.15384615384615385,
            "Will-O-Wisp": 0.5384615384615384,
            "Protect": 0.038461538461538464
        },
        "ability_raw_count": {
            "Ability: Intimidate": 26
        },
        "ability_percents": {
            "Ability: Intimidate": 1.0
        },
        "item_raw_count": {
            "Rocky Helmet": 3,
            "Safety Goggles": 23
        },
        "item_percents": {
            "Rocky Helmet": 0.11538461538461539,
            "Safety Goggles": 0.8846153846153846
        },
        "tera_type_raw_count": {
            "Water": 7,
            "Ghost": 19
        },
        "tera_type_percents": {
            "Water": 0.2692307692307692,
            "Ghost": 0.7307692307692307
        }
    },
    "ogerpon-hearthflame": {
        "count": 14,
        "move_raw_count": {
            "Ivy Cudgel": 14,
            "Grassy Glide": 6,
            "Follow Me": 12,
            "Spiky Shield": 14,
            "Horn Leech": 5,
            "Swords Dance": 2,
            "Wood Hammer": 3
        },
        "move_percents": {
            "Ivy Cudgel": 1.0,
            "Grassy Glide": 0.42857142857142855,
            "Follow Me": 0.8571428571428571,
            "Spiky Shield": 1.0,
            "Horn Leech": 0.35714285714285715,
            "Swords Dance": 0.14285714285714285,
            "Wood Hammer": 0.21428571428571427
        },
        "ability_raw_count": {
            "Ability: Mold Breaker": 14
        },
        "ability_percents": {
            "Ability: Mold Breaker": 1.0
        },
        "item_raw_count": {
            "Hearthflame Mask": 14
        },
        "item_percents": {
            "Hearthflame Mask": 1.0
        },
        "tera_type_raw_count": {
            "Fire": 14
        },
        "tera_type_percents": {
            "Fire": 1.0
        }
    },
    "clefairy": {
        "count": 8,
        "move_raw_count": {
            "Protect": 7,
            "Follow Me": 8,
            "Life Dew": 2,
            "Helping Hand": 8,
            "After You": 3,
            "Sing": 3,
            "Heal Pulse": 1
        },
        "move_percents": {
            "Protect": 0.875,
            "Follow Me": 1.0,
            "Life Dew": 0.25,
            "Helping Hand": 1.0,
            "After You": 0.375,
            "Sing": 0.375,
            "Heal Pulse": 0.125
        },
        "ability_raw_count": {
            "Ability: Friend Guard": 8
        },
        "ability_percents": {
            "Ability: Friend Guard": 1.0
        },
        "item_raw_count": {
            "Eviolite": 8
        },
        "item_percents": {
            "Eviolite": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 6,
            "Ground": 1,
            "Fairy": 1
        },
        "tera_type_percents": {
            "Grass": 0.75,
            "Ground": 0.125,
            "Fairy": 0.125
        }
    },
    "chi-yu": {
        "count": 8,
        "move_raw_count": {
            "Snarl": 5,
            "Dark Pulse": 6,
            "Flamethrower": 1,
            "Heat Wave": 8,
            "Nasty Plot": 1,
            "Protect": 2,
            "Overheat": 6,
            "Taunt": 2,
            "Tera Blast": 1
        },
        "move_percents": {
            "Snarl": 0.625,
            "Dark Pulse": 0.75,
            "Flamethrower": 0.125,
            "Heat Wave": 1.0,
            "Nasty Plot": 0.125,
            "Protect": 0.25,
            "Overheat": 0.75,
            "Taunt": 0.25,
            "Tera Blast": 0.125
        },
        "ability_raw_count": {
            "Ability: Beads of Ruin": 8
        },
        "ability_percents": {
            "Ability: Beads of Ruin": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 1,
            "Focus Sash": 2,
            "Covert Cloak": 2,
            "Choice Scarf": 3
        },
        "item_percents": {
            "Assault Vest": 0.125,
            "Focus Sash": 0.25,
            "Covert Cloak": 0.25,
            "Choice Scarf": 0.375
        },
        "tera_type_raw_count": {
            "Water": 3,
            "Ghost": 4,
            "Ground": 1
        },
        "tera_type_percents": {
            "Water": 0.375,
            "Ghost": 0.5,
            "Ground": 0.125
        }
    },
    "tornadus": {
        "count": 13,
        "move_raw_count": {
            "Protect": 6,
            "Tailwind": 13,
            "Rain Dance": 10,
            "Bleakwind Storm": 13,
            "Taunt": 8,
            "Sunny Day": 2
        },
        "move_percents": {
            "Protect": 0.46153846153846156,
            "Tailwind": 1.0,
            "Rain Dance": 0.7692307692307693,
            "Bleakwind Storm": 1.0,
            "Taunt": 0.6153846153846154,
            "Sunny Day": 0.15384615384615385
        },
        "ability_raw_count": {
            "Ability: Prankster": 13
        },
        "ability_percents": {
            "Ability: Prankster": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 2,
            "Covert Cloak": 10,
            "Rocky Helmet": 1
        },
        "item_percents": {
            "Focus Sash": 0.15384615384615385,
            "Covert Cloak": 0.7692307692307693,
            "Rocky Helmet": 0.07692307692307693
        },
        "tera_type_raw_count": {
            "Flying": 2,
            "Dark": 9,
            "Fire": 1,
            "Ghost": 1
        },
        "tera_type_percents": {
            "Flying": 0.15384615384615385,
            "Dark": 0.6923076923076923,
            "Fire": 0.07692307692307693,
            "Ghost": 0.07692307692307693
        }
    },
    "calyrex-ice": {
        "count": 12,
        "move_raw_count": {
            "Protect": 12,
            "Glacial Lance": 12,
            "High Horsepower": 12,
            "Trick Room": 12
        },
        "move_percents": {
            "Protect": 1.0,
            "Glacial Lance": 1.0,
            "High Horsepower": 1.0,
            "Trick Room": 1.0
        },
        "ability_raw_count": {
            "Ability: As One (Glastrier)": 12
        },
        "ability_percents": {
            "Ability: As One (Glastrier)": 1.0
        },
        "item_raw_count": {
            "Clear Amulet": 12
        },
        "item_percents": {
            "Clear Amulet": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 1,
            "Water": 5,
            "Fire": 5,
            "Normal": 1
        },
        "tera_type_percents": {
            "Grass": 0.08333333333333333,
            "Water": 0.4166666666666667,
            "Fire": 0.4166666666666667,
            "Normal": 0.08333333333333333
        }
    },
    "farigiraf": {
        "count": 20,
        "move_raw_count": {
            "Psychic": 7,
            "Foul Play": 12,
            "Trick Room": 20,
            "Helping Hand": 19,
            "Hyper Voice": 8,
            "Psychic Noise": 11,
            "Protect": 1,
            "Shadow Ball": 2
        },
        "move_percents": {
            "Psychic": 0.35,
            "Foul Play": 0.6,
            "Trick Room": 1.0,
            "Helping Hand": 0.95,
            "Hyper Voice": 0.4,
            "Psychic Noise": 0.55,
            "Protect": 0.05,
            "Shadow Ball": 0.1
        },
        "ability_raw_count": {
            "Ability: Armor Tail": 20
        },
        "ability_percents": {
            "Ability: Armor Tail": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 3,
            "Electric Seed": 9,
            "Throat Spray": 7,
            "Safety Goggles": 1
        },
        "item_percents": {
            "Sitrus Berry": 0.15,
            "Electric Seed": 0.45,
            "Throat Spray": 0.35,
            "Safety Goggles": 0.05
        },
        "tera_type_raw_count": {
            "Water": 9,
            "Dragon": 1,
            "Dark": 1,
            "Ground": 3,
            "Fairy": 3,
            "Fire": 1,
            "Grass": 1,
            "Normal": 1
        },
        "tera_type_percents": {
            "Water": 0.45,
            "Dragon": 0.05,
            "Dark": 0.05,
            "Ground": 0.15,
            "Fairy": 0.15,
            "Fire": 0.05,
            "Grass": 0.05,
            "Normal": 0.05
        }
    },
    "pelipper": {
        "count": 3,
        "move_raw_count": {
            "Protect": 2,
            "Hurricane": 3,
            "Weather Ball": 3,
            "Wide Guard": 3,
            "Tailwind": 1
        },
        "move_percents": {
            "Protect": 0.6666666666666666,
            "Hurricane": 1.0,
            "Weather Ball": 1.0,
            "Wide Guard": 1.0,
            "Tailwind": 0.3333333333333333
        },
        "ability_raw_count": {
            "Ability: Drizzle": 3
        },
        "ability_percents": {
            "Ability: Drizzle": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 1,
            "Covert Cloak": 1,
            "Safety Goggles": 1
        },
        "item_percents": {
            "Focus Sash": 0.3333333333333333,
            "Covert Cloak": 0.3333333333333333,
            "Safety Goggles": 0.3333333333333333
        },
        "tera_type_raw_count": {
            "Ghost": 2,
            "Grass": 1
        },
        "tera_type_percents": {
            "Ghost": 0.6666666666666666,
            "Grass": 0.3333333333333333
        }
    },
    "miraidon": {
        "count": 12,
        "move_raw_count": {
            "Volt Switch": 12,
            "Draco Meteor": 11,
            "Dazzling Gleam": 9,
            "Electro Drift": 12,
            "Overheat": 1,
            "Discharge": 2,
            "Dragon Pulse": 1
        },
        "move_percents": {
            "Volt Switch": 1.0,
            "Draco Meteor": 0.9166666666666666,
            "Dazzling Gleam": 0.75,
            "Electro Drift": 1.0,
            "Overheat": 0.08333333333333333,
            "Discharge": 0.16666666666666666,
            "Dragon Pulse": 0.08333333333333333
        },
        "ability_raw_count": {
            "Ability: Hadron Engine": 12
        },
        "ability_percents": {
            "Ability: Hadron Engine": 1.0
        },
        "item_raw_count": {
            "Choice Specs": 11,
            "Assault Vest": 1
        },
        "item_percents": {
            "Choice Specs": 0.9166666666666666,
            "Assault Vest": 0.08333333333333333
        },
        "tera_type_raw_count": {
            "Fairy": 9,
            "Electric": 3
        },
        "tera_type_percents": {
            "Fairy": 0.75,
            "Electric": 0.25
        }
    },
    "ursaluna-bloodmoon": {
        "count": 4,
        "move_raw_count": {
            "Hyper Voice": 4,
            "Earth Power": 4,
            "Protect": 3,
            "Blood Moon": 4,
            "Vacuum Wave": 1
        },
        "move_percents": {
            "Hyper Voice": 1.0,
            "Earth Power": 1.0,
            "Protect": 0.75,
            "Blood Moon": 1.0,
            "Vacuum Wave": 0.25
        },
        "ability_raw_count": {
            "Ability: Mind's Eye": 4
        },
        "ability_percents": {
            "Ability: Mind's Eye": 1.0
        },
        "item_raw_count": {
            "Life Orb": 3,
            "Assault Vest": 1
        },
        "item_percents": {
            "Life Orb": 0.75,
            "Assault Vest": 0.25
        },
        "tera_type_raw_count": {
            "Normal": 3,
            "Ghost": 1
        },
        "tera_type_percents": {
            "Normal": 0.75,
            "Ghost": 0.25
        }
    },
    "iron hands": {
        "count": 15,
        "move_raw_count": {
            "Heavy Slam": 12,
            "Close Combat": 2,
            "Fake Out": 15,
            "Wild Charge": 14,
            "Drain Punch": 13,
            "Volt Switch": 4
        },
        "move_percents": {
            "Heavy Slam": 0.8,
            "Close Combat": 0.13333333333333333,
            "Fake Out": 1.0,
            "Wild Charge": 0.9333333333333333,
            "Drain Punch": 0.8666666666666667,
            "Volt Switch": 0.26666666666666666
        },
        "ability_raw_count": {
            "Ability: Quark Drive": 15
        },
        "ability_percents": {
            "Ability: Quark Drive": 1.0
        },
        "item_raw_count": {
            "Clear Amulet": 1,
            "Assault Vest": 14
        },
        "item_percents": {
            "Clear Amulet": 0.06666666666666667,
            "Assault Vest": 0.9333333333333333
        },
        "tera_type_raw_count": {
            "Grass": 9,
            "Bug": 1,
            "Water": 4,
            "Fire": 1
        },
        "tera_type_percents": {
            "Grass": 0.6,
            "Bug": 0.06666666666666667,
            "Water": 0.26666666666666666,
            "Fire": 0.06666666666666667
        }
    },
    "grimmsnarl": {
        "count": 5,
        "move_raw_count": {
            "Foul Play": 1,
            "Light Screen": 5,
            "Reflect": 5,
            "Taunt": 1,
            "Spirit Break": 4,
            "Thunder Wave": 4
        },
        "move_percents": {
            "Foul Play": 0.2,
            "Light Screen": 1.0,
            "Reflect": 1.0,
            "Taunt": 0.2,
            "Spirit Break": 0.8,
            "Thunder Wave": 0.8
        },
        "ability_raw_count": {
            "Ability: Prankster": 5
        },
        "ability_percents": {
            "Ability: Prankster": 1.0
        },
        "item_raw_count": {
            "Light Clay": 5
        },
        "item_percents": {
            "Light Clay": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 5
        },
        "tera_type_percents": {
            "Ghost": 1.0
        }
    },
    "volcarona": {
        "count": 6,
        "move_raw_count": {
            "Fiery Dance": 4,
            "Quiver Dance": 4,
            "Giga Drain": 4,
            "Protect": 6,
            "Rage Powder": 2,
            "Will-O-Wisp": 2,
            "Heat Wave": 1,
            "Bug Buzz": 1
        },
        "move_percents": {
            "Fiery Dance": 0.6666666666666666,
            "Quiver Dance": 0.6666666666666666,
            "Giga Drain": 0.6666666666666666,
            "Protect": 1.0,
            "Rage Powder": 0.3333333333333333,
            "Will-O-Wisp": 0.3333333333333333,
            "Heat Wave": 0.16666666666666666,
            "Bug Buzz": 0.16666666666666666
        },
        "ability_raw_count": {
            "Ability: Flame Body": 6
        },
        "ability_percents": {
            "Ability: Flame Body": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 1,
            "Sitrus Berry": 1,
            "Safety Goggles": 2,
            "Leftovers": 2
        },
        "item_percents": {
            "Covert Cloak": 0.16666666666666666,
            "Sitrus Berry": 0.16666666666666666,
            "Safety Goggles": 0.3333333333333333,
            "Leftovers": 0.3333333333333333
        },
        "tera_type_raw_count": {
            "Grass": 3,
            "Water": 1,
            "Dragon": 1,
            "Fairy": 1
        },
        "tera_type_percents": {
            "Grass": 0.5,
            "Water": 0.16666666666666666,
            "Dragon": 0.16666666666666666,
            "Fairy": 0.16666666666666666
        }
    },
    "koraidon": {
        "count": 3,
        "move_raw_count": {
            "Collision Course": 3,
            "Flare Blitz": 3,
            "Flame Charge": 3,
            "Protect": 3
        },
        "move_percents": {
            "Collision Course": 1.0,
            "Flare Blitz": 1.0,
            "Flame Charge": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Orichalcum Pulse": 3
        },
        "ability_percents": {
            "Ability: Orichalcum Pulse": 1.0
        },
        "item_raw_count": {
            "Clear Amulet": 3
        },
        "item_percents": {
            "Clear Amulet": 1.0
        },
        "tera_type_raw_count": {
            "Fire": 3
        },
        "tera_type_percents": {
            "Fire": 1.0
        }
    },
    "flutter mane": {
        "count": 5,
        "move_raw_count": {
            "Moonblast": 5,
            "Icy Wind": 3,
            "Sunny Day": 1,
            "Protect": 3,
            "Thunder Wave": 4,
            "Taunt": 2,
            "Shadow Ball": 2
        },
        "move_percents": {
            "Moonblast": 1.0,
            "Icy Wind": 0.6,
            "Sunny Day": 0.2,
            "Protect": 0.6,
            "Thunder Wave": 0.8,
            "Taunt": 0.4,
            "Shadow Ball": 0.4
        },
        "ability_raw_count": {
            "Ability: Protosynthesis": 5
        },
        "ability_percents": {
            "Ability: Protosynthesis": 1.0
        },
        "item_raw_count": {
            "Booster Energy": 5
        },
        "item_percents": {
            "Booster Energy": 1.0
        },
        "tera_type_raw_count": {
            "Fairy": 3,
            "Grass": 1,
            "Water": 1
        },
        "tera_type_percents": {
            "Fairy": 0.6,
            "Grass": 0.2,
            "Water": 0.2
        }
    },
    "ogerpon-cornerstone": {
        "count": 7,
        "move_raw_count": {
            "Power Whip": 3,
            "Ivy Cudgel": 7,
            "Follow Me": 7,
            "Spiky Shield": 7,
            "Horn Leech": 4
        },
        "move_percents": {
            "Power Whip": 0.42857142857142855,
            "Ivy Cudgel": 1.0,
            "Follow Me": 1.0,
            "Spiky Shield": 1.0,
            "Horn Leech": 0.5714285714285714
        },
        "ability_raw_count": {
            "Ability: Sturdy": 7
        },
        "ability_percents": {
            "Ability: Sturdy": 1.0
        },
        "item_raw_count": {
            "Cornerstone Mask": 7
        },
        "item_percents": {
            "Cornerstone Mask": 1.0
        },
        "tera_type_raw_count": {
            "Rock": 7
        },
        "tera_type_percents": {
            "Rock": 1.0
        }
    },
    "ditto": {
        "count": 5,
        "move_raw_count": {
            "Transform": 5
        },
        "move_percents": {
            "Transform": 1.0
        },
        "ability_raw_count": {
            "Ability: Imposter": 5
        },
        "ability_percents": {
            "Ability: Imposter": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 3,
            "Choice Scarf": 2
        },
        "item_percents": {
            "Focus Sash": 0.6,
            "Choice Scarf": 0.4
        },
        "tera_type_raw_count": {
            "Ghost": 1,
            "Stellar": 2,
            "Normal": 2
        },
        "tera_type_percents": {
            "Ghost": 0.2,
            "Stellar": 0.4,
            "Normal": 0.4
        }
    },
    "urshifu": {
        "count": 7,
        "move_raw_count": {
            "Wicked Blow": 7,
            "Close Combat": 7,
            "Sucker Punch": 7,
            "Protect": 1,
            "Detect": 5,
            "U-turn": 1
        },
        "move_percents": {
            "Wicked Blow": 1.0,
            "Close Combat": 1.0,
            "Sucker Punch": 1.0,
            "Protect": 0.14285714285714285,
            "Detect": 0.7142857142857143,
            "U-turn": 0.14285714285714285
        },
        "ability_raw_count": {
            "Ability: Unseen Fist": 7
        },
        "ability_percents": {
            "Ability: Unseen Fist": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 6,
            "Choice Band": 1
        },
        "item_percents": {
            "Focus Sash": 0.8571428571428571,
            "Choice Band": 0.14285714285714285
        },
        "tera_type_raw_count": {
            "Dark": 7
        },
        "tera_type_percents": {
            "Dark": 1.0
        }
    },
    "whimsicott": {
        "count": 14,
        "move_raw_count": {
            "Light Screen": 9,
            "Tailwind": 14,
            "Moonblast": 14,
            "Encore": 12,
            "Sunny Day": 1,
            "Protect": 2,
            "Charm": 1,
            "Worry Seed": 1,
            "Endeavor": 1,
            "Helping Hand": 1
        },
        "move_percents": {
            "Light Screen": 0.6428571428571429,
            "Tailwind": 1.0,
            "Moonblast": 1.0,
            "Encore": 0.8571428571428571,
            "Sunny Day": 0.07142857142857142,
            "Protect": 0.14285714285714285,
            "Charm": 0.07142857142857142,
            "Worry Seed": 0.07142857142857142,
            "Endeavor": 0.07142857142857142,
            "Helping Hand": 0.07142857142857142
        },
        "ability_raw_count": {
            "Ability: Prankster": 14
        },
        "ability_percents": {
            "Ability: Prankster": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 12,
            "Mental Herb": 1,
            "Focus Sash": 1
        },
        "item_percents": {
            "Covert Cloak": 0.8571428571428571,
            "Mental Herb": 0.07142857142857142,
            "Focus Sash": 0.07142857142857142
        },
        "tera_type_raw_count": {
            "Fire": 5,
            "Water": 3,
            "Dark": 3,
            "Ghost": 1,
            "Fairy": 1,
            "Poison": 1
        },
        "tera_type_percents": {
            "Fire": 0.35714285714285715,
            "Water": 0.21428571428571427,
            "Dark": 0.21428571428571427,
            "Ghost": 0.07142857142857142,
            "Fairy": 0.07142857142857142,
            "Poison": 0.07142857142857142
        }
    },
    "venusaur": {
        "count": 2,
        "move_raw_count": {
            "Sludge Bomb": 2,
            "Grass Knot": 2,
            "Sleep Powder": 2,
            "Protect": 2
        },
        "move_percents": {
            "Sludge Bomb": 1.0,
            "Grass Knot": 1.0,
            "Sleep Powder": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Chlorophyll": 2
        },
        "ability_percents": {
            "Ability: Chlorophyll": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 2
        },
        "item_percents": {
            "Covert Cloak": 1.0
        },
        "tera_type_raw_count": {
            "Water": 2
        },
        "tera_type_percents": {
            "Water": 1.0
        }
    },
    "porygon2": {
        "count": 1,
        "move_raw_count": {
            "Tera Blast": 1,
            "Ice Beam": 1,
            "Recover": 1,
            "Trick Room": 1
        },
        "move_percents": {
            "Tera Blast": 1.0,
            "Ice Beam": 1.0,
            "Recover": 1.0,
            "Trick Room": 1.0
        },
        "ability_raw_count": {
            "Ability: Download": 1
        },
        "ability_percents": {
            "Ability: Download": 1.0
        },
        "item_raw_count": {
            "Eviolite": 1
        },
        "item_percents": {
            "Eviolite": 1.0
        },
        "tera_type_raw_count": {
            "Ground": 1
        },
        "tera_type_percents": {
            "Ground": 1.0
        }
    },
    "ursaluna": {
        "count": 2,
        "move_raw_count": {
            "Facade": 2,
            "Headlong Rush": 2,
            "Substitute": 2,
            "Protect": 2
        },
        "move_percents": {
            "Facade": 1.0,
            "Headlong Rush": 1.0,
            "Substitute": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Guts": 2
        },
        "ability_percents": {
            "Ability: Guts": 1.0
        },
        "item_raw_count": {
            "Flame Orb": 2
        },
        "item_percents": {
            "Flame Orb": 1.0
        },
        "tera_type_raw_count": {
            "Fairy": 2
        },
        "tera_type_percents": {
            "Fairy": 1.0
        }
    },
    "amoonguss": {
        "count": 7,
        "move_raw_count": {
            "Spore": 7,
            "Rage Powder": 7,
            "Sludge Bomb": 5,
            "Protect": 6,
            "Pollen Puff": 3
        },
        "move_percents": {
            "Spore": 1.0,
            "Rage Powder": 1.0,
            "Sludge Bomb": 0.7142857142857143,
            "Protect": 0.8571428571428571,
            "Pollen Puff": 0.42857142857142855
        },
        "ability_raw_count": {
            "Ability: Regenerator": 7
        },
        "ability_percents": {
            "Ability: Regenerator": 1.0
        },
        "item_raw_count": {
            "Rocky Helmet": 4,
            "Covert Cloak": 1,
            "Mental Herb": 1,
            "Leftovers": 1
        },
        "item_percents": {
            "Rocky Helmet": 0.5714285714285714,
            "Covert Cloak": 0.14285714285714285,
            "Mental Herb": 0.14285714285714285,
            "Leftovers": 0.14285714285714285
        },
        "tera_type_raw_count": {
            "Water": 6,
            "Fairy": 1
        },
        "tera_type_percents": {
            "Water": 0.8571428571428571,
            "Fairy": 0.14285714285714285
        }
    },
    "chien-pao": {
        "count": 7,
        "move_raw_count": {
            "Icicle Crash": 4,
            "Throat Chop": 2,
            "Sucker Punch": 7,
            "Protect": 7,
            "Ice Spinner": 3,
            "Icy Wind": 2,
            "Lash Out": 2,
            "Tera Blast": 1
        },
        "move_percents": {
            "Icicle Crash": 0.5714285714285714,
            "Throat Chop": 0.2857142857142857,
            "Sucker Punch": 1.0,
            "Protect": 1.0,
            "Ice Spinner": 0.42857142857142855,
            "Icy Wind": 0.2857142857142857,
            "Lash Out": 0.2857142857142857,
            "Tera Blast": 0.14285714285714285
        },
        "ability_raw_count": {
            "Ability: Sword of Ruin": 7
        },
        "ability_percents": {
            "Ability: Sword of Ruin": 1.0
        },
        "item_raw_count": {
            "Life Orb": 1,
            "Focus Sash": 6
        },
        "item_percents": {
            "Life Orb": 0.14285714285714285,
            "Focus Sash": 0.8571428571428571
        },
        "tera_type_raw_count": {
            "Ghost": 5,
            "Stellar": 1,
            "Water": 1
        },
        "tera_type_percents": {
            "Ghost": 0.7142857142857143,
            "Stellar": 0.14285714285714285,
            "Water": 0.14285714285714285
        }
    },
    "entei": {
        "count": 3,
        "move_raw_count": {
            "Sacred Fire": 3,
            "Extreme Speed": 3,
            "Stomping Tantrum": 2,
            "Snarl": 1,
            "Flare Blitz": 2,
            "Eruption": 1
        },
        "move_percents": {
            "Sacred Fire": 1.0,
            "Extreme Speed": 1.0,
            "Stomping Tantrum": 0.6666666666666666,
            "Snarl": 0.3333333333333333,
            "Flare Blitz": 0.6666666666666666,
            "Eruption": 0.3333333333333333
        },
        "ability_raw_count": {
            "Ability: Inner Focus": 3
        },
        "ability_percents": {
            "Ability: Inner Focus": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 1,
            "Choice Band": 1,
            "Choice Scarf": 1
        },
        "item_percents": {
            "Assault Vest": 0.3333333333333333,
            "Choice Band": 0.3333333333333333,
            "Choice Scarf": 0.3333333333333333
        },
        "tera_type_raw_count": {
            "Normal": 2,
            "Fire": 1
        },
        "tera_type_percents": {
            "Normal": 0.6666666666666666,
            "Fire": 0.3333333333333333
        }
    },
    "terapagos-terastal": {
        "count": 3,
        "move_raw_count": {
            "Tera Starstorm": 3,
            "Flamethrower": 1,
            "Calm Mind": 2,
            "Protect": 2,
            "Substitute": 1,
            "Hyper Beam": 1,
            "Earth Power": 1,
            "Dazzling Gleam": 1
        },
        "move_percents": {
            "Tera Starstorm": 1.0,
            "Flamethrower": 0.3333333333333333,
            "Calm Mind": 0.6666666666666666,
            "Protect": 0.6666666666666666,
            "Substitute": 0.3333333333333333,
            "Hyper Beam": 0.3333333333333333,
            "Earth Power": 0.3333333333333333,
            "Dazzling Gleam": 0.3333333333333333
        },
        "ability_raw_count": {
            "Ability: Tera Shell": 3
        },
        "ability_percents": {
            "Ability: Tera Shell": 1.0
        },
        "item_raw_count": {
            "Leftovers": 2,
            "Choice Specs": 1
        },
        "item_percents": {
            "Leftovers": 0.6666666666666666,
            "Choice Specs": 0.3333333333333333
        },
        "tera_type_raw_count": {
            "Stellar": 3
        },
        "tera_type_percents": {
            "Stellar": 1.0
        }
    },
    "rhydon": {
        "count": 1,
        "move_raw_count": {
            "Protect": 1,
            "High Horsepower": 1,
            "Supercell Slam": 1,
            "Uproar": 1
        },
        "move_percents": {
            "Protect": 1.0,
            "High Horsepower": 1.0,
            "Supercell Slam": 1.0,
            "Uproar": 1.0
        },
        "ability_raw_count": {
            "Ability: Lightning Rod": 1
        },
        "ability_percents": {
            "Ability: Lightning Rod": 1.0
        },
        "item_raw_count": {
            "Eviolite": 1
        },
        "item_percents": {
            "Eviolite": 1.0
        },
        "tera_type_raw_count": {
            "Fairy": 1
        },
        "tera_type_percents": {
            "Fairy": 1.0
        }
    },
    "kyogre": {
        "count": 6,
        "move_raw_count": {
            "Water Spout": 6,
            "Origin Pulse": 5,
            "Ice Beam": 6,
            "Thunder": 3,
            "Protect": 3,
            "Hydro Pump": 1
        },
        "move_percents": {
            "Water Spout": 1.0,
            "Origin Pulse": 0.8333333333333334,
            "Ice Beam": 1.0,
            "Thunder": 0.5,
            "Protect": 0.5,
            "Hydro Pump": 0.16666666666666666
        },
        "ability_raw_count": {
            "Ability: Drizzle": 6
        },
        "ability_percents": {
            "Ability: Drizzle": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 3,
            "Mystic Water": 3
        },
        "item_percents": {
            "Assault Vest": 0.5,
            "Mystic Water": 0.5
        },
        "tera_type_raw_count": {
            "Grass": 6
        },
        "tera_type_percents": {
            "Grass": 1.0
        }
    },
    "basculegion": {
        "count": 3,
        "move_raw_count": {
            "Wave Crash": 3,
            "Last Respects": 3,
            "Aqua Jet": 3,
            "Protect": 3
        },
        "move_percents": {
            "Wave Crash": 1.0,
            "Last Respects": 1.0,
            "Aqua Jet": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Swift Swim": 3
        },
        "ability_percents": {
            "Ability: Swift Swim": 1.0
        },
        "item_raw_count": {
            "Life Orb": 3
        },
        "item_percents": {
            "Life Orb": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 3
        },
        "tera_type_percents": {
            "Grass": 1.0
        }
    },
    "tsareena": {
        "count": 5,
        "move_raw_count": {
            "Power Whip": 4,
            "Triple Axel": 5,
            "Taunt": 3,
            "Protect": 5,
            "Bullet Seed": 1,
            "Helping Hand": 2
        },
        "move_percents": {
            "Power Whip": 0.8,
            "Triple Axel": 1.0,
            "Taunt": 0.6,
            "Protect": 1.0,
            "Bullet Seed": 0.2,
            "Helping Hand": 0.4
        },
        "ability_raw_count": {
            "Ability: Queenly Majesty": 5
        },
        "ability_percents": {
            "Ability: Queenly Majesty": 1.0
        },
        "item_raw_count": {
            "Wide Lens": 4,
            "Loaded Dice": 1
        },
        "item_percents": {
            "Wide Lens": 0.8,
            "Loaded Dice": 0.2
        },
        "tera_type_raw_count": {
            "Fire": 2,
            "Ice": 3
        },
        "tera_type_percents": {
            "Fire": 0.4,
            "Ice": 0.6
        }
    },
    "kingambit": {
        "count": 2,
        "move_raw_count": {
            "Iron Head": 2,
            "Kowtow Cleave": 2,
            "Sucker Punch": 2,
            "Protect": 1,
            "Brick Break": 1
        },
        "move_percents": {
            "Iron Head": 1.0,
            "Kowtow Cleave": 1.0,
            "Sucker Punch": 1.0,
            "Protect": 0.5,
            "Brick Break": 0.5
        },
        "ability_raw_count": {
            "Ability: Defiant": 2
        },
        "ability_percents": {
            "Ability: Defiant": 1.0
        },
        "item_raw_count": {
            "Lum Berry": 1,
            "Assault Vest": 1
        },
        "item_percents": {
            "Lum Berry": 0.5,
            "Assault Vest": 0.5
        },
        "tera_type_raw_count": {
            "Poison": 1,
            "Fairy": 1
        },
        "tera_type_percents": {
            "Poison": 0.5,
            "Fairy": 0.5
        }
    },
    "zamazenta-crowned": {
        "count": 4,
        "move_raw_count": {
            "Body Press": 4,
            "Heavy Slam": 4,
            "Wide Guard": 4,
            "Protect": 4
        },
        "move_percents": {
            "Body Press": 1.0,
            "Heavy Slam": 1.0,
            "Wide Guard": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Dauntless Shield": 4
        },
        "ability_percents": {
            "Ability: Dauntless Shield": 1.0
        },
        "item_raw_count": {
            "Rusted Shield": 4
        },
        "item_percents": {
            "Rusted Shield": 1.0
        },
        "tera_type_raw_count": {
            "Dragon": 4
        },
        "tera_type_percents": {
            "Dragon": 1.0
        }
    },
    "tyranitar": {
        "count": 2,
        "move_raw_count": {
            "Rock Slide": 2,
            "Knock Off": 2,
            "Low Kick": 2,
            "Protect": 1,
            "Tera Blast": 1
        },
        "move_percents": {
            "Rock Slide": 1.0,
            "Knock Off": 1.0,
            "Low Kick": 1.0,
            "Protect": 0.5,
            "Tera Blast": 0.5
        },
        "ability_raw_count": {
            "Ability: Sand Stream": 2
        },
        "ability_percents": {
            "Ability: Sand Stream": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 1,
            "Assault Vest": 1
        },
        "item_percents": {
            "Focus Sash": 0.5,
            "Assault Vest": 0.5
        },
        "tera_type_raw_count": {
            "Ghost": 1,
            "Flying": 1
        },
        "tera_type_percents": {
            "Ghost": 0.5,
            "Flying": 0.5
        }
    },
    "moltres-galar": {
        "count": 1,
        "move_raw_count": {
            "Fiery Wrath": 1,
            "Foul Play": 1,
            "Taunt": 1,
            "Protect": 1
        },
        "move_percents": {
            "Fiery Wrath": 1.0,
            "Foul Play": 1.0,
            "Taunt": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Berserk": 1
        },
        "ability_percents": {
            "Ability: Berserk": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 1
        },
        "item_percents": {
            "Covert Cloak": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 1
        },
        "tera_type_percents": {
            "Ghost": 1.0
        }
    },
    "latios": {
        "count": 1,
        "move_raw_count": {
            "Luster Purge": 1,
            "Draco Meteor": 1,
            "Tera Blast": 1,
            "Protect": 1
        },
        "move_percents": {
            "Luster Purge": 1.0,
            "Draco Meteor": 1.0,
            "Tera Blast": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Levitate": 1
        },
        "ability_percents": {
            "Ability: Levitate": 1.0
        },
        "item_raw_count": {
            "Life Orb": 1
        },
        "item_percents": {
            "Life Orb": 1.0
        },
        "tera_type_raw_count": {
            "Fire": 1
        },
        "tera_type_percents": {
            "Fire": 1.0
        }
    },
    "zacian-crowned": {
        "count": 2,
        "move_raw_count": {
            "Behemoth Blade": 1,
            "Play Rough": 2,
            "Swords Dance": 1,
            "Protect": 2,
            "Iron Head": 1,
            "Sacred Sword": 1
        },
        "move_percents": {
            "Behemoth Blade": 0.5,
            "Play Rough": 1.0,
            "Swords Dance": 0.5,
            "Protect": 1.0,
            "Iron Head": 0.5,
            "Sacred Sword": 0.5
        },
        "ability_raw_count": {
            "Ability: Intrepid Sword": 2
        },
        "ability_percents": {
            "Ability: Intrepid Sword": 1.0
        },
        "item_raw_count": {
            "Rusted Sword": 2
        },
        "item_percents": {
            "Rusted Sword": 1.0
        },
        "tera_type_raw_count": {
            "Dragon": 1,
            "Fairy": 1
        },
        "tera_type_percents": {
            "Dragon": 0.5,
            "Fairy": 0.5
        }
    },
    "landorus": {
        "count": 3,
        "move_raw_count": {
            "Sandsear Storm": 3,
            "Sludge Bomb": 3,
            "Substitute": 1,
            "Protect": 3,
            "Earth Power": 2
        },
        "move_percents": {
            "Sandsear Storm": 1.0,
            "Sludge Bomb": 1.0,
            "Substitute": 0.3333333333333333,
            "Protect": 1.0,
            "Earth Power": 0.6666666666666666
        },
        "ability_raw_count": {
            "Ability: Sheer Force": 3
        },
        "ability_percents": {
            "Ability: Sheer Force": 1.0
        },
        "item_raw_count": {
            "Life Orb": 3
        },
        "item_percents": {
            "Life Orb": 1.0
        },
        "tera_type_raw_count": {
            "Normal": 1,
            "Steel": 1,
            "Fairy": 1
        },
        "tera_type_percents": {
            "Normal": 0.3333333333333333,
            "Steel": 0.3333333333333333,
            "Fairy": 0.3333333333333333
        }
    },
    "indeedee-f": {
        "count": 5,
        "move_raw_count": {
            "Helping Hand": 4,
            "Follow Me": 5,
            "Trick Room": 4,
            "Baton Pass": 1,
            "Protect": 1,
            "Alluring Voice": 1,
            "Dazzling Gleam": 2,
            "Reflect": 1,
            "Play Rough": 1
        },
        "move_percents": {
            "Helping Hand": 0.8,
            "Follow Me": 1.0,
            "Trick Room": 0.8,
            "Baton Pass": 0.2,
            "Protect": 0.2,
            "Alluring Voice": 0.2,
            "Dazzling Gleam": 0.4,
            "Reflect": 0.2,
            "Play Rough": 0.2
        },
        "ability_raw_count": {
            "Ability: Psychic Surge": 5
        },
        "ability_percents": {
            "Ability: Psychic Surge": 1.0
        },
        "item_raw_count": {
            "Rocky Helmet": 4,
            "Psychic Seed": 1
        },
        "item_percents": {
            "Rocky Helmet": 0.8,
            "Psychic Seed": 0.2
        },
        "tera_type_raw_count": {
            "Water": 1,
            "Grass": 2,
            "Fairy": 2
        },
        "tera_type_percents": {
            "Water": 0.2,
            "Grass": 0.4,
            "Fairy": 0.4
        }
    },
    "archaludon": {
        "count": 1,
        "move_raw_count": {
            "Dragon Pulse": 1,
            "Flash Cannon": 1,
            "Electro Shot": 1,
            "Body Press": 1
        },
        "move_percents": {
            "Dragon Pulse": 1.0,
            "Flash Cannon": 1.0,
            "Electro Shot": 1.0,
            "Body Press": 1.0
        },
        "ability_raw_count": {
            "Ability: Stamina": 1
        },
        "ability_percents": {
            "Ability: Stamina": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 1
        },
        "item_percents": {
            "Assault Vest": 1.0
        },
        "tera_type_raw_count": {
            "Bug": 1
        },
        "tera_type_percents": {
            "Bug": 1.0
        }
    },
    "dondozo": {
        "count": 5,
        "move_raw_count": {
            "Protect": 5,
            "Order Up": 5,
            "Earthquake": 4,
            "Wave Crash": 2,
            "Rest": 1,
            "Body Press": 2,
            "Substitute": 1
        },
        "move_percents": {
            "Protect": 1.0,
            "Order Up": 1.0,
            "Earthquake": 0.8,
            "Wave Crash": 0.4,
            "Rest": 0.2,
            "Body Press": 0.4,
            "Substitute": 0.2
        },
        "ability_raw_count": {
            "Ability: Unaware": 4,
            "Ability: Oblivious": 1
        },
        "ability_percents": {
            "Ability: Unaware": 0.8,
            "Ability: Oblivious": 0.2
        },
        "item_raw_count": {
            "Leftovers": 5
        },
        "item_percents": {
            "Leftovers": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 4,
            "Dragon": 1
        },
        "tera_type_percents": {
            "Grass": 0.8,
            "Dragon": 0.2
        }
    },
    "tatsugiri": {
        "count": 3,
        "move_raw_count": {
            "Draco Meteor": 3,
            "Dragon Pulse": 1,
            "Muddy Water": 3,
            "Icy Wind": 2,
            "Mirror Coat": 1,
            "Counter": 1,
            "Helping Hand": 1
        },
        "move_percents": {
            "Draco Meteor": 1.0,
            "Dragon Pulse": 0.3333333333333333,
            "Muddy Water": 1.0,
            "Icy Wind": 0.6666666666666666,
            "Mirror Coat": 0.3333333333333333,
            "Counter": 0.3333333333333333,
            "Helping Hand": 0.3333333333333333
        },
        "ability_raw_count": {
            "Ability: Commander": 3
        },
        "ability_percents": {
            "Ability: Commander": 1.0
        },
        "item_raw_count": {
            "Choice Scarf": 1,
            "Assault Vest": 1,
            "Focus Sash": 1
        },
        "item_percents": {
            "Choice Scarf": 0.3333333333333333,
            "Assault Vest": 0.3333333333333333,
            "Focus Sash": 0.3333333333333333
        },
        "tera_type_raw_count": {
            "Normal": 1,
            "Steel": 2
        },
        "tera_type_percents": {
            "Normal": 0.3333333333333333,
            "Steel": 0.6666666666666666
        }
    },
    "dragonite": {
        "count": 1,
        "move_raw_count": {
            "Extreme Speed": 1,
            "Aqua Jet": 1,
            "Aerial Ace": 1,
            "Iron Head": 1
        },
        "move_percents": {
            "Extreme Speed": 1.0,
            "Aqua Jet": 1.0,
            "Aerial Ace": 1.0,
            "Iron Head": 1.0
        },
        "ability_raw_count": {
            "Ability: Multiscale": 1
        },
        "ability_percents": {
            "Ability: Multiscale": 1.0
        },
        "item_raw_count": {
            "Choice Band": 1
        },
        "item_percents": {
            "Choice Band": 1.0
        },
        "tera_type_raw_count": {
            "Normal": 1
        },
        "tera_type_percents": {
            "Normal": 1.0
        }
    },
    "regigigas": {
        "count": 2,
        "move_raw_count": {
            "Protect": 2,
            "Wide Guard": 2,
            "High Horsepower": 1,
            "Crush Grip": 2,
            "Knock Off": 1
        },
        "move_percents": {
            "Protect": 1.0,
            "Wide Guard": 1.0,
            "High Horsepower": 0.5,
            "Crush Grip": 1.0,
            "Knock Off": 0.5
        },
        "ability_raw_count": {
            "Ability: Slow Start": 2
        },
        "ability_percents": {
            "Ability: Slow Start": 1.0
        },
        "item_raw_count": {
            "Life Orb": 2
        },
        "item_percents": {
            "Life Orb": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 1,
            "Fairy": 1
        },
        "tera_type_percents": {
            "Ghost": 0.5,
            "Fairy": 0.5
        }
    },
    "weezing-galar": {
        "count": 4,
        "move_raw_count": {
            "Protect": 3,
            "Taunt": 2,
            "Poison Gas": 4,
            "Strange Steam": 4,
            "Toxic Spikes": 3
        },
        "move_percents": {
            "Protect": 0.75,
            "Taunt": 0.5,
            "Poison Gas": 1.0,
            "Strange Steam": 1.0,
            "Toxic Spikes": 0.75
        },
        "ability_raw_count": {
            "Ability: Neutralizing Gas": 4
        },
        "ability_percents": {
            "Ability: Neutralizing Gas": 1.0
        },
        "item_raw_count": {
            "Rocky Helmet": 1,
            "Covert Cloak": 3
        },
        "item_percents": {
            "Rocky Helmet": 0.25,
            "Covert Cloak": 0.75
        },
        "tera_type_raw_count": {
            "Dark": 2,
            "Normal": 1,
            "Water": 1
        },
        "tera_type_percents": {
            "Dark": 0.5,
            "Normal": 0.25,
            "Water": 0.25
        }
    },
    "ogerpon": {
        "count": 2,
        "move_raw_count": {
            "Wood Hammer": 1,
            "Superpower": 1,
            "Follow Me": 1,
            "Spiky Shield": 2,
            "Ivy Cudgel": 1,
            "Horn Leech": 1,
            "U-turn": 1
        },
        "move_percents": {
            "Wood Hammer": 0.5,
            "Superpower": 0.5,
            "Follow Me": 0.5,
            "Spiky Shield": 1.0,
            "Ivy Cudgel": 0.5,
            "Horn Leech": 0.5,
            "U-turn": 0.5
        },
        "ability_raw_count": {
            "Ability: Defiant": 2
        },
        "ability_percents": {
            "Ability: Defiant": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 2
        },
        "item_percents": {
            "Covert Cloak": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 2
        },
        "tera_type_percents": {
            "Grass": 1.0
        }
    },
    "gholdengo": {
        "count": 1,
        "move_raw_count": {
            "Make It Rain": 1,
            "Shadow Ball": 1,
            "Nasty Plot": 1,
            "Protect": 1
        },
        "move_percents": {
            "Make It Rain": 1.0,
            "Shadow Ball": 1.0,
            "Nasty Plot": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Good as Gold": 1
        },
        "ability_percents": {
            "Ability: Good as Gold": 1.0
        },
        "item_raw_count": {
            "Leftovers": 1
        },
        "item_percents": {
            "Leftovers": 1.0
        },
        "tera_type_raw_count": {
            "Normal": 1
        },
        "tera_type_percents": {
            "Normal": 1.0
        }
    },
    "spectrier": {
        "count": 1,
        "move_raw_count": {
            "Will-O-Wisp": 1,
            "Shadow Ball": 1,
            "Snarl": 1,
            "Taunt": 1
        },
        "move_percents": {
            "Will-O-Wisp": 1.0,
            "Shadow Ball": 1.0,
            "Snarl": 1.0,
            "Taunt": 1.0
        },
        "ability_raw_count": {
            "Ability: Grim Neigh": 1
        },
        "ability_percents": {
            "Ability: Grim Neigh": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 1
        },
        "item_percents": {
            "Sitrus Berry": 1.0
        },
        "tera_type_raw_count": {
            "Fairy": 1
        },
        "tera_type_percents": {
            "Fairy": 1.0
        }
    },
    "maushold": {
        "count": 1,
        "move_raw_count": {
            "Feint": 1,
            "Follow Me": 1,
            "Helping Hand": 1,
            "Protect": 1
        },
        "move_percents": {
            "Feint": 1.0,
            "Follow Me": 1.0,
            "Helping Hand": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Friend Guard": 1
        },
        "ability_percents": {
            "Ability: Friend Guard": 1.0
        },
        "item_raw_count": {
            "Rocky Helmet": 1
        },
        "item_percents": {
            "Rocky Helmet": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 1
        },
        "tera_type_percents": {
            "Ghost": 1.0
        }
    },
    "mienshao": {
        "count": 2,
        "move_raw_count": {
            "Close Combat": 2,
            "Feint": 2,
            "Fake Out": 2,
            "Wide Guard": 2
        },
        "move_percents": {
            "Close Combat": 1.0,
            "Feint": 1.0,
            "Fake Out": 1.0,
            "Wide Guard": 1.0
        },
        "ability_raw_count": {
            "Ability: Inner Focus": 2
        },
        "ability_percents": {
            "Ability: Inner Focus": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 2
        },
        "item_percents": {
            "Focus Sash": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 1,
            "Fighting": 1
        },
        "tera_type_percents": {
            "Ghost": 0.5,
            "Fighting": 0.5
        }
    },
    "ogerpon-wellspring": {
        "count": 2,
        "move_raw_count": {
            "Ivy Cudgel": 2,
            "Follow Me": 2,
            "Taunt": 1,
            "Spiky Shield": 2,
            "Wood Hammer": 1
        },
        "move_percents": {
            "Ivy Cudgel": 1.0,
            "Follow Me": 1.0,
            "Taunt": 0.5,
            "Spiky Shield": 1.0,
            "Wood Hammer": 0.5
        },
        "ability_raw_count": {
            "Ability: Water Absorb": 2
        },
        "ability_percents": {
            "Ability: Water Absorb": 1.0
        },
        "item_raw_count": {
            "Wellspring Mask": 2
        },
        "item_percents": {
            "Wellspring Mask": 1.0
        },
        "tera_type_raw_count": {
            "Water": 2
        },
        "tera_type_percents": {
            "Water": 1.0
        }
    },
    "tatsugiri-droopy": {
        "count": 2,
        "move_raw_count": {
            "Draco Meteor": 2,
            "Muddy Water": 1,
            "Helping Hand": 1,
            "Protect": 1,
            "Mirror Coat": 1,
            "Counter": 1,
            "Taunt": 1
        },
        "move_percents": {
            "Draco Meteor": 1.0,
            "Muddy Water": 0.5,
            "Helping Hand": 0.5,
            "Protect": 0.5,
            "Mirror Coat": 0.5,
            "Counter": 0.5,
            "Taunt": 0.5
        },
        "ability_raw_count": {
            "Ability: Commander": 2
        },
        "ability_percents": {
            "Ability: Commander": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 2
        },
        "item_percents": {
            "Focus Sash": 1.0
        },
        "tera_type_raw_count": {
            "Stellar": 1,
            "Dragon": 1
        },
        "tera_type_percents": {
            "Stellar": 0.5,
            "Dragon": 0.5
        }
    },
    "regieleki": {
        "count": 2,
        "move_raw_count": {
            "Thunder": 1,
            "Electroweb": 2,
            "Thunder Wave": 1,
            "Protect": 2,
            "Thunderbolt": 1,
            "Volt Switch": 1
        },
        "move_percents": {
            "Thunder": 0.5,
            "Electroweb": 1.0,
            "Thunder Wave": 0.5,
            "Protect": 1.0,
            "Thunderbolt": 0.5,
            "Volt Switch": 0.5
        },
        "ability_raw_count": {
            "Ability: Transistor": 2
        },
        "ability_percents": {
            "Ability: Transistor": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 2
        },
        "item_percents": {
            "Focus Sash": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 2
        },
        "tera_type_percents": {
            "Ghost": 1.0
        }
    },
    "mimikyu": {
        "count": 1,
        "move_raw_count": {
            "Trick Room": 1,
            "Will-O-Wisp": 1,
            "Taunt": 1,
            "Play Rough": 1
        },
        "move_percents": {
            "Trick Room": 1.0,
            "Will-O-Wisp": 1.0,
            "Taunt": 1.0,
            "Play Rough": 1.0
        },
        "ability_raw_count": {
            "Ability: Disguise": 1
        },
        "ability_percents": {
            "Ability: Disguise": 1.0
        },
        "item_raw_count": {
            "Mental Herb": 1
        },
        "item_percents": {
            "Mental Herb": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 1
        },
        "tera_type_percents": {
            "Grass": 1.0
        }
    },
    "iron crown": {
        "count": 1,
        "move_raw_count": {
            "Tachyon Cutter": 1,
            "Expanding Force": 1,
            "Tera Blast": 1,
            "Protect": 1
        },
        "move_percents": {
            "Tachyon Cutter": 1.0,
            "Expanding Force": 1.0,
            "Tera Blast": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ability: Quark Drive": 1
        },
        "ability_percents": {
            "Ability: Quark Drive": 1.0
        },
        "item_raw_count": {
            "Life Orb": 1
        },
        "item_percents": {
            "Life Orb": 1.0
        },
        "tera_type_raw_count": {
            "Ground": 1
        },
        "tera_type_percents": {
            "Ground": 1.0
        }
    },
    "armarouge": {
        "count": 1,
        "move_raw_count": {
            "Wide Guard": 1,
            "Armor Cannon": 1,
            "Trick Room": 1,
            "Psychic": 1
        },
        "move_percents": {
            "Wide Guard": 1.0,
            "Armor Cannon": 1.0,
            "Trick Room": 1.0,
            "Psychic": 1.0
        },
        "ability_raw_count": {
            "Ability: Flash Fire": 1
        },
        "ability_percents": {
            "Ability: Flash Fire": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 1
        },
        "item_percents": {
            "Sitrus Berry": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 1
        },
        "tera_type_percents": {
            "Grass": 1.0
        }
    },
    "great tusk": {
        "count": 1,
        "move_raw_count": {
            "Protect": 1,
            "Endeavor": 1,
            "Close Combat": 1,
            "Headlong Rush": 1
        },
        "move_percents": {
            "Protect": 1.0,
            "Endeavor": 1.0,
            "Close Combat": 1.0,
            "Headlong Rush": 1.0
        },
        "ability_raw_count": {
            "Ability: Protosynthesis": 1
        },
        "ability_percents": {
            "Ability: Protosynthesis": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 1
        },
        "item_percents": {
            "Focus Sash": 1.0
        },
        "tera_type_raw_count": {
            "Stellar": 1
        },
        "tera_type_percents": {
            "Stellar": 1.0
        }
    },
    "groudon": {
        "count": 1,
        "move_raw_count": {
            "Precipice Blades": 1,
            "Heat Crash": 1,
            "High Horsepower": 1,
            "Stone Edge": 1
        },
        "move_percents": {
            "Precipice Blades": 1.0,
            "Heat Crash": 1.0,
            "High Horsepower": 1.0,
            "Stone Edge": 1.0
        },
        "ability_raw_count": {
            "Ability: Drought": 1
        },
        "ability_percents": {
            "Ability: Drought": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 1
        },
        "item_percents": {
            "Assault Vest": 1.0
        },
        "tera_type_raw_count": {
            "Fire": 1
        },
        "tera_type_percents": {
            "Fire": 1.0
        }
    },
    "annihilape": {
        "count": 1,
        "move_raw_count": {
            "Close Combat": 1,
            "Final Gambit": 1,
            "Coaching": 1,
            "Shadow Claw": 1
        },
        "move_percents": {
            "Close Combat": 1.0,
            "Final Gambit": 1.0,
            "Coaching": 1.0,
            "Shadow Claw": 1.0
        },
        "ability_raw_count": {
            "Ability: Defiant": 1
        },
        "ability_percents": {
            "Ability: Defiant": 1.0
        },
        "item_raw_count": {
            "Choice Scarf": 1
        },
        "item_percents": {
            "Choice Scarf": 1.0
        },
        "tera_type_raw_count": {
            "Grass": 1
        },
        "tera_type_percents": {
            "Grass": 1.0
        }
    },
    "brute bonnet": {
        "count": 1,
        "move_raw_count": {
            "Bullet Seed": 1,
            "Spore": 1,
            "Rage Powder": 1,
            "Taunt": 1
        },
        "move_percents": {
            "Bullet Seed": 1.0,
            "Spore": 1.0,
            "Rage Powder": 1.0,
            "Taunt": 1.0
        },
        "ability_raw_count": {
            "Ability: Protosynthesis": 1
        },
        "ability_percents": {
            "Ability: Protosynthesis": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 1
        },
        "item_percents": {
            "Covert Cloak": 1.0
        },
        "tera_type_raw_count": {
            "Electric": 1
        },
        "tera_type_percents": {
            "Electric": 1.0
        }
    },
    "maushold-four": {
        "count": 1,
        "move_raw_count": {
            "Follow Me": 1,
            "Helping Hand": 1,
            "Feint": 1,
            "Taunt": 1
        },
        "move_percents": {
            "Follow Me": 1.0,
            "Helping Hand": 1.0,
            "Feint": 1.0,
            "Taunt": 1.0
        },
        "ability_raw_count": {
            "Ability: Friend Guard": 1
        },
        "ability_percents": {
            "Ability: Friend Guard": 1.0
        },
        "item_raw_count": {
            "Rocky Helmet": 1
        },
        "item_percents": {
            "Rocky Helmet": 1.0
        },
        "tera_type_raw_count": {
            "Ghost": 1
        },
        "tera_type_percents": {
            "Ghost": 1.0
        }
    },
    "giratina": {
        "count": 1,
        "move_raw_count": {
            "Shadow Force": 1,
            "Dragon Claw": 1,
            "Tera Blast": 1,
            "Iron Head": 1
        },
        "move_percents": {
            "Shadow Force": 1.0,
            "Dragon Claw": 1.0,
            "Tera Blast": 1.0,
            "Iron Head": 1.0
        },
        "ability_raw_count": {
            "Ability: Telepathy": 1
        },
        "ability_percents": {
            "Ability: Telepathy": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 1
        },
        "item_percents": {
            "Assault Vest": 1.0
        },
        "tera_type_raw_count": {
            "Stellar": 1
        },
        "tera_type_percents": {
            "Stellar": 1.0
        }
    }
}

