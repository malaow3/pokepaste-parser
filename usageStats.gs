function myFunction() {
    var sheetToPopulate = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var cellValue = sheetToPopulate.getRange('A2').getValue();
    let count = json[cellValue].count;
    // Set the value of cell A3 to the count
    sheetToPopulate.getRange('A3').setValue(count);

    // Clear out the contents of column B -> I starting at row 2
    sheetToPopulate.getRange('B2:I').clearContent();

    // For each move in the json object, write to column B
    let moves = json[cellValue]["move_percents"];
    let moveKeys = Object.keys(moves);
    let moveValues = Object.values(moves);
    // Sort the moveKeys by the moveValues
    moveKeys.sort(function (a, b) {
        return moves[b] - moves[a];
    });
    // Sort the moveValues by value
    moveValues.sort(function (a, b) {
        return b - a;
    });

    for (let i = 0; i < moveKeys.length; i++) {
        sheetToPopulate.getRange('B' + (i + 2)).setValue(moveKeys[i]);
        sheetToPopulate.getRange('C' + (i + 2)).setValue(moveValues[i]);
    }

    // For each ability in the json object, write to column D
    let abilities = json[cellValue]["ability_percents"];
    let abilityKeys = Object.keys(abilities);
    let abilityValues = Object.values(abilities);
    // Sort the abilityKeys by the abilityValues
    abilityKeys.sort(function (a, b) {
        return abilities[b] - abilities[a];
    });
    // Sort the abilityValues by value
    abilityValues.sort(function (a, b) {
        return b - a;
    });
    for (let i = 0; i < abilityKeys.length; i++) {
        sheetToPopulate.getRange('D' + (i + 2)).setValue(abilityKeys[i]);
        sheetToPopulate.getRange('E' + (i + 2)).setValue(abilityValues[i]);
    }

    // For each item in the json object, write to column F
    let items = json[cellValue]["item_percents"];
    let itemKeys = Object.keys(items);
    let itemValues = Object.values(items);
    // Sort the itemKeys by the itemValues
    itemKeys.sort(function (a, b) {
        return items[b] - items[a];
    });
    // Sort the itemValues by value
    itemValues.sort(function (a, b) {
        return b - a;
    });
    for (let i = 0; i < itemKeys.length; i++) {
        sheetToPopulate.getRange('F' + (i + 2)).setValue(itemKeys[i]);
        sheetToPopulate.getRange('G' + (i + 2)).setValue(itemValues[i]);
    }

    // For each tera type in the json object, write to column H
    let teraTypes = json[cellValue]["tera_type_percents"];
    let teraTypeKeys = Object.keys(teraTypes);
    let teraTypeValues = Object.values(teraTypes);
    // Sort the teraTypeKeys by the teraTypeValues
    teraTypeKeys.sort(function (a, b) {
        return teraTypes[b] - teraTypes[a];
    });
    // Sort the teraTypeValues by value
    teraTypeValues.sort(function (a, b) {
        return b - a;
    });
    for (let i = 0; i < teraTypeKeys.length; i++) {
        sheetToPopulate.getRange('H' + (i + 2)).setValue(teraTypeKeys[i]);
        sheetToPopulate.getRange('I' + (i + 2)).setValue(teraTypeValues[i]);
    }

}

function onChangeTrigger(e) {
    var editedSheet = e.source.getActiveSheet();
    var editedCellAddress = 'A2';

    var editedRange = e.source.getActiveRange();
    var editedCell = editedRange.getCell(1, 2);

    if (editedSheet.getName() === 'Sheet1' && editedCell.getA1Notation() === editedCellAddress) {
        myFunction();
    }
}

let json = {
    "Pelipper": {
        "count": 18,
        "move_raw_count": {
            "Hydro Pump": 13,
            "Hurricane": 18,
            "Tailwind": 13,
            "Protect": 11,
            "Helping Hand": 6,
            "Wide Guard": 9,
            "U-turn": 1,
            "Chilling Water": 1
        },
        "move_percents": {
            "Hydro Pump": 0.7222222222222222,
            "Hurricane": 1.0,
            "Tailwind": 0.7222222222222222,
            "Protect": 0.6111111111111112,
            "Helping Hand": 0.3333333333333333,
            "Wide Guard": 0.5,
            "U-turn": 0.05555555555555555,
            "Chilling Water": 0.05555555555555555
        },
        "ability_raw_count": {
            "Drizzle": 18
        },
        "ability_percents": {
            "Drizzle": 1.0
        },
        "item_raw_count": {
            "Damp Rock": 8,
            "Sitrus Berry": 1,
            "Focus Sash": 7,
            "Rocky Helmet": 1,
            "Covert Cloak": 1
        },
        "item_percents": {
            "Damp Rock": 0.4444444444444444,
            "Sitrus Berry": 0.05555555555555555,
            "Focus Sash": 0.3888888888888889,
            "Rocky Helmet": 0.05555555555555555,
            "Covert Cloak": 0.05555555555555555
        }
    },
    "Basculegion": {
        "count": 13,
        "move_raw_count": {
            "Wave Crash": 12,
            "Aqua Jet": 12,
            "Last Respects": 13,
            "Protect": 13,
            "Liquidation": 1,
            "Ice Fang": 1
        },
        "move_percents": {
            "Wave Crash": 0.9230769230769231,
            "Aqua Jet": 0.9230769230769231,
            "Last Respects": 1.0,
            "Protect": 1.0,
            "Liquidation": 0.07692307692307693,
            "Ice Fang": 0.07692307692307693
        },
        "ability_raw_count": {
            "Swift Swim": 11,
            "Adaptability": 2
        },
        "ability_percents": {
            "Swift Swim": 0.8461538461538461,
            "Adaptability": 0.15384615384615385
        },
        "item_raw_count": {
            "Mystic Water": 2,
            "Life Orb": 10,
            "Sitrus Berry": 1
        },
        "item_percents": {
            "Mystic Water": 0.15384615384615385,
            "Life Orb": 0.7692307692307693,
            "Sitrus Berry": 0.07692307692307693
        }
    },
    "Roaring Moon": {
        "count": 14,
        "move_raw_count": {
            "Acrobatics": 12,
            "Stomping Tantrum": 1,
            "Dragon Dance": 9,
            "Protect": 14,
            "Throat Chop": 6,
            "Tailwind": 5,
            "Breaking Swipe": 3,
            "Jaw Lock": 3,
            "Crunch": 2,
            "Earthquake": 1
        },
        "move_percents": {
            "Acrobatics": 0.8571428571428571,
            "Stomping Tantrum": 0.07142857142857142,
            "Dragon Dance": 0.6428571428571429,
            "Protect": 1.0,
            "Throat Chop": 0.42857142857142855,
            "Tailwind": 0.35714285714285715,
            "Breaking Swipe": 0.21428571428571427,
            "Jaw Lock": 0.21428571428571427,
            "Crunch": 0.14285714285714285,
            "Earthquake": 0.07142857142857142
        },
        "ability_raw_count": {
            "Protosynthesis": 14
        },
        "ability_percents": {
            "Protosynthesis": 1.0
        },
        "item_raw_count": {
            "Booster Energy": 13,
            "Safety Goggles": 1
        },
        "item_percents": {
            "Booster Energy": 0.9285714285714286,
            "Safety Goggles": 0.07142857142857142
        }
    },
    "Amoonguss": {
        "count": 145,
        "move_raw_count": {
            "Protect": 100,
            "Rage Powder": 145,
            "Spore": 145,
            "Pollen Puff": 139,
            "Clear Smog": 38,
            "Leaf Storm": 6,
            "Giga Drain": 2,
            "Worry Seed": 1,
            "Sludge Bomb": 2,
            "Grass Knot": 2
        },
        "move_percents": {
            "Protect": 0.6896551724137931,
            "Rage Powder": 1.0,
            "Spore": 1.0,
            "Pollen Puff": 0.9586206896551724,
            "Clear Smog": 0.2620689655172414,
            "Leaf Storm": 0.041379310344827586,
            "Giga Drain": 0.013793103448275862,
            "Worry Seed": 0.006896551724137931,
            "Sludge Bomb": 0.013793103448275862,
            "Grass Knot": 0.013793103448275862
        },
        "ability_raw_count": {
            "Regenerator": 145
        },
        "ability_percents": {
            "Regenerator": 1.0
        },
        "item_raw_count": {
            "Rocky Helmet": 119,
            "Leftovers": 1,
            "Sitrus Berry": 16,
            "Mental Herb": 6,
            "Aguav Berry": 1,
            "Wiki Berry": 1,
            "Covert Cloak": 1
        },
        "item_percents": {
            "Rocky Helmet": 0.8206896551724138,
            "Leftovers": 0.006896551724137931,
            "Sitrus Berry": 0.1103448275862069,
            "Mental Herb": 0.041379310344827586,
            "Aguav Berry": 0.006896551724137931,
            "Wiki Berry": 0.006896551724137931,
            "Covert Cloak": 0.006896551724137931
        }
    },
    "Gholdengo": {
        "count": 80,
        "move_raw_count": {
            "Make It Rain": 80,
            "Shadow Ball": 79,
            "Nasty Plot": 64,
            "Protect": 62,
            "Trick": 14,
            "Thunderbolt": 16,
            "Flash Cannon": 1,
            "Dazzling Gleam": 1,
            "Tera Blast": 2,
            "Power Gem": 1
        },
        "move_percents": {
            "Make It Rain": 1.0,
            "Shadow Ball": 0.9875,
            "Nasty Plot": 0.8,
            "Protect": 0.775,
            "Trick": 0.175,
            "Thunderbolt": 0.2,
            "Flash Cannon": 0.0125,
            "Dazzling Gleam": 0.0125,
            "Tera Blast": 0.025,
            "Power Gem": 0.0125
        },
        "ability_raw_count": {
            "Good as Gold": 80
        },
        "ability_percents": {
            "Good as Gold": 1.0
        },
        "item_raw_count": {
            "Leftovers": 53,
            "Metal Coat": 2,
            "Choice Specs": 14,
            "Sitrus Berry": 4,
            "Choice Scarf": 4,
            "Focus Sash": 1,
            "Weakness Policy": 1,
            "Life Orb": 1
        },
        "item_percents": {
            "Leftovers": 0.6625,
            "Metal Coat": 0.025,
            "Choice Specs": 0.175,
            "Sitrus Berry": 0.05,
            "Choice Scarf": 0.05,
            "Focus Sash": 0.0125,
            "Weakness Policy": 0.0125,
            "Life Orb": 0.0125
        }
    },
    "Iron Hands": {
        "count": 107,
        "move_raw_count": {
            "Fake Out": 93,
            "Drain Punch": 102,
            "Wild Charge": 87,
            "Heavy Slam": 41,
            "Swords Dance": 18,
            "Thunder Punch": 20,
            "Protect": 7,
            "Ice Punch": 17,
            "Volt Switch": 27,
            "Close Combat": 6,
            "Detect": 6,
            "Brick Break": 1,
            "Earthquake": 2,
            "Tera Blast": 1
        },
        "move_percents": {
            "Fake Out": 0.8691588785046729,
            "Drain Punch": 0.9532710280373832,
            "Wild Charge": 0.8130841121495327,
            "Heavy Slam": 0.38317757009345793,
            "Swords Dance": 0.16822429906542055,
            "Thunder Punch": 0.18691588785046728,
            "Protect": 0.06542056074766354,
            "Ice Punch": 0.1588785046728972,
            "Volt Switch": 0.2523364485981308,
            "Close Combat": 0.056074766355140186,
            "Detect": 0.056074766355140186,
            "Brick Break": 0.009345794392523364,
            "Earthquake": 0.018691588785046728,
            "Tera Blast": 0.009345794392523364
        },
        "ability_raw_count": {
            "Quark Drive": 107
        },
        "ability_percents": {
            "Quark Drive": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 85,
            "Sitrus Berry": 5,
            "Safety Goggles": 10,
            "Clear Amulet": 2,
            "Booster Energy": 2,
            "Leftovers": 2,
            "Life Orb": 1
        },
        "item_percents": {
            "Assault Vest": 0.794392523364486,
            "Sitrus Berry": 0.04672897196261682,
            "Safety Goggles": 0.09345794392523364,
            "Clear Amulet": 0.018691588785046728,
            "Booster Energy": 0.018691588785046728,
            "Leftovers": 0.018691588785046728,
            "Life Orb": 0.009345794392523364
        }
    },
    "Dondozo": {
        "count": 24,
        "move_raw_count": {
            "Surf": 3,
            "Wave Crash": 23,
            "Sleep Talk": 5,
            "Protect": 21,
            "Earthquake": 5,
            "Tera Blast": 7,
            "Bulldoze": 1,
            "Yawn": 6,
            "Order Up": 9,
            "Rock Slide": 2,
            "Heavy Slam": 5,
            "Rest": 1,
            "Substitute": 3,
            "Body Press": 2,
            "Curse": 2,
            "Liquidation": 1
        },
        "move_percents": {
            "Surf": 0.125,
            "Wave Crash": 0.9583333333333334,
            "Sleep Talk": 0.20833333333333334,
            "Protect": 0.875,
            "Earthquake": 0.20833333333333334,
            "Tera Blast": 0.2916666666666667,
            "Bulldoze": 0.041666666666666664,
            "Yawn": 0.25,
            "Order Up": 0.375,
            "Rock Slide": 0.08333333333333333,
            "Heavy Slam": 0.20833333333333334,
            "Rest": 0.041666666666666664,
            "Substitute": 0.125,
            "Body Press": 0.08333333333333333,
            "Curse": 0.08333333333333333,
            "Liquidation": 0.041666666666666664
        },
        "ability_raw_count": {
            "Unaware": 17,
            "Oblivious": 7
        },
        "ability_percents": {
            "Unaware": 0.7083333333333334,
            "Oblivious": 0.2916666666666667
        },
        "item_raw_count": {
            "Life Orb": 4,
            "Leftovers": 18,
            "Rocky Helmet": 2
        },
        "item_percents": {
            "Life Orb": 0.16666666666666666,
            "Leftovers": 0.75,
            "Rocky Helmet": 0.08333333333333333
        }
    },
    "Tatsugiri": {
        "count": 14,
        "move_raw_count": {
            "Icy Wind": 12,
            "Sleep Talk": 6,
            "Draco Meteor": 14,
            "Muddy Water": 12,
            "Helping Hand": 2,
            "Protect": 2,
            "Soak": 1,
            "Dragon Pulse": 4,
            "Tera Blast": 2,
            "Hydro Pump": 1
        },
        "move_percents": {
            "Icy Wind": 0.8571428571428571,
            "Sleep Talk": 0.42857142857142855,
            "Draco Meteor": 1.0,
            "Muddy Water": 0.8571428571428571,
            "Helping Hand": 0.14285714285714285,
            "Protect": 0.14285714285714285,
            "Soak": 0.07142857142857142,
            "Dragon Pulse": 0.2857142857142857,
            "Tera Blast": 0.14285714285714285,
            "Hydro Pump": 0.07142857142857142
        },
        "ability_raw_count": {
            "Commander": 13,
            "Storm Drain": 1
        },
        "ability_percents": {
            "Commander": 0.9285714285714286,
            "Storm Drain": 0.07142857142857142
        },
        "item_raw_count": {
            "Choice Scarf": 12,
            "Dragon Fang": 1,
            "Rocky Helmet": 1
        },
        "item_percents": {
            "Choice Scarf": 0.8571428571428571,
            "Dragon Fang": 0.07142857142857142,
            "Rocky Helmet": 0.07142857142857142
        }
    },
    "Chien-Pao": {
        "count": 132,
        "move_raw_count": {
            "Sacred Sword": 106,
            "Protect": 129,
            "Sucker Punch": 122,
            "Ice Spinner": 117,
            "Brick Break": 2,
            "Throat Chop": 9,
            "Psychic Fangs": 1,
            "Icicle Crash": 14,
            "Haze": 11,
            "Tera Blast": 2,
            "Crunch": 5,
            "Ice Shard": 6,
            "Icy Wind": 2,
            "Rain Dance": 1,
            "Taunt": 1
        },
        "move_percents": {
            "Sacred Sword": 0.803030303030303,
            "Protect": 0.9772727272727273,
            "Sucker Punch": 0.9242424242424242,
            "Ice Spinner": 0.8863636363636364,
            "Brick Break": 0.015151515151515152,
            "Throat Chop": 0.06818181818181818,
            "Psychic Fangs": 0.007575757575757576,
            "Icicle Crash": 0.10606060606060606,
            "Haze": 0.08333333333333333,
            "Tera Blast": 0.015151515151515152,
            "Crunch": 0.03787878787878788,
            "Ice Shard": 0.045454545454545456,
            "Icy Wind": 0.015151515151515152,
            "Rain Dance": 0.007575757575757576,
            "Taunt": 0.007575757575757576
        },
        "ability_raw_count": {
            "Sword of Ruin": 132
        },
        "ability_percents": {
            "Sword of Ruin": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 128,
            "Life Orb": 4
        },
        "item_percents": {
            "Focus Sash": 0.9696969696969697,
            "Life Orb": 0.030303030303030304
        }
    },
    "Dragonite": {
        "count": 73,
        "move_raw_count": {
            "Extreme Speed": 72,
            "Outrage": 54,
            "Aqua Jet": 22,
            "Aerial Ace": 35,
            "Stomping Tantrum": 55,
            "Facade": 1,
            "Fire Punch": 1,
            "Low Kick": 6,
            "Iron Head": 12,
            "Dragon Claw": 3,
            "Thunder Punch": 3,
            "Ice Spinner": 7,
            "Tera Blast": 1,
            "Protect": 3,
            "Rock Slide": 4,
            "Earthquake": 3,
            "Tailwind": 2,
            "Rain Dance": 1,
            "Thunder": 1,
            "Aqua Tail": 1,
            "Dragon Rush": 1,
            "Giga Impact": 2,
            "Dragon Tail": 2
        },
        "move_percents": {
            "Extreme Speed": 0.9863013698630136,
            "Outrage": 0.7397260273972602,
            "Aqua Jet": 0.3013698630136986,
            "Aerial Ace": 0.4794520547945205,
            "Stomping Tantrum": 0.7534246575342466,
            "Facade": 0.0136986301369863,
            "Fire Punch": 0.0136986301369863,
            "Low Kick": 0.0821917808219178,
            "Iron Head": 0.1643835616438356,
            "Dragon Claw": 0.0410958904109589,
            "Thunder Punch": 0.0410958904109589,
            "Ice Spinner": 0.0958904109589041,
            "Tera Blast": 0.0136986301369863,
            "Protect": 0.0410958904109589,
            "Rock Slide": 0.0547945205479452,
            "Earthquake": 0.0410958904109589,
            "Tailwind": 0.0273972602739726,
            "Rain Dance": 0.0136986301369863,
            "Thunder": 0.0136986301369863,
            "Aqua Tail": 0.0136986301369863,
            "Dragon Rush": 0.0136986301369863,
            "Giga Impact": 0.0273972602739726,
            "Dragon Tail": 0.0273972602739726
        },
        "ability_raw_count": {
            "Multiscale": 34,
            "Inner Focus": 39
        },
        "ability_percents": {
            "Multiscale": 0.4657534246575342,
            "Inner Focus": 0.5342465753424658
        },
        "item_raw_count": {
            "Choice Band": 61,
            "Assault Vest": 6,
            "Lum Berry": 1,
            "Clear Amulet": 1,
            "Damp Rock": 1,
            "Life Orb": 1,
            "Safety Goggles": 1,
            "Silk Scarf": 1
        },
        "item_percents": {
            "Choice Band": 0.8356164383561644,
            "Assault Vest": 0.0821917808219178,
            "Lum Berry": 0.0136986301369863,
            "Clear Amulet": 0.0136986301369863,
            "Damp Rock": 0.0136986301369863,
            "Life Orb": 0.0136986301369863,
            "Safety Goggles": 0.0136986301369863,
            "Silk Scarf": 0.0136986301369863
        }
    },
    "Urshifu-Rapid-Strike": {
        "count": 176,
        "move_raw_count": {
            "Surging Strikes": 176,
            "Protect": 53,
            "Aqua Jet": 145,
            "Close Combat": 169,
            "Swords Dance": 6,
            "Detect": 61,
            "U-turn": 54,
            "Rock Slide": 10,
            "Ice Spinner": 13,
            "Taunt": 1,
            "Drain Punch": 5,
            "Thunder Punch": 3,
            "Zen Headbutt": 3,
            "Collision Course": 1,
            "Rock Tomb": 1,
            "Brick Break": 3
        },
        "move_percents": {
            "Surging Strikes": 1.0,
            "Protect": 0.30113636363636365,
            "Aqua Jet": 0.8238636363636364,
            "Close Combat": 0.9602272727272727,
            "Swords Dance": 0.03409090909090909,
            "Detect": 0.3465909090909091,
            "U-turn": 0.3068181818181818,
            "Rock Slide": 0.056818181818181816,
            "Ice Spinner": 0.07386363636363637,
            "Taunt": 0.005681818181818182,
            "Drain Punch": 0.028409090909090908,
            "Thunder Punch": 0.017045454545454544,
            "Zen Headbutt": 0.017045454545454544,
            "Collision Course": 0.005681818181818182,
            "Rock Tomb": 0.005681818181818182,
            "Brick Break": 0.017045454545454544
        },
        "ability_raw_count": {
            "Unseen Fist": 176
        },
        "ability_percents": {
            "Unseen Fist": 1.0
        },
        "item_raw_count": {
            "Mystic Water": 67,
            "Focus Sash": 22,
            "Safety Goggles": 16,
            "Choice Scarf": 50,
            "Assault Vest": 5,
            "Choice Band": 7,
            "Splash Plate": 5,
            "Life Orb": 2,
            "Rocky Helmet": 1,
            "Protective Pads": 1
        },
        "item_percents": {
            "Mystic Water": 0.3806818181818182,
            "Focus Sash": 0.125,
            "Safety Goggles": 0.09090909090909091,
            "Choice Scarf": 0.2840909090909091,
            "Assault Vest": 0.028409090909090908,
            "Choice Band": 0.03977272727272727,
            "Splash Plate": 0.028409090909090908,
            "Life Orb": 0.011363636363636364,
            "Rocky Helmet": 0.005681818181818182,
            "Protective Pads": 0.005681818181818182
        }
    },
    "Cresselia": {
        "count": 60,
        "move_raw_count": {
            "Psychic": 24,
            "Icy Wind": 16,
            "Thunderbolt": 1,
            "Lunar Blessing": 58,
            "Trick Room": 50,
            "Moonblast": 35,
            "Helping Hand": 14,
            "Calm Mind": 8,
            "Stored Power": 3,
            "Dazzling Gleam": 3,
            "Moonlight": 2,
            "Skill Swap": 2,
            "Ice Beam": 7,
            "Protect": 2,
            "Ally Switch": 14,
            "Shadow Ball": 1
        },
        "move_percents": {
            "Psychic": 0.4,
            "Icy Wind": 0.26666666666666666,
            "Thunderbolt": 0.016666666666666666,
            "Lunar Blessing": 0.9666666666666667,
            "Trick Room": 0.8333333333333334,
            "Moonblast": 0.5833333333333334,
            "Helping Hand": 0.23333333333333334,
            "Calm Mind": 0.13333333333333333,
            "Stored Power": 0.05,
            "Dazzling Gleam": 0.05,
            "Moonlight": 0.03333333333333333,
            "Skill Swap": 0.03333333333333333,
            "Ice Beam": 0.11666666666666667,
            "Protect": 0.03333333333333333,
            "Ally Switch": 0.23333333333333334,
            "Shadow Ball": 0.016666666666666666
        },
        "ability_raw_count": {
            "Levitate": 60
        },
        "ability_percents": {
            "Levitate": 1.0
        },
        "item_raw_count": {
            "Expert Belt": 1,
            "Safety Goggles": 24,
            "Sitrus Berry": 3,
            "Mental Herb": 18,
            "Leftovers": 4,
            "Covert Cloak": 1,
            "Rocky Helmet": 9
        },
        "item_percents": {
            "Expert Belt": 0.016666666666666666,
            "Safety Goggles": 0.4,
            "Sitrus Berry": 0.05,
            "Mental Herb": 0.3,
            "Leftovers": 0.06666666666666667,
            "Covert Cloak": 0.016666666666666666,
            "Rocky Helmet": 0.15
        }
    },
    "Heatran": {
        "count": 103,
        "move_raw_count": {
            "Heat Wave": 94,
            "Earth Power": 84,
            "Substitute": 20,
            "Protect": 86,
            "Magma Storm": 3,
            "Iron Defense": 5,
            "Body Press": 5,
            "Tera Blast": 48,
            "Flash Cannon": 56,
            "Will-O-Wisp": 2,
            "Flamethrower": 4,
            "Overheat": 2,
            "Taunt": 1,
            "Heavy Slam": 2
        },
        "move_percents": {
            "Heat Wave": 0.912621359223301,
            "Earth Power": 0.8155339805825242,
            "Substitute": 0.1941747572815534,
            "Protect": 0.8349514563106796,
            "Magma Storm": 0.02912621359223301,
            "Iron Defense": 0.04854368932038835,
            "Body Press": 0.04854368932038835,
            "Tera Blast": 0.46601941747572817,
            "Flash Cannon": 0.5436893203883495,
            "Will-O-Wisp": 0.019417475728155338,
            "Flamethrower": 0.038834951456310676,
            "Overheat": 0.019417475728155338,
            "Taunt": 0.009708737864077669,
            "Heavy Slam": 0.019417475728155338
        },
        "ability_raw_count": {
            "Flash Fire": 102,
            "Flame Body": 1
        },
        "ability_percents": {
            "Flash Fire": 0.9902912621359223,
            "Flame Body": 0.009708737864077669
        },
        "item_raw_count": {
            "Wiki Berry": 1,
            "Leftovers": 41,
            "Safety Goggles": 9,
            "Sitrus Berry": 10,
            "Rocky Helmet": 3,
            "Expert Belt": 1,
            "Assault Vest": 13,
            "Life Orb": 23,
            "Choice Scarf": 1,
            "Choice Specs": 1
        },
        "item_percents": {
            "Wiki Berry": 0.009708737864077669,
            "Leftovers": 0.39805825242718446,
            "Safety Goggles": 0.08737864077669903,
            "Sitrus Berry": 0.0970873786407767,
            "Rocky Helmet": 0.02912621359223301,
            "Expert Belt": 0.009708737864077669,
            "Assault Vest": 0.1262135922330097,
            "Life Orb": 0.22330097087378642,
            "Choice Scarf": 0.009708737864077669,
            "Choice Specs": 0.009708737864077669
        }
    },
    "Landorus-Therian": {
        "count": 82,
        "move_raw_count": {
            "Earthquake": 27,
            "Stomping Tantrum": 66,
            "Rock Slide": 74,
            "U-turn": 75,
            "Tera Blast": 48,
            "Protect": 12,
            "Taunt": 10,
            "Rock Tomb": 8,
            "Bulldoze": 2,
            "Brick Break": 1,
            "Swords Dance": 2,
            "Earth Power": 1,
            "Sandsear Storm": 1,
            "Fissure": 1
        },
        "move_percents": {
            "Earthquake": 0.32926829268292684,
            "Stomping Tantrum": 0.8048780487804879,
            "Rock Slide": 0.9024390243902439,
            "U-turn": 0.9146341463414634,
            "Tera Blast": 0.5853658536585366,
            "Protect": 0.14634146341463414,
            "Taunt": 0.12195121951219512,
            "Rock Tomb": 0.0975609756097561,
            "Bulldoze": 0.024390243902439025,
            "Brick Break": 0.012195121951219513,
            "Swords Dance": 0.024390243902439025,
            "Earth Power": 0.012195121951219513,
            "Sandsear Storm": 0.012195121951219513,
            "Fissure": 0.012195121951219513
        },
        "ability_raw_count": {
            "Intimidate": 82
        },
        "ability_percents": {
            "Intimidate": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 37,
            "Choice Scarf": 22,
            "Choice Band": 4,
            "Focus Sash": 1,
            "Rocky Helmet": 4,
            "Safety Goggles": 5,
            "Life Orb": 3,
            "Sitrus Berry": 3,
            "Clear Amulet": 1,
            "Lum Berry": 2
        },
        "item_percents": {
            "Assault Vest": 0.45121951219512196,
            "Choice Scarf": 0.2682926829268293,
            "Choice Band": 0.04878048780487805,
            "Focus Sash": 0.012195121951219513,
            "Rocky Helmet": 0.04878048780487805,
            "Safety Goggles": 0.06097560975609756,
            "Life Orb": 0.036585365853658534,
            "Sitrus Berry": 0.036585365853658534,
            "Clear Amulet": 0.012195121951219513,
            "Lum Berry": 0.024390243902439025
        }
    },
    "Flutter Mane": {
        "count": 210,
        "move_raw_count": {
            "Moonblast": 180,
            "Dazzling Gleam": 187,
            "Shadow Ball": 205,
            "Protect": 103,
            "Thunderbolt": 59,
            "Substitute": 25,
            "Power Gem": 6,
            "Trick Room": 21,
            "Imprison": 11,
            "Icy Wind": 20,
            "Taunt": 2,
            "Hex": 4,
            "Mystical Fire": 2,
            "Psyshock": 6,
            "Tera Blast": 4,
            "Sunny Day": 1,
            "Thunder": 1,
            "Perish Song": 1,
            "Misty Terrain": 2
        },
        "move_percents": {
            "Moonblast": 0.8571428571428571,
            "Dazzling Gleam": 0.8904761904761904,
            "Shadow Ball": 0.9761904761904762,
            "Protect": 0.49047619047619045,
            "Thunderbolt": 0.28095238095238095,
            "Substitute": 0.11904761904761904,
            "Power Gem": 0.02857142857142857,
            "Trick Room": 0.1,
            "Imprison": 0.05238095238095238,
            "Icy Wind": 0.09523809523809523,
            "Taunt": 0.009523809523809525,
            "Hex": 0.01904761904761905,
            "Mystical Fire": 0.009523809523809525,
            "Psyshock": 0.02857142857142857,
            "Tera Blast": 0.01904761904761905,
            "Sunny Day": 0.004761904761904762,
            "Thunder": 0.004761904761904762,
            "Perish Song": 0.004761904761904762,
            "Misty Terrain": 0.009523809523809525
        },
        "ability_raw_count": {
            "Protosynthesis": 210
        },
        "ability_percents": {
            "Protosynthesis": 1.0
        },
        "item_raw_count": {
            "Pixie Plate": 17,
            "Choice Specs": 90,
            "Booster Energy": 91,
            "Focus Sash": 7,
            "Life Orb": 4,
            "Safety Goggles": 1
        },
        "item_percents": {
            "Pixie Plate": 0.08095238095238096,
            "Choice Specs": 0.42857142857142855,
            "Booster Energy": 0.43333333333333335,
            "Focus Sash": 0.03333333333333333,
            "Life Orb": 0.01904761904761905,
            "Safety Goggles": 0.004761904761904762
        }
    },
    "Chi-Yu": {
        "count": 29,
        "move_raw_count": {
            "Heat Wave": 27,
            "Dark Pulse": 26,
            "Substitute": 2,
            "Protect": 14,
            "Tera Blast": 8,
            "Flamethrower": 4,
            "Overheat": 16,
            "Snarl": 12,
            "Nasty Plot": 6,
            "Will-O-Wisp": 1
        },
        "move_percents": {
            "Heat Wave": 0.9310344827586207,
            "Dark Pulse": 0.896551724137931,
            "Substitute": 0.06896551724137931,
            "Protect": 0.4827586206896552,
            "Tera Blast": 0.27586206896551724,
            "Flamethrower": 0.13793103448275862,
            "Overheat": 0.5517241379310345,
            "Snarl": 0.41379310344827586,
            "Nasty Plot": 0.20689655172413793,
            "Will-O-Wisp": 0.034482758620689655
        },
        "ability_raw_count": {
            "Beads of Ruin": 29
        },
        "ability_percents": {
            "Beads of Ruin": 1.0
        },
        "item_raw_count": {
            "Leftovers": 2,
            "Choice Scarf": 2,
            "Safety Goggles": 7,
            "Choice Specs": 12,
            "Focus Sash": 4,
            "Eject Pack": 1,
            "Assault Vest": 1
        },
        "item_percents": {
            "Leftovers": 0.06896551724137931,
            "Choice Scarf": 0.06896551724137931,
            "Safety Goggles": 0.2413793103448276,
            "Choice Specs": 0.41379310344827586,
            "Focus Sash": 0.13793103448275862,
            "Eject Pack": 0.034482758620689655,
            "Assault Vest": 0.034482758620689655
        }
    },
    "Tornadus": {
        "count": 102,
        "move_raw_count": {
            "Bleakwind Storm": 94,
            "Taunt": 82,
            "Tailwind": 102,
            "Scary Face": 4,
            "Icy Wind": 22,
            "Metronome": 1,
            "Rain Dance": 44,
            "Protect": 30,
            "Sunny Day": 17,
            "Air Slash": 6,
            "Hurricane": 1,
            "Leer": 2,
            "Dark Pulse": 2,
            "Chilling Water": 1
        },
        "move_percents": {
            "Bleakwind Storm": 0.9215686274509803,
            "Taunt": 0.803921568627451,
            "Tailwind": 1.0,
            "Scary Face": 0.0392156862745098,
            "Icy Wind": 0.21568627450980393,
            "Metronome": 0.00980392156862745,
            "Rain Dance": 0.43137254901960786,
            "Protect": 0.29411764705882354,
            "Sunny Day": 0.16666666666666666,
            "Air Slash": 0.058823529411764705,
            "Hurricane": 0.00980392156862745,
            "Leer": 0.0196078431372549,
            "Dark Pulse": 0.0196078431372549,
            "Chilling Water": 0.00980392156862745
        },
        "ability_raw_count": {
            "Prankster": 102
        },
        "ability_percents": {
            "Prankster": 1.0
        },
        "item_raw_count": {
            "Mental Herb": 29,
            "Covert Cloak": 47,
            "Focus Sash": 3,
            "Sky Plate": 1,
            "Rocky Helmet": 7,
            "Sitrus Berry": 12,
            "Wide Lens": 1,
            "Aguav Berry": 1,
            "Sharp Beak": 1
        },
        "item_percents": {
            "Mental Herb": 0.28431372549019607,
            "Covert Cloak": 0.46078431372549017,
            "Focus Sash": 0.029411764705882353,
            "Sky Plate": 0.00980392156862745,
            "Rocky Helmet": 0.06862745098039216,
            "Sitrus Berry": 0.11764705882352941,
            "Wide Lens": 0.00980392156862745,
            "Aguav Berry": 0.00980392156862745,
            "Sharp Beak": 0.00980392156862745
        }
    },
    "Volcarona": {
        "count": 14,
        "move_raw_count": {
            "Fiery Dance": 6,
            "Struggle Bug": 5,
            "Rage Powder": 4,
            "Protect": 11,
            "Giga Drain": 6,
            "Quiver Dance": 11,
            "Heat Wave": 6,
            "Bug Buzz": 3,
            "Will-O-Wisp": 2,
            "Flamethrower": 1,
            "Overheat": 1
        },
        "move_percents": {
            "Fiery Dance": 0.42857142857142855,
            "Struggle Bug": 0.35714285714285715,
            "Rage Powder": 0.2857142857142857,
            "Protect": 0.7857142857142857,
            "Giga Drain": 0.42857142857142855,
            "Quiver Dance": 0.7857142857142857,
            "Heat Wave": 0.42857142857142855,
            "Bug Buzz": 0.21428571428571427,
            "Will-O-Wisp": 0.14285714285714285,
            "Flamethrower": 0.07142857142857142,
            "Overheat": 0.07142857142857142
        },
        "ability_raw_count": {
            "Flame Body": 14
        },
        "ability_percents": {
            "Flame Body": 1.0
        },
        "item_raw_count": {
            "Rocky Helmet": 2,
            "Sitrus Berry": 4,
            "Lum Berry": 1,
            "Leftovers": 4,
            "Safety Goggles": 3
        },
        "item_percents": {
            "Rocky Helmet": 0.14285714285714285,
            "Sitrus Berry": 0.2857142857142857,
            "Lum Berry": 0.07142857142857142,
            "Leftovers": 0.2857142857142857,
            "Safety Goggles": 0.21428571428571427
        }
    },
    "Garganacl": {
        "count": 8,
        "move_raw_count": {
            "Salt Cure": 8,
            "Recover": 7,
            "Protect": 8,
            "Wide Guard": 6,
            "Body Press": 1,
            "Iron Defense": 2
        },
        "move_percents": {
            "Salt Cure": 1.0,
            "Recover": 0.875,
            "Protect": 1.0,
            "Wide Guard": 0.75,
            "Body Press": 0.125,
            "Iron Defense": 0.25
        },
        "ability_raw_count": {
            "Purifying Salt": 8
        },
        "ability_percents": {
            "Purifying Salt": 1.0
        },
        "item_raw_count": {
            "Leftovers": 8
        },
        "item_percents": {
            "Leftovers": 1.0
        }
    },
    "Zapdos": {
        "count": 17,
        "move_raw_count": {
            "Discharge": 1,
            "Tailwind": 9,
            "Heat Wave": 5,
            "Roost": 13,
            "Thunderbolt": 16,
            "Hurricane": 12,
            "Protect": 5,
            "Detect": 3,
            "Helping Hand": 1,
            "Volt Switch": 1,
            "Light Screen": 1,
            "Eerie Impulse": 1
        },
        "move_percents": {
            "Discharge": 0.058823529411764705,
            "Tailwind": 0.5294117647058824,
            "Heat Wave": 0.29411764705882354,
            "Roost": 0.7647058823529411,
            "Thunderbolt": 0.9411764705882353,
            "Hurricane": 0.7058823529411765,
            "Protect": 0.29411764705882354,
            "Detect": 0.17647058823529413,
            "Helping Hand": 0.058823529411764705,
            "Volt Switch": 0.058823529411764705,
            "Light Screen": 0.058823529411764705,
            "Eerie Impulse": 0.058823529411764705
        },
        "ability_raw_count": {
            "Static": 17
        },
        "ability_percents": {
            "Static": 1.0
        },
        "item_raw_count": {
            "Aguav Berry": 1,
            "Rocky Helmet": 4,
            "Safety Goggles": 3,
            "Sitrus Berry": 5,
            "Yache Berry": 1,
            "Grassy Seed": 1,
            "Life Orb": 2
        },
        "item_percents": {
            "Aguav Berry": 0.058823529411764705,
            "Rocky Helmet": 0.23529411764705882,
            "Safety Goggles": 0.17647058823529413,
            "Sitrus Berry": 0.29411764705882354,
            "Yache Berry": 0.058823529411764705,
            "Grassy Seed": 0.058823529411764705,
            "Life Orb": 0.11764705882352941
        }
    },
    "Thundurus-Therian": {
        "count": 6,
        "move_raw_count": {
            "Flash Cannon": 1,
            "Wildbolt Storm": 6,
            "Tera Blast": 4,
            "Protect": 3,
            "Volt Switch": 4,
            "Grass Knot": 2,
            "Dark Pulse": 1,
            "Nasty Plot": 1,
            "Snarl": 1,
            "Thunderbolt": 1
        },
        "move_percents": {
            "Flash Cannon": 0.16666666666666666,
            "Wildbolt Storm": 1.0,
            "Tera Blast": 0.6666666666666666,
            "Protect": 0.5,
            "Volt Switch": 0.6666666666666666,
            "Grass Knot": 0.3333333333333333,
            "Dark Pulse": 0.16666666666666666,
            "Nasty Plot": 0.16666666666666666,
            "Snarl": 0.16666666666666666,
            "Thunderbolt": 0.16666666666666666
        },
        "ability_raw_count": {
            "Volt Absorb": 6
        },
        "ability_percents": {
            "Volt Absorb": 1.0
        },
        "item_raw_count": {
            "Life Orb": 2,
            "Sitrus Berry": 1,
            "Choice Scarf": 1,
            "Choice Specs": 2
        },
        "item_percents": {
            "Life Orb": 0.3333333333333333,
            "Sitrus Berry": 0.16666666666666666,
            "Choice Scarf": 0.16666666666666666,
            "Choice Specs": 0.3333333333333333
        }
    },
    "Ursaluna": {
        "count": 58,
        "move_raw_count": {
            "Rock Slide": 3,
            "Drain Punch": 2,
            "Ice Punch": 3,
            "Headlong Rush": 29,
            "Protect": 55,
            "Facade": 56,
            "Earthquake": 38,
            "Crunch": 6,
            "Brick Break": 1,
            "Close Combat": 3,
            "Swords Dance": 15,
            "High Horsepower": 4,
            "Bulk Up": 6,
            "Shadow Claw": 3,
            "Stomping Tantrum": 1,
            "Heavy Slam": 2,
            "Substitute": 3,
            "Thunder Punch": 1,
            "Yawn": 1
        },
        "move_percents": {
            "Rock Slide": 0.05172413793103448,
            "Drain Punch": 0.034482758620689655,
            "Ice Punch": 0.05172413793103448,
            "Headlong Rush": 0.5,
            "Protect": 0.9482758620689655,
            "Facade": 0.9655172413793104,
            "Earthquake": 0.6551724137931034,
            "Crunch": 0.10344827586206896,
            "Brick Break": 0.017241379310344827,
            "Close Combat": 0.05172413793103448,
            "Swords Dance": 0.25862068965517243,
            "High Horsepower": 0.06896551724137931,
            "Bulk Up": 0.10344827586206896,
            "Shadow Claw": 0.05172413793103448,
            "Stomping Tantrum": 0.017241379310344827,
            "Heavy Slam": 0.034482758620689655,
            "Substitute": 0.05172413793103448,
            "Thunder Punch": 0.017241379310344827,
            "Yawn": 0.017241379310344827
        },
        "ability_raw_count": {
            "Guts": 58
        },
        "ability_percents": {
            "Guts": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 2,
            "Flame Orb": 56
        },
        "item_percents": {
            "Assault Vest": 0.034482758620689655,
            "Flame Orb": 0.9655172413793104
        }
    },
    "Arcanine": {
        "count": 13,
        "move_raw_count": {
            "Will-O-Wisp": 9,
            "Extreme Speed": 13,
            "Flare Blitz": 13,
            "Protect": 8,
            "Close Combat": 2,
            "Wild Charge": 2,
            "Snarl": 3,
            "Howl": 1,
            "Helping Hand": 1
        },
        "move_percents": {
            "Will-O-Wisp": 0.6923076923076923,
            "Extreme Speed": 1.0,
            "Flare Blitz": 1.0,
            "Protect": 0.6153846153846154,
            "Close Combat": 0.15384615384615385,
            "Wild Charge": 0.15384615384615385,
            "Snarl": 0.23076923076923078,
            "Howl": 0.07692307692307693,
            "Helping Hand": 0.07692307692307693
        },
        "ability_raw_count": {
            "Intimidate": 13
        },
        "ability_percents": {
            "Intimidate": 1.0
        },
        "item_raw_count": {
            "Safety Goggles": 10,
            "Assault Vest": 2,
            "Sitrus Berry": 1
        },
        "item_percents": {
            "Safety Goggles": 0.7692307692307693,
            "Assault Vest": 0.15384615384615385,
            "Sitrus Berry": 0.07692307692307693
        }
    },
    "Goodra-Hisui": {
        "count": 41,
        "move_raw_count": {
            "Tera Blast": 2,
            "Ice Beam": 2,
            "Draco Meteor": 3,
            "Protect": 26,
            "Body Press": 37,
            "Heavy Slam": 36,
            "Acid Armor": 15,
            "Surf": 1,
            "Flamethrower": 2,
            "Life Dew": 12,
            "Shelter": 22,
            "Flash Cannon": 3,
            "Thunderbolt": 1,
            "Tearful Look": 1,
            "Iron Head": 1
        },
        "move_percents": {
            "Tera Blast": 0.04878048780487805,
            "Ice Beam": 0.04878048780487805,
            "Draco Meteor": 0.07317073170731707,
            "Protect": 0.6341463414634146,
            "Body Press": 0.9024390243902439,
            "Heavy Slam": 0.8780487804878049,
            "Acid Armor": 0.36585365853658536,
            "Surf": 0.024390243902439025,
            "Flamethrower": 0.04878048780487805,
            "Life Dew": 0.2926829268292683,
            "Shelter": 0.5365853658536586,
            "Flash Cannon": 0.07317073170731707,
            "Thunderbolt": 0.024390243902439025,
            "Tearful Look": 0.024390243902439025,
            "Iron Head": 0.024390243902439025
        },
        "ability_raw_count": {
            "Shell Armor": 26,
            "Sap Sipper": 15
        },
        "ability_percents": {
            "Shell Armor": 0.6341463414634146,
            "Sap Sipper": 0.36585365853658536
        },
        "item_raw_count": {
            "Leftovers": 29,
            "Assault Vest": 1,
            "Rocky Helmet": 6,
            "Lum Berry": 1,
            "Mental Herb": 2,
            "Choice Specs": 1,
            "Life Orb": 1
        },
        "item_percents": {
            "Leftovers": 0.7073170731707317,
            "Assault Vest": 0.024390243902439025,
            "Rocky Helmet": 0.14634146341463414,
            "Lum Berry": 0.024390243902439025,
            "Mental Herb": 0.04878048780487805,
            "Choice Specs": 0.024390243902439025,
            "Life Orb": 0.024390243902439025
        }
    },
    "Gyarados": {
        "count": 22,
        "move_raw_count": {
            "Waterfall": 21,
            "Thunder Wave": 20,
            "Taunt": 21,
            "Icy Wind": 4,
            "Protect": 13,
            "Tera Blast": 1,
            "Dragon Tail": 3,
            "Aqua Tail": 1,
            "Dragon Dance": 1,
            "Hurricane": 1,
            "Helping Hand": 1,
            "Iron Head": 1
        },
        "move_percents": {
            "Waterfall": 0.9545454545454546,
            "Thunder Wave": 0.9090909090909091,
            "Taunt": 0.9545454545454546,
            "Icy Wind": 0.18181818181818182,
            "Protect": 0.5909090909090909,
            "Tera Blast": 0.045454545454545456,
            "Dragon Tail": 0.13636363636363635,
            "Aqua Tail": 0.045454545454545456,
            "Dragon Dance": 0.045454545454545456,
            "Hurricane": 0.045454545454545456,
            "Helping Hand": 0.045454545454545456,
            "Iron Head": 0.045454545454545456
        },
        "ability_raw_count": {
            "Intimidate": 22
        },
        "ability_percents": {
            "Intimidate": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 6,
            "Rocky Helmet": 11,
            "Safety Goggles": 2,
            "Figy Berry": 2,
            "Leftovers": 1
        },
        "item_percents": {
            "Sitrus Berry": 0.2727272727272727,
            "Rocky Helmet": 0.5,
            "Safety Goggles": 0.09090909090909091,
            "Figy Berry": 0.09090909090909091,
            "Leftovers": 0.045454545454545456
        }
    },
    "Rillaboom": {
        "count": 83,
        "move_raw_count": {
            "Fake Out": 82,
            "Wood Hammer": 68,
            "Knock Off": 51,
            "U-turn": 73,
            "Bullet Seed": 1,
            "Stomping Tantrum": 23,
            "Protect": 6,
            "Drum Beating": 18,
            "Taunt": 3,
            "Acrobatics": 1,
            "Hammer Arm": 1,
            "Brick Break": 1,
            "Drain Punch": 2,
            "Swords Dance": 1,
            "Leech Seed": 1
        },
        "move_percents": {
            "Fake Out": 0.9879518072289156,
            "Wood Hammer": 0.8192771084337349,
            "Knock Off": 0.6144578313253012,
            "U-turn": 0.8795180722891566,
            "Bullet Seed": 0.012048192771084338,
            "Stomping Tantrum": 0.27710843373493976,
            "Protect": 0.07228915662650602,
            "Drum Beating": 0.21686746987951808,
            "Taunt": 0.03614457831325301,
            "Acrobatics": 0.012048192771084338,
            "Hammer Arm": 0.012048192771084338,
            "Brick Break": 0.012048192771084338,
            "Drain Punch": 0.024096385542168676,
            "Swords Dance": 0.012048192771084338,
            "Leech Seed": 0.012048192771084338
        },
        "ability_raw_count": {
            "Grassy Surge": 82,
            "Overgrow": 1
        },
        "ability_percents": {
            "Grassy Surge": 0.9879518072289156,
            "Overgrow": 0.012048192771084338
        },
        "item_raw_count": {
            "Assault Vest": 70,
            "Loaded Dice": 1,
            "Sitrus Berry": 4,
            "Grassy Seed": 3,
            "Miracle Seed": 2,
            "Meadow Plate": 1,
            "Leftovers": 1,
            "Choice Scarf": 1
        },
        "item_percents": {
            "Assault Vest": 0.8433734939759037,
            "Loaded Dice": 0.012048192771084338,
            "Sitrus Berry": 0.04819277108433735,
            "Grassy Seed": 0.03614457831325301,
            "Miracle Seed": 0.024096385542168676,
            "Meadow Plate": 0.012048192771084338,
            "Leftovers": 0.012048192771084338,
            "Choice Scarf": 0.012048192771084338
        }
    },
    "Arcanine-Hisui": {
        "count": 41,
        "move_raw_count": {
            "Protect": 19,
            "Rock Slide": 39,
            "Extreme Speed": 38,
            "Flare Blitz": 41,
            "Bulldoze": 9,
            "Tera Blast": 4,
            "Head Smash": 7,
            "Snarl": 1,
            "Will-O-Wisp": 4,
            "Wild Charge": 2
        },
        "move_percents": {
            "Protect": 0.4634146341463415,
            "Rock Slide": 0.9512195121951219,
            "Extreme Speed": 0.926829268292683,
            "Flare Blitz": 1.0,
            "Bulldoze": 0.21951219512195122,
            "Tera Blast": 0.0975609756097561,
            "Head Smash": 0.17073170731707318,
            "Snarl": 0.024390243902439025,
            "Will-O-Wisp": 0.0975609756097561,
            "Wild Charge": 0.04878048780487805
        },
        "ability_raw_count": {
            "Intimidate": 37,
            "Rock Head": 4
        },
        "ability_percents": {
            "Intimidate": 0.9024390243902439,
            "Rock Head": 0.0975609756097561
        },
        "item_raw_count": {
            "Safety Goggles": 13,
            "Assault Vest": 18,
            "Aguav Berry": 2,
            "Sitrus Berry": 3,
            "Clear Amulet": 3,
            "Choice Band": 1,
            "Rocky Helmet": 1
        },
        "item_percents": {
            "Safety Goggles": 0.3170731707317073,
            "Assault Vest": 0.43902439024390244,
            "Aguav Berry": 0.04878048780487805,
            "Sitrus Berry": 0.07317073170731707,
            "Clear Amulet": 0.07317073170731707,
            "Choice Band": 0.024390243902439025,
            "Rocky Helmet": 0.024390243902439025
        }
    },
    "Indeedee-F": {
        "count": 34,
        "move_raw_count": {
            "Follow Me": 33,
            "Dazzling Gleam": 23,
            "Imprison": 5,
            "Trick Room": 30,
            "Helping Hand": 23,
            "Protect": 6,
            "Psychic": 13,
            "Skill Swap": 1,
            "Heal Pulse": 2
        },
        "move_percents": {
            "Follow Me": 0.9705882352941176,
            "Dazzling Gleam": 0.6764705882352942,
            "Imprison": 0.14705882352941177,
            "Trick Room": 0.8823529411764706,
            "Helping Hand": 0.6764705882352942,
            "Protect": 0.17647058823529413,
            "Psychic": 0.38235294117647056,
            "Skill Swap": 0.029411764705882353,
            "Heal Pulse": 0.058823529411764705
        },
        "ability_raw_count": {
            "Psychic Surge": 34
        },
        "ability_percents": {
            "Psychic Surge": 1.0
        },
        "item_raw_count": {
            "Rocky Helmet": 19,
            "Sitrus Berry": 1,
            "Psychic Seed": 9,
            "Focus Sash": 2,
            "Colbur Berry": 1,
            "Red Card": 1,
            "Eject Button": 1
        },
        "item_percents": {
            "Rocky Helmet": 0.5588235294117647,
            "Sitrus Berry": 0.029411764705882353,
            "Psychic Seed": 0.2647058823529412,
            "Focus Sash": 0.058823529411764705,
            "Colbur Berry": 0.029411764705882353,
            "Red Card": 0.029411764705882353,
            "Eject Button": 0.029411764705882353
        }
    },
    "Regidrago": {
        "count": 11,
        "move_raw_count": {
            "Earth Power": 5,
            "Dragon Energy": 11,
            "Tera Blast": 7,
            "Protect": 10,
            "Draco Meteor": 6,
            "Dragon Pulse": 5
        },
        "move_percents": {
            "Earth Power": 0.45454545454545453,
            "Dragon Energy": 1.0,
            "Tera Blast": 0.6363636363636364,
            "Protect": 0.9090909090909091,
            "Draco Meteor": 0.5454545454545454,
            "Dragon Pulse": 0.45454545454545453
        },
        "ability_raw_count": {
            "Dragon's Maw": 11
        },
        "ability_percents": {
            "Dragon's Maw": 1.0
        },
        "item_raw_count": {
            "Dragon Fang": 9,
            "Draco Plate": 1,
            "Choice Specs": 1
        },
        "item_percents": {
            "Dragon Fang": 0.8181818181818182,
            "Draco Plate": 0.09090909090909091,
            "Choice Specs": 0.09090909090909091
        }
    },
    "Urshifu": {
        "count": 37,
        "move_raw_count": {
            "Close Combat": 36,
            "Sucker Punch": 35,
            "Wicked Blow": 37,
            "Detect": 16,
            "Poison Jab": 2,
            "Brick Break": 1,
            "U-turn": 11,
            "Protect": 5,
            "Fire Punch": 1,
            "Drain Punch": 1,
            "Ice Punch": 1,
            "Tera Blast": 1,
            "Iron Head": 1
        },
        "move_percents": {
            "Close Combat": 0.972972972972973,
            "Sucker Punch": 0.9459459459459459,
            "Wicked Blow": 1.0,
            "Detect": 0.43243243243243246,
            "Poison Jab": 0.05405405405405406,
            "Brick Break": 0.02702702702702703,
            "U-turn": 0.2972972972972973,
            "Protect": 0.13513513513513514,
            "Fire Punch": 0.02702702702702703,
            "Drain Punch": 0.02702702702702703,
            "Ice Punch": 0.02702702702702703,
            "Tera Blast": 0.02702702702702703,
            "Iron Head": 0.02702702702702703
        },
        "ability_raw_count": {
            "Unseen Fist": 37
        },
        "ability_percents": {
            "Unseen Fist": 1.0
        },
        "item_raw_count": {
            "Life Orb": 1,
            "Choice Band": 11,
            "Room Service": 1,
            "Focus Sash": 13,
            "Safety Goggles": 1,
            "Power Belt": 1,
            "Black Glasses": 4,
            "Assault Vest": 1,
            "Choice Scarf": 4
        },
        "item_percents": {
            "Life Orb": 0.02702702702702703,
            "Choice Band": 0.2972972972972973,
            "Room Service": 0.02702702702702703,
            "Focus Sash": 0.35135135135135137,
            "Safety Goggles": 0.02702702702702703,
            "Power Belt": 0.02702702702702703,
            "Black Glasses": 0.10810810810810811,
            "Assault Vest": 0.02702702702702703,
            "Choice Scarf": 0.10810810810810811
        }
    },
    "Iron Bundle": {
        "count": 23,
        "move_raw_count": {
            "Protect": 23,
            "Icy Wind": 20,
            "Encore": 9,
            "Freeze-Dry": 23,
            "Hydro Pump": 14,
            "Blizzard": 2,
            "Aurora Veil": 1
        },
        "move_percents": {
            "Protect": 1.0,
            "Icy Wind": 0.8695652173913043,
            "Encore": 0.391304347826087,
            "Freeze-Dry": 1.0,
            "Hydro Pump": 0.6086956521739131,
            "Blizzard": 0.08695652173913043,
            "Aurora Veil": 0.043478260869565216
        },
        "ability_raw_count": {
            "Quark Drive": 23
        },
        "ability_percents": {
            "Quark Drive": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 5,
            "Booster Energy": 18
        },
        "item_percents": {
            "Focus Sash": 0.21739130434782608,
            "Booster Energy": 0.782608695652174
        }
    },
    "Iron Jugulis": {
        "count": 2,
        "move_raw_count": {
            "Tailwind": 2,
            "Air Slash": 2,
            "Snarl": 2,
            "Protect": 2
        },
        "move_percents": {
            "Tailwind": 1.0,
            "Air Slash": 1.0,
            "Snarl": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Quark Drive": 2
        },
        "ability_percents": {
            "Quark Drive": 1.0
        },
        "item_raw_count": {
            "Booster Energy": 2
        },
        "item_percents": {
            "Booster Energy": 1.0
        }
    },
    "Armarouge": {
        "count": 22,
        "move_raw_count": {
            "Expanding Force": 21,
            "Heat Wave": 11,
            "Trick Room": 22,
            "Protect": 9,
            "Aura Sphere": 2,
            "Armor Cannon": 14,
            "Energy Ball": 4,
            "Tera Blast": 1,
            "Wide Guard": 4
        },
        "move_percents": {
            "Expanding Force": 0.9545454545454546,
            "Heat Wave": 0.5,
            "Trick Room": 1.0,
            "Protect": 0.4090909090909091,
            "Aura Sphere": 0.09090909090909091,
            "Armor Cannon": 0.6363636363636364,
            "Energy Ball": 0.18181818181818182,
            "Tera Blast": 0.045454545454545456,
            "Wide Guard": 0.18181818181818182
        },
        "ability_raw_count": {
            "Flash Fire": 22
        },
        "ability_percents": {
            "Flash Fire": 1.0
        },
        "item_raw_count": {
            "Twisted Spoon": 6,
            "Life Orb": 14,
            "Yache Berry": 1,
            "Mind Plate": 1
        },
        "item_percents": {
            "Twisted Spoon": 0.2727272727272727,
            "Life Orb": 0.6363636363636364,
            "Yache Berry": 0.045454545454545456,
            "Mind Plate": 0.045454545454545456
        }
    },
    "Torkoal": {
        "count": 17,
        "move_raw_count": {
            "Eruption": 14,
            "Flamethrower": 6,
            "Earth Power": 12,
            "Clear Smog": 9,
            "Overheat": 5,
            "Yawn": 2,
            "Helping Hand": 5,
            "Protect": 6,
            "Heat Wave": 5,
            "Solar Beam": 2,
            "Fissure": 2
        },
        "move_percents": {
            "Eruption": 0.8235294117647058,
            "Flamethrower": 0.35294117647058826,
            "Earth Power": 0.7058823529411765,
            "Clear Smog": 0.5294117647058824,
            "Overheat": 0.29411764705882354,
            "Yawn": 0.11764705882352941,
            "Helping Hand": 0.29411764705882354,
            "Protect": 0.35294117647058826,
            "Heat Wave": 0.29411764705882354,
            "Solar Beam": 0.11764705882352941,
            "Fissure": 0.11764705882352941
        },
        "ability_raw_count": {
            "Drought": 17
        },
        "ability_percents": {
            "Drought": 1.0
        },
        "item_raw_count": {
            "Charcoal": 6,
            "Heat Rock": 2,
            "Choice Specs": 3,
            "Assault Vest": 1,
            "Eject Pack": 4,
            "Flame Plate": 1
        },
        "item_percents": {
            "Charcoal": 0.35294117647058826,
            "Heat Rock": 0.11764705882352941,
            "Choice Specs": 0.17647058823529413,
            "Assault Vest": 0.058823529411764705,
            "Eject Pack": 0.23529411764705882,
            "Flame Plate": 0.058823529411764705
        }
    },
    "Lilligant-Hisui": {
        "count": 13,
        "move_raw_count": {
            "Solar Blade": 6,
            "Close Combat": 11,
            "Sleep Powder": 13,
            "After You": 9,
            "Leaf Blade": 8,
            "Protect": 4,
            "Axe Kick": 1
        },
        "move_percents": {
            "Solar Blade": 0.46153846153846156,
            "Close Combat": 0.8461538461538461,
            "Sleep Powder": 1.0,
            "After You": 0.6923076923076923,
            "Leaf Blade": 0.6153846153846154,
            "Protect": 0.3076923076923077,
            "Axe Kick": 0.07692307692307693
        },
        "ability_raw_count": {
            "Chlorophyll": 13
        },
        "ability_percents": {
            "Chlorophyll": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 10,
            "Wide Lens": 2,
            "Bright Powder": 1
        },
        "item_percents": {
            "Focus Sash": 0.7692307692307693,
            "Wide Lens": 0.15384615384615385,
            "Bright Powder": 0.07692307692307693
        }
    },
    "Hatterene": {
        "count": 10,
        "move_raw_count": {
            "Psychic": 7,
            "Dazzling Gleam": 9,
            "Trick Room": 10,
            "Protect": 7,
            "Psyshock": 3,
            "Skill Swap": 1,
            "Life Dew": 1,
            "Mystical Fire": 1,
            "Tera Blast": 1
        },
        "move_percents": {
            "Psychic": 0.7,
            "Dazzling Gleam": 0.9,
            "Trick Room": 1.0,
            "Protect": 0.7,
            "Psyshock": 0.3,
            "Skill Swap": 0.1,
            "Life Dew": 0.1,
            "Mystical Fire": 0.1,
            "Tera Blast": 0.1
        },
        "ability_raw_count": {
            "Magic Bounce": 10
        },
        "ability_percents": {
            "Magic Bounce": 1.0
        },
        "item_raw_count": {
            "Life Orb": 6,
            "Pixie Plate": 1,
            "Covert Cloak": 3
        },
        "item_percents": {
            "Life Orb": 0.6,
            "Pixie Plate": 0.1,
            "Covert Cloak": 0.3
        }
    },
    "Kingambit": {
        "count": 11,
        "move_raw_count": {
            "Kowtow Cleave": 8,
            "Iron Head": 8,
            "Brick Break": 1,
            "Tera Blast": 5,
            "Assurance": 3,
            "Sucker Punch": 10,
            "Protect": 4,
            "Swords Dance": 4,
            "Low Kick": 1
        },
        "move_percents": {
            "Kowtow Cleave": 0.7272727272727273,
            "Iron Head": 0.7272727272727273,
            "Brick Break": 0.09090909090909091,
            "Tera Blast": 0.45454545454545453,
            "Assurance": 0.2727272727272727,
            "Sucker Punch": 0.9090909090909091,
            "Protect": 0.36363636363636365,
            "Swords Dance": 0.36363636363636365,
            "Low Kick": 0.09090909090909091
        },
        "ability_raw_count": {
            "Defiant": 11
        },
        "ability_percents": {
            "Defiant": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 6,
            "Black Glasses": 3,
            "Lum Berry": 1,
            "Safety Goggles": 1
        },
        "item_percents": {
            "Assault Vest": 0.5454545454545454,
            "Black Glasses": 0.2727272727272727,
            "Lum Berry": 0.09090909090909091,
            "Safety Goggles": 0.09090909090909091
        }
    },
    "Kleavor": {
        "count": 16,
        "move_raw_count": {
            "Quick Guard": 11,
            "Feint": 10,
            "Stone Axe": 16,
            "X-Scissor": 15,
            "Close Combat": 4,
            "Tera Blast": 2,
            "U-turn": 2,
            "Tailwind": 2,
            "Trailblaze": 1,
            "Protect": 1
        },
        "move_percents": {
            "Quick Guard": 0.6875,
            "Feint": 0.625,
            "Stone Axe": 1.0,
            "X-Scissor": 0.9375,
            "Close Combat": 0.25,
            "Tera Blast": 0.125,
            "U-turn": 0.125,
            "Tailwind": 0.125,
            "Trailblaze": 0.0625,
            "Protect": 0.0625
        },
        "ability_raw_count": {
            "Sharpness": 16
        },
        "ability_percents": {
            "Sharpness": 1.0
        },
        "item_raw_count": {
            "Rocky Helmet": 10,
            "Choice Scarf": 3,
            "Sitrus Berry": 1,
            "Assault Vest": 1,
            "Babiri Berry": 1
        },
        "item_percents": {
            "Rocky Helmet": 0.625,
            "Choice Scarf": 0.1875,
            "Sitrus Berry": 0.0625,
            "Assault Vest": 0.0625,
            "Babiri Berry": 0.0625
        }
    },
    "Thundurus": {
        "count": 47,
        "move_raw_count": {
            "Thunder Wave": 42,
            "Taunt": 41,
            "Wildbolt Storm": 24,
            "Eerie Impulse": 34,
            "Scary Face": 4,
            "Sunny Day": 5,
            "Thunderbolt": 23,
            "Leer": 2,
            "Rain Dance": 9,
            "Protect": 2,
            "Swagger": 1,
            "Foul Play": 1
        },
        "move_percents": {
            "Thunder Wave": 0.8936170212765957,
            "Taunt": 0.8723404255319149,
            "Wildbolt Storm": 0.5106382978723404,
            "Eerie Impulse": 0.723404255319149,
            "Scary Face": 0.0851063829787234,
            "Sunny Day": 0.10638297872340426,
            "Thunderbolt": 0.48936170212765956,
            "Leer": 0.0425531914893617,
            "Rain Dance": 0.19148936170212766,
            "Protect": 0.0425531914893617,
            "Swagger": 0.02127659574468085,
            "Foul Play": 0.02127659574468085
        },
        "ability_raw_count": {
            "Prankster": 47
        },
        "ability_percents": {
            "Prankster": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 24,
            "Covert Cloak": 8,
            "Wiki Berry": 1,
            "Safety Goggles": 7,
            "Mental Herb": 5,
            "Wide Lens": 2
        },
        "item_percents": {
            "Sitrus Berry": 0.5106382978723404,
            "Covert Cloak": 0.1702127659574468,
            "Wiki Berry": 0.02127659574468085,
            "Safety Goggles": 0.14893617021276595,
            "Mental Herb": 0.10638297872340426,
            "Wide Lens": 0.0425531914893617
        }
    },
    "Tatsugiri-Stretchy": {
        "count": 2,
        "move_raw_count": {
            "Draco Meteor": 2,
            "Dragon Pulse": 1,
            "Muddy Water": 2,
            "Icy Wind": 2,
            "Tera Blast": 1
        },
        "move_percents": {
            "Draco Meteor": 1.0,
            "Dragon Pulse": 0.5,
            "Muddy Water": 1.0,
            "Icy Wind": 1.0,
            "Tera Blast": 0.5
        },
        "ability_raw_count": {
            "Commander": 2
        },
        "ability_percents": {
            "Commander": 1.0
        },
        "item_raw_count": {
            "Choice Scarf": 2
        },
        "item_percents": {
            "Choice Scarf": 1.0
        }
    },
    "Overqwil": {
        "count": 2,
        "move_raw_count": {
            "Barb Barrage": 1,
            "Liquidation": 2,
            "Crunch": 1,
            "Gunk Shot": 2,
            "Self-Destruct": 1,
            "Aqua Jet": 1
        },
        "move_percents": {
            "Barb Barrage": 0.5,
            "Liquidation": 1.0,
            "Crunch": 0.5,
            "Gunk Shot": 1.0,
            "Self-Destruct": 0.5,
            "Aqua Jet": 0.5
        },
        "ability_raw_count": {
            "Swift Swim": 2
        },
        "ability_percents": {
            "Swift Swim": 1.0
        },
        "item_raw_count": {
            "Choice Band": 2
        },
        "item_percents": {
            "Choice Band": 1.0
        }
    },
    "Typhlosion-Hisui": {
        "count": 1,
        "move_raw_count": {
            "Eruption": 1,
            "Shadow Ball": 1,
            "Heat Wave": 1,
            "Overheat": 1
        },
        "move_percents": {
            "Eruption": 1.0,
            "Shadow Ball": 1.0,
            "Heat Wave": 1.0,
            "Overheat": 1.0
        },
        "ability_raw_count": {
            "Blaze": 1
        },
        "ability_percents": {
            "Blaze": 1.0
        },
        "item_raw_count": {
            "Choice Scarf": 1
        },
        "item_percents": {
            "Choice Scarf": 1.0
        }
    },
    "Gastrodon-East": {
        "count": 11,
        "move_raw_count": {
            "Protect": 10,
            "Earth Power": 11,
            "Yawn": 9,
            "Ice Beam": 10,
            "Recover": 3,
            "Muddy Water": 1
        },
        "move_percents": {
            "Protect": 0.9090909090909091,
            "Earth Power": 1.0,
            "Yawn": 0.8181818181818182,
            "Ice Beam": 0.9090909090909091,
            "Recover": 0.2727272727272727,
            "Muddy Water": 0.09090909090909091
        },
        "ability_raw_count": {
            "Storm Drain": 11
        },
        "ability_percents": {
            "Storm Drain": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 4,
            "Leftovers": 6,
            "Aguav Berry": 1
        },
        "item_percents": {
            "Sitrus Berry": 0.36363636363636365,
            "Leftovers": 0.5454545454545454,
            "Aguav Berry": 0.09090909090909091
        }
    },
    "Grimmsnarl": {
        "count": 45,
        "move_raw_count": {
            "Light Screen": 44,
            "Reflect": 41,
            "Fake Out": 3,
            "Spirit Break": 45,
            "Parting Shot": 24,
            "Misty Terrain": 1,
            "Thunder Wave": 15,
            "Taunt": 4,
            "Trick": 1,
            "Sucker Punch": 1,
            "Fake Tears": 1
        },
        "move_percents": {
            "Light Screen": 0.9777777777777777,
            "Reflect": 0.9111111111111111,
            "Fake Out": 0.06666666666666667,
            "Spirit Break": 1.0,
            "Parting Shot": 0.5333333333333333,
            "Misty Terrain": 0.022222222222222223,
            "Thunder Wave": 0.3333333333333333,
            "Taunt": 0.08888888888888889,
            "Trick": 0.022222222222222223,
            "Sucker Punch": 0.022222222222222223,
            "Fake Tears": 0.022222222222222223
        },
        "ability_raw_count": {
            "Prankster": 45
        },
        "ability_percents": {
            "Prankster": 1.0
        },
        "item_raw_count": {
            "Light Clay": 40,
            "Roseli Berry": 2,
            "Covert Cloak": 2,
            "Sitrus Berry": 1
        },
        "item_percents": {
            "Light Clay": 0.8888888888888888,
            "Roseli Berry": 0.044444444444444446,
            "Covert Cloak": 0.044444444444444446,
            "Sitrus Berry": 0.022222222222222223
        }
    },
    "Moltres-Galar": {
        "count": 18,
        "move_raw_count": {
            "Fiery Wrath": 18,
            "Air Slash": 17,
            "Nasty Plot": 11,
            "Taunt": 2,
            "Protect": 11,
            "Tailwind": 7,
            "Hurricane": 1,
            "Sucker Punch": 3,
            "Snarl": 1,
            "Tera Blast": 1
        },
        "move_percents": {
            "Fiery Wrath": 1.0,
            "Air Slash": 0.9444444444444444,
            "Nasty Plot": 0.6111111111111112,
            "Taunt": 0.1111111111111111,
            "Protect": 0.6111111111111112,
            "Tailwind": 0.3888888888888889,
            "Hurricane": 0.05555555555555555,
            "Sucker Punch": 0.16666666666666666,
            "Snarl": 0.05555555555555555,
            "Tera Blast": 0.05555555555555555
        },
        "ability_raw_count": {
            "Berserk": 18
        },
        "ability_percents": {
            "Berserk": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 16,
            "Assault Vest": 1,
            "Leftovers": 1
        },
        "item_percents": {
            "Sitrus Berry": 0.8888888888888888,
            "Assault Vest": 0.05555555555555555,
            "Leftovers": 0.05555555555555555
        }
    },
    "Articuno-Galar": {
        "count": 5,
        "move_raw_count": {
            "Freezing Glare": 5,
            "Air Slash": 4,
            "Trick Room": 5,
            "Protect": 4,
            "Recover": 1,
            "Imprison": 1
        },
        "move_percents": {
            "Freezing Glare": 1.0,
            "Air Slash": 0.8,
            "Trick Room": 1.0,
            "Protect": 0.8,
            "Recover": 0.2,
            "Imprison": 0.2
        },
        "ability_raw_count": {
            "Competitive": 5
        },
        "ability_percents": {
            "Competitive": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 3,
            "Safety Goggles": 1,
            "Focus Sash": 1
        },
        "item_percents": {
            "Sitrus Berry": 0.6,
            "Safety Goggles": 0.2,
            "Focus Sash": 0.2
        }
    },
    "Frosmoth": {
        "count": 1,
        "move_raw_count": {
            "Ice Beam": 1,
            "Bug Buzz": 1,
            "Helping Hand": 1,
            "Protect": 1
        },
        "move_percents": {
            "Ice Beam": 1.0,
            "Bug Buzz": 1.0,
            "Helping Hand": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Ice Scales": 1
        },
        "ability_percents": {
            "Ice Scales": 1.0
        },
        "item_raw_count": {
            "Life Orb": 1
        },
        "item_percents": {
            "Life Orb": 1.0
        }
    },
    "Farigiraf": {
        "count": 12,
        "move_raw_count": {
            "Protect": 5,
            "Dazzling Gleam": 9,
            "Psychic": 9,
            "Trick Room": 11,
            "Hyper Voice": 5,
            "Nasty Plot": 3,
            "Imprison": 1,
            "Psyshock": 1,
            "Twin Beam": 1,
            "Beat Up": 2,
            "Uproar": 1
        },
        "move_percents": {
            "Protect": 0.4166666666666667,
            "Dazzling Gleam": 0.75,
            "Psychic": 0.75,
            "Trick Room": 0.9166666666666666,
            "Hyper Voice": 0.4166666666666667,
            "Nasty Plot": 0.25,
            "Imprison": 0.08333333333333333,
            "Psyshock": 0.08333333333333333,
            "Twin Beam": 0.08333333333333333,
            "Beat Up": 0.16666666666666666,
            "Uproar": 0.08333333333333333
        },
        "ability_raw_count": {
            "Armor Tail": 12
        },
        "ability_percents": {
            "Armor Tail": 1.0
        },
        "item_raw_count": {
            "Safety Goggles": 6,
            "Grassy Seed": 1,
            "Rocky Helmet": 3,
            "Sitrus Berry": 1,
            "Throat Spray": 1
        },
        "item_percents": {
            "Safety Goggles": 0.5,
            "Grassy Seed": 0.08333333333333333,
            "Rocky Helmet": 0.25,
            "Sitrus Berry": 0.08333333333333333,
            "Throat Spray": 0.08333333333333333
        }
    },
    "Palafin-Hero": {
        "count": 2,
        "move_raw_count": {
            "Tera Blast": 1,
            "Jet Punch": 2,
            "Wave Crash": 2,
            "Close Combat": 1,
            "Ice Punch": 1,
            "Protect": 1
        },
        "move_percents": {
            "Tera Blast": 0.5,
            "Jet Punch": 1.0,
            "Wave Crash": 1.0,
            "Close Combat": 0.5,
            "Ice Punch": 0.5,
            "Protect": 0.5
        },
        "ability_raw_count": {
            "Zero to Hero": 2
        },
        "ability_percents": {
            "Zero to Hero": 1.0
        },
        "item_raw_count": {
            "Choice Band": 1,
            "Safety Goggles": 1
        },
        "item_percents": {
            "Choice Band": 0.5,
            "Safety Goggles": 0.5
        }
    },
    "Chesnaught": {
        "count": 3,
        "move_raw_count": {
            "Body Press": 3,
            "Iron Defense": 3,
            "Leech Seed": 3,
            "Spiky Shield": 3
        },
        "move_percents": {
            "Body Press": 1.0,
            "Iron Defense": 1.0,
            "Leech Seed": 1.0,
            "Spiky Shield": 1.0
        },
        "ability_raw_count": {
            "Bulletproof": 3
        },
        "ability_percents": {
            "Bulletproof": 1.0
        },
        "item_raw_count": {
            "Leftovers": 3
        },
        "item_percents": {
            "Leftovers": 1.0
        }
    },
    "Dragapult": {
        "count": 7,
        "move_raw_count": {
            "Dragon Darts": 7,
            "Tera Blast": 7,
            "U-turn": 4,
            "Phantom Force": 7,
            "Outrage": 2,
            "Protect": 1
        },
        "move_percents": {
            "Dragon Darts": 1.0,
            "Tera Blast": 1.0,
            "U-turn": 0.5714285714285714,
            "Phantom Force": 1.0,
            "Outrage": 0.2857142857142857,
            "Protect": 0.14285714285714285
        },
        "ability_raw_count": {
            "Clear Body": 7
        },
        "ability_percents": {
            "Clear Body": 1.0
        },
        "item_raw_count": {
            "Choice Band": 6,
            "Life Orb": 1
        },
        "item_percents": {
            "Choice Band": 0.8571428571428571,
            "Life Orb": 0.14285714285714285
        }
    },
    "Tsareena": {
        "count": 2,
        "move_raw_count": {
            "Power Whip": 1,
            "High Jump Kick": 2,
            "Helping Hand": 1,
            "Protect": 1,
            "Seed Bomb": 1,
            "Play Rough": 1,
            "U-turn": 1
        },
        "move_percents": {
            "Power Whip": 0.5,
            "High Jump Kick": 1.0,
            "Helping Hand": 0.5,
            "Protect": 0.5,
            "Seed Bomb": 0.5,
            "Play Rough": 0.5,
            "U-turn": 0.5
        },
        "ability_raw_count": {
            "Queenly Majesty": 2
        },
        "ability_percents": {
            "Queenly Majesty": 1.0
        },
        "item_raw_count": {
            "Wide Lens": 1,
            "Choice Band": 1
        },
        "item_percents": {
            "Wide Lens": 0.5,
            "Choice Band": 0.5
        }
    },
    "Gastrodon": {
        "count": 5,
        "move_raw_count": {
            "Ice Beam": 4,
            "Earth Power": 5,
            "Yawn": 2,
            "Protect": 5,
            "Clear Smog": 1,
            "Icy Wind": 1,
            "Muddy Water": 1,
            "Acid Armor": 1
        },
        "move_percents": {
            "Ice Beam": 0.8,
            "Earth Power": 1.0,
            "Yawn": 0.4,
            "Protect": 1.0,
            "Clear Smog": 0.2,
            "Icy Wind": 0.2,
            "Muddy Water": 0.2,
            "Acid Armor": 0.2
        },
        "ability_raw_count": {
            "Storm Drain": 5
        },
        "ability_percents": {
            "Storm Drain": 1.0
        },
        "item_raw_count": {
            "Aguav Berry": 1,
            "Rocky Helmet": 1,
            "Safety Goggles": 1,
            "Sitrus Berry": 2
        },
        "item_percents": {
            "Aguav Berry": 0.2,
            "Rocky Helmet": 0.2,
            "Safety Goggles": 0.2,
            "Sitrus Berry": 0.4
        }
    },
    "Ting-Lu": {
        "count": 10,
        "move_raw_count": {
            "Taunt": 3,
            "Stomping Tantrum": 5,
            "Rock Tomb": 2,
            "Heavy Slam": 7,
            "Protect": 8,
            "Snarl": 2,
            "Ruination": 6,
            "Sand Tomb": 1,
            "Earthquake": 3,
            "Payback": 1,
            "Body Press": 1,
            "Stealth Rock": 1
        },
        "move_percents": {
            "Taunt": 0.3,
            "Stomping Tantrum": 0.5,
            "Rock Tomb": 0.2,
            "Heavy Slam": 0.7,
            "Protect": 0.8,
            "Snarl": 0.2,
            "Ruination": 0.6,
            "Sand Tomb": 0.1,
            "Earthquake": 0.3,
            "Payback": 0.1,
            "Body Press": 0.1,
            "Stealth Rock": 0.1
        },
        "ability_raw_count": {
            "Vessel of Ruin": 10
        },
        "ability_percents": {
            "Vessel of Ruin": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 5,
            "Leftovers": 3,
            "Assault Vest": 1,
            "Rocky Helmet": 1
        },
        "item_percents": {
            "Sitrus Berry": 0.5,
            "Leftovers": 0.3,
            "Assault Vest": 0.1,
            "Rocky Helmet": 0.1
        }
    },
    "Sylveon": {
        "count": 1,
        "move_raw_count": {
            "Hyper Voice": 1,
            "Tera Blast": 1,
            "Quick Attack": 1,
            "Psychic": 1
        },
        "move_percents": {
            "Hyper Voice": 1.0,
            "Tera Blast": 1.0,
            "Quick Attack": 1.0,
            "Psychic": 1.0
        },
        "ability_raw_count": {
            "Pixilate": 1
        },
        "ability_percents": {
            "Pixilate": 1.0
        },
        "item_raw_count": {
            "Choice Specs": 1
        },
        "item_percents": {
            "Choice Specs": 1.0
        }
    },
    "Spectrier": {
        "count": 4,
        "move_raw_count": {
            "Hex": 2,
            "Snarl": 3,
            "Will-O-Wisp": 4,
            "Taunt": 3,
            "Shadow Ball": 2,
            "Protect": 1,
            "Draining Kiss": 1
        },
        "move_percents": {
            "Hex": 0.5,
            "Snarl": 0.75,
            "Will-O-Wisp": 1.0,
            "Taunt": 0.75,
            "Shadow Ball": 0.5,
            "Protect": 0.25,
            "Draining Kiss": 0.25
        },
        "ability_raw_count": {
            "Grim Neigh": 4
        },
        "ability_percents": {
            "Grim Neigh": 1.0
        },
        "item_raw_count": {
            "Mago Berry": 1,
            "Sitrus Berry": 2,
            "Focus Sash": 1
        },
        "item_percents": {
            "Mago Berry": 0.25,
            "Sitrus Berry": 0.5,
            "Focus Sash": 0.25
        }
    },
    "Azumarill": {
        "count": 8,
        "move_raw_count": {
            "Play Rough": 7,
            "Liquidation": 6,
            "Ice Spinner": 4,
            "Aqua Jet": 6,
            "Belly Drum": 1,
            "Protect": 3,
            "Brick Break": 1,
            "Icy Wind": 1,
            "Encore": 1,
            "Perish Song": 1,
            "Sing": 1
        },
        "move_percents": {
            "Play Rough": 0.875,
            "Liquidation": 0.75,
            "Ice Spinner": 0.5,
            "Aqua Jet": 0.75,
            "Belly Drum": 0.125,
            "Protect": 0.375,
            "Brick Break": 0.125,
            "Icy Wind": 0.125,
            "Encore": 0.125,
            "Perish Song": 0.125,
            "Sing": 0.125
        },
        "ability_raw_count": {
            "Huge Power": 7,
            "Sap Sipper": 1
        },
        "ability_percents": {
            "Huge Power": 0.875,
            "Sap Sipper": 0.125
        },
        "item_raw_count": {
            "Assault Vest": 5,
            "Sitrus Berry": 2,
            "Safety Goggles": 1
        },
        "item_percents": {
            "Assault Vest": 0.625,
            "Sitrus Berry": 0.25,
            "Safety Goggles": 0.125
        }
    },
    "Iron Moth": {
        "count": 6,
        "move_raw_count": {
            "Fiery Dance": 4,
            "Energy Ball": 5,
            "Sludge Wave": 3,
            "Protect": 5,
            "Overheat": 2,
            "Discharge": 1,
            "Acid Spray": 2,
            "Heat Wave": 1,
            "Venoshock": 1
        },
        "move_percents": {
            "Fiery Dance": 0.6666666666666666,
            "Energy Ball": 0.8333333333333334,
            "Sludge Wave": 0.5,
            "Protect": 0.8333333333333334,
            "Overheat": 0.3333333333333333,
            "Discharge": 0.16666666666666666,
            "Acid Spray": 0.3333333333333333,
            "Heat Wave": 0.16666666666666666,
            "Venoshock": 0.16666666666666666
        },
        "ability_raw_count": {
            "Quark Drive": 6
        },
        "ability_percents": {
            "Quark Drive": 1.0
        },
        "item_raw_count": {
            "Booster Energy": 5,
            "Choice Specs": 1
        },
        "item_percents": {
            "Booster Energy": 0.8333333333333334,
            "Choice Specs": 0.16666666666666666
        }
    },
    "Gallade": {
        "count": 2,
        "move_raw_count": {
            "Sacred Sword": 2,
            "Psycho Cut": 2,
            "Wide Guard": 1,
            "Trick Room": 2,
            "Protect": 1
        },
        "move_percents": {
            "Sacred Sword": 1.0,
            "Psycho Cut": 1.0,
            "Wide Guard": 0.5,
            "Trick Room": 1.0,
            "Protect": 0.5
        },
        "ability_raw_count": {
            "Sharpness": 2
        },
        "ability_percents": {
            "Sharpness": 1.0
        },
        "item_raw_count": {
            "Scope Lens": 1,
            "Rocky Helmet": 1
        },
        "item_percents": {
            "Scope Lens": 0.5,
            "Rocky Helmet": 0.5
        }
    },
    "Baxcalibur": {
        "count": 7,
        "move_raw_count": {
            "Protect": 5,
            "Icicle Spear": 3,
            "Glaive Rush": 7,
            "Ice Shard": 5,
            "Icicle Crash": 4,
            "Tera Blast": 1,
            "Dragon Dance": 2,
            "Stomping Tantrum": 1
        },
        "move_percents": {
            "Protect": 0.7142857142857143,
            "Icicle Spear": 0.42857142857142855,
            "Glaive Rush": 1.0,
            "Ice Shard": 0.7142857142857143,
            "Icicle Crash": 0.5714285714285714,
            "Tera Blast": 0.14285714285714285,
            "Dragon Dance": 0.2857142857142857,
            "Stomping Tantrum": 0.14285714285714285
        },
        "ability_raw_count": {
            "Thermal Exchange": 7
        },
        "ability_percents": {
            "Thermal Exchange": 1.0
        },
        "item_raw_count": {
            "Loaded Dice": 3,
            "Clear Amulet": 2,
            "Assault Vest": 2
        },
        "item_percents": {
            "Loaded Dice": 0.42857142857142855,
            "Clear Amulet": 0.2857142857142857,
            "Assault Vest": 0.2857142857142857
        }
    },
    "Mimikyu": {
        "count": 9,
        "move_raw_count": {
            "Play Rough": 7,
            "Shadow Sneak": 9,
            "Will-O-Wisp": 3,
            "Rain Dance": 1,
            "Protect": 2,
            "Wood Hammer": 2,
            "Drain Punch": 1,
            "Trick Room": 4,
            "Curse": 3,
            "Shadow Claw": 2,
            "Taunt": 2
        },
        "move_percents": {
            "Play Rough": 0.7777777777777778,
            "Shadow Sneak": 1.0,
            "Will-O-Wisp": 0.3333333333333333,
            "Rain Dance": 0.1111111111111111,
            "Protect": 0.2222222222222222,
            "Wood Hammer": 0.2222222222222222,
            "Drain Punch": 0.1111111111111111,
            "Trick Room": 0.4444444444444444,
            "Curse": 0.3333333333333333,
            "Shadow Claw": 0.2222222222222222,
            "Taunt": 0.2222222222222222
        },
        "ability_raw_count": {
            "Disguise": 9
        },
        "ability_percents": {
            "Disguise": 1.0
        },
        "item_raw_count": {
            "Life Orb": 4,
            "Rocky Helmet": 2,
            "Mental Herb": 2,
            "Safety Goggles": 1
        },
        "item_percents": {
            "Life Orb": 0.4444444444444444,
            "Rocky Helmet": 0.2222222222222222,
            "Mental Herb": 0.2222222222222222,
            "Safety Goggles": 0.1111111111111111
        }
    },
    "Rotom-Wash": {
        "count": 2,
        "move_raw_count": {
            "Hydro Pump": 2,
            "Thunderbolt": 2,
            "Protect": 2,
            "Will-O-Wisp": 2
        },
        "move_percents": {
            "Hydro Pump": 1.0,
            "Thunderbolt": 1.0,
            "Protect": 1.0,
            "Will-O-Wisp": 1.0
        },
        "ability_raw_count": {
            "Levitate": 2
        },
        "ability_percents": {
            "Levitate": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 1,
            "Safety Goggles": 1
        },
        "item_percents": {
            "Sitrus Berry": 0.5,
            "Safety Goggles": 0.5
        }
    },
    "Sneasler": {
        "count": 14,
        "move_raw_count": {
            "Close Combat": 13,
            "Dire Claw": 14,
            "Shadow Claw": 1,
            "Protect": 9,
            "Acrobatics": 5,
            "Swords Dance": 2,
            "U-turn": 2,
            "Switcheroo": 1,
            "Gunk Shot": 1,
            "Fake Out": 6,
            "Brick Break": 1,
            "Taunt": 1
        },
        "move_percents": {
            "Close Combat": 0.9285714285714286,
            "Dire Claw": 1.0,
            "Shadow Claw": 0.07142857142857142,
            "Protect": 0.6428571428571429,
            "Acrobatics": 0.35714285714285715,
            "Swords Dance": 0.14285714285714285,
            "U-turn": 0.14285714285714285,
            "Switcheroo": 0.07142857142857142,
            "Gunk Shot": 0.07142857142857142,
            "Fake Out": 0.42857142857142855,
            "Brick Break": 0.07142857142857142,
            "Taunt": 0.07142857142857142
        },
        "ability_raw_count": {
            "Unburden": 11,
            "Poison Touch": 3
        },
        "ability_percents": {
            "Unburden": 0.7857142857142857,
            "Poison Touch": 0.21428571428571427
        },
        "item_raw_count": {
            "Psychic Seed": 7,
            "Grassy Seed": 4,
            "Choice Band": 1,
            "Assault Vest": 1,
            "Life Orb": 1
        },
        "item_percents": {
            "Psychic Seed": 0.5,
            "Grassy Seed": 0.2857142857142857,
            "Choice Band": 0.07142857142857142,
            "Assault Vest": 0.07142857142857142,
            "Life Orb": 0.07142857142857142
        }
    },
    "Lycanroc": {
        "count": 2,
        "move_raw_count": {
            "Rock Slide": 2,
            "Close Combat": 2,
            "Endeavor": 1,
            "Endure": 1,
            "Accelerock": 1,
            "Protect": 1
        },
        "move_percents": {
            "Rock Slide": 1.0,
            "Close Combat": 1.0,
            "Endeavor": 0.5,
            "Endure": 0.5,
            "Accelerock": 0.5,
            "Protect": 0.5
        },
        "ability_raw_count": {
            "Sand Rush": 2
        },
        "ability_percents": {
            "Sand Rush": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 1,
            "Safety Goggles": 1
        },
        "item_percents": {
            "Focus Sash": 0.5,
            "Safety Goggles": 0.5
        }
    },
    "Tyranitar": {
        "count": 2,
        "move_raw_count": {
            "Rock Slide": 2,
            "Assurance": 1,
            "Tera Blast": 1,
            "Low Kick": 1,
            "Crunch": 1,
            "Earthquake": 1,
            "Brick Break": 1
        },
        "move_percents": {
            "Rock Slide": 1.0,
            "Assurance": 0.5,
            "Tera Blast": 0.5,
            "Low Kick": 0.5,
            "Crunch": 0.5,
            "Earthquake": 0.5,
            "Brick Break": 0.5
        },
        "ability_raw_count": {
            "Sand Stream": 2
        },
        "ability_percents": {
            "Sand Stream": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 2
        },
        "item_percents": {
            "Assault Vest": 1.0
        }
    },
    "Zoroark-Hisui": {
        "count": 1,
        "move_raw_count": {
            "Protect": 1,
            "Bitter Malice": 1,
            "Hyper Voice": 1,
            "Nasty Plot": 1
        },
        "move_percents": {
            "Protect": 1.0,
            "Bitter Malice": 1.0,
            "Hyper Voice": 1.0,
            "Nasty Plot": 1.0
        },
        "ability_raw_count": {
            "Illusion": 1
        },
        "ability_percents": {
            "Illusion": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 1
        },
        "item_percents": {
            "Focus Sash": 1.0
        }
    },
    "Enamorus": {
        "count": 2,
        "move_raw_count": {
            "Protect": 2,
            "Dazzling Gleam": 1,
            "Earth Power": 2,
            "Tera Blast": 1,
            "Springtide Storm": 1,
            "Tailwind": 1
        },
        "move_percents": {
            "Protect": 1.0,
            "Dazzling Gleam": 0.5,
            "Earth Power": 1.0,
            "Tera Blast": 0.5,
            "Springtide Storm": 0.5,
            "Tailwind": 0.5
        },
        "ability_raw_count": {
            "Contrary": 2
        },
        "ability_percents": {
            "Contrary": 1.0
        },
        "item_raw_count": {
            "Expert Belt": 1,
            "Covert Cloak": 1
        },
        "item_percents": {
            "Expert Belt": 0.5,
            "Covert Cloak": 0.5
        }
    },
    "Enamorus-Therian": {
        "count": 8,
        "move_raw_count": {
            "Protect": 7,
            "Dazzling Gleam": 4,
            "Rest": 1,
            "Sleep Talk": 1,
            "Calm Mind": 3,
            "Earth Power": 7,
            "Draining Kiss": 1,
            "Moonblast": 5,
            "Springtide Storm": 1,
            "Sludge Bomb": 1,
            "Mystical Fire": 1
        },
        "move_percents": {
            "Protect": 0.875,
            "Dazzling Gleam": 0.5,
            "Rest": 0.125,
            "Sleep Talk": 0.125,
            "Calm Mind": 0.375,
            "Earth Power": 0.875,
            "Draining Kiss": 0.125,
            "Moonblast": 0.625,
            "Springtide Storm": 0.125,
            "Sludge Bomb": 0.125,
            "Mystical Fire": 0.125
        },
        "ability_raw_count": {
            "Overcoat": 8
        },
        "ability_percents": {
            "Overcoat": 1.0
        },
        "item_raw_count": {
            "Clear Amulet": 1,
            "Leftovers": 3,
            "Choice Specs": 1,
            "Sitrus Berry": 1,
            "Pixie Plate": 1,
            "Life Orb": 1
        },
        "item_percents": {
            "Clear Amulet": 0.125,
            "Leftovers": 0.375,
            "Choice Specs": 0.125,
            "Sitrus Berry": 0.125,
            "Pixie Plate": 0.125,
            "Life Orb": 0.125
        }
    },
    "Annihilape": {
        "count": 7,
        "move_raw_count": {
            "Protect": 7,
            "Shadow Punch": 1,
            "Close Combat": 1,
            "Final Gambit": 1,
            "Drain Punch": 6,
            "Rage Fist": 6,
            "Bulk Up": 6
        },
        "move_percents": {
            "Protect": 1.0,
            "Shadow Punch": 0.14285714285714285,
            "Close Combat": 0.14285714285714285,
            "Final Gambit": 0.14285714285714285,
            "Drain Punch": 0.8571428571428571,
            "Rage Fist": 0.8571428571428571,
            "Bulk Up": 0.8571428571428571
        },
        "ability_raw_count": {
            "Vital Spirit": 2,
            "Defiant": 5
        },
        "ability_percents": {
            "Vital Spirit": 0.2857142857142857,
            "Defiant": 0.7142857142857143
        },
        "item_raw_count": {
            "Choice Scarf": 1,
            "Leftovers": 4,
            "Safety Goggles": 1,
            "Sitrus Berry": 1
        },
        "item_percents": {
            "Choice Scarf": 0.14285714285714285,
            "Leftovers": 0.5714285714285714,
            "Safety Goggles": 0.14285714285714285,
            "Sitrus Berry": 0.14285714285714285
        }
    },
    "Zapdos-Galar": {
        "count": 3,
        "move_raw_count": {
            "Acrobatics": 1,
            "Thunderous Kick": 3,
            "Stomping Tantrum": 1,
            "Detect": 2,
            "Tailwind": 2,
            "Brave Bird": 2,
            "Taunt": 1
        },
        "move_percents": {
            "Acrobatics": 0.3333333333333333,
            "Thunderous Kick": 1.0,
            "Stomping Tantrum": 0.3333333333333333,
            "Detect": 0.6666666666666666,
            "Tailwind": 0.6666666666666666,
            "Brave Bird": 0.6666666666666666,
            "Taunt": 0.3333333333333333
        },
        "ability_raw_count": {
            "Defiant": 3
        },
        "ability_percents": {
            "Defiant": 1.0
        },
        "item_raw_count": {
            "Grassy Seed": 1,
            "Covert Cloak": 2
        },
        "item_percents": {
            "Grassy Seed": 0.3333333333333333,
            "Covert Cloak": 0.6666666666666666
        }
    },
    "Scizor": {
        "count": 3,
        "move_raw_count": {
            "Bullet Punch": 3,
            "Close Combat": 3,
            "Swords Dance": 2,
            "Protect": 1,
            "U-turn": 2,
            "Acrobatics": 1
        },
        "move_percents": {
            "Bullet Punch": 1.0,
            "Close Combat": 1.0,
            "Swords Dance": 0.6666666666666666,
            "Protect": 0.3333333333333333,
            "U-turn": 0.6666666666666666,
            "Acrobatics": 0.3333333333333333
        },
        "ability_raw_count": {
            "Technician": 3
        },
        "ability_percents": {
            "Technician": 1.0
        },
        "item_raw_count": {
            "Rocky Helmet": 1,
            "Life Orb": 1,
            "Choice Band": 1
        },
        "item_percents": {
            "Rocky Helmet": 0.3333333333333333,
            "Life Orb": 0.3333333333333333,
            "Choice Band": 0.3333333333333333
        }
    },
    "Brute Bonnet": {
        "count": 7,
        "move_raw_count": {
            "Spore": 7,
            "Bullet Seed": 2,
            "Sucker Punch": 5,
            "Rage Powder": 6,
            "Seed Bomb": 5,
            "Crunch": 2,
            "Protect": 1
        },
        "move_percents": {
            "Spore": 1.0,
            "Bullet Seed": 0.2857142857142857,
            "Sucker Punch": 0.7142857142857143,
            "Rage Powder": 0.8571428571428571,
            "Seed Bomb": 0.7142857142857143,
            "Crunch": 0.2857142857142857,
            "Protect": 0.14285714285714285
        },
        "ability_raw_count": {
            "Protosynthesis": 7
        },
        "ability_percents": {
            "Protosynthesis": 1.0
        },
        "item_raw_count": {
            "Loaded Dice": 2,
            "Chople Berry": 1,
            "Rocky Helmet": 3,
            "Booster Energy": 1
        },
        "item_percents": {
            "Loaded Dice": 0.2857142857142857,
            "Chople Berry": 0.14285714285714285,
            "Rocky Helmet": 0.42857142857142855,
            "Booster Energy": 0.14285714285714285
        }
    },
    "Maushold-Four": {
        "count": 5,
        "move_raw_count": {
            "Beat Up": 1,
            "Follow Me": 5,
            "Taunt": 3,
            "Protect": 4,
            "Super Fang": 1,
            "Feint": 1,
            "Helping Hand": 2,
            "Population Bomb": 2,
            "U-turn": 1
        },
        "move_percents": {
            "Beat Up": 0.2,
            "Follow Me": 1.0,
            "Taunt": 0.6,
            "Protect": 0.8,
            "Super Fang": 0.2,
            "Feint": 0.2,
            "Helping Hand": 0.4,
            "Population Bomb": 0.4,
            "U-turn": 0.2
        },
        "ability_raw_count": {
            "Friend Guard": 4,
            "Technician": 1
        },
        "ability_percents": {
            "Friend Guard": 0.8,
            "Technician": 0.2
        },
        "item_raw_count": {
            "Safety Goggles": 2,
            "Rocky Helmet": 1,
            "Wide Lens": 2
        },
        "item_percents": {
            "Safety Goggles": 0.4,
            "Rocky Helmet": 0.2,
            "Wide Lens": 0.4
        }
    },
    "Landorus": {
        "count": 9,
        "move_raw_count": {
            "Earth Power": 9,
            "Sludge Bomb": 9,
            "Substitute": 5,
            "Protect": 9,
            "Psychic": 1,
            "Sandsear Storm": 3
        },
        "move_percents": {
            "Earth Power": 1.0,
            "Sludge Bomb": 1.0,
            "Substitute": 0.5555555555555556,
            "Protect": 1.0,
            "Psychic": 0.1111111111111111,
            "Sandsear Storm": 0.3333333333333333
        },
        "ability_raw_count": {
            "Sheer Force": 9
        },
        "ability_percents": {
            "Sheer Force": 1.0
        },
        "item_raw_count": {
            "Life Orb": 9
        },
        "item_percents": {
            "Life Orb": 1.0
        }
    },
    "Slowbro": {
        "count": 1,
        "move_raw_count": {
            "Body Press": 1,
            "Iron Defense": 1,
            "Slack Off": 1,
            "Trick Room": 1
        },
        "move_percents": {
            "Body Press": 1.0,
            "Iron Defense": 1.0,
            "Slack Off": 1.0,
            "Trick Room": 1.0
        },
        "ability_raw_count": {
            "Oblivious": 1
        },
        "ability_percents": {
            "Oblivious": 1.0
        },
        "item_raw_count": {
            "Safety Goggles": 1
        },
        "item_percents": {
            "Safety Goggles": 1.0
        }
    },
    "Regieleki": {
        "count": 10,
        "move_raw_count": {
            "Electroweb": 9,
            "Thunderbolt": 9,
            "Thunder": 1,
            "Volt Switch": 8,
            "Explosion": 2,
            "Tera Blast": 2,
            "Protect": 7,
            "Wild Charge": 1,
            "Extreme Speed": 1
        },
        "move_percents": {
            "Electroweb": 0.9,
            "Thunderbolt": 0.9,
            "Thunder": 0.1,
            "Volt Switch": 0.8,
            "Explosion": 0.2,
            "Tera Blast": 0.2,
            "Protect": 0.7,
            "Wild Charge": 0.1,
            "Extreme Speed": 0.1
        },
        "ability_raw_count": {
            "Transistor": 10
        },
        "ability_percents": {
            "Transistor": 1.0
        },
        "item_raw_count": {
            "Choice Specs": 1,
            "Choice Scarf": 1,
            "Focus Sash": 4,
            "Sitrus Berry": 1,
            "Life Orb": 1,
            "Choice Band": 1,
            "Magnet": 1
        },
        "item_percents": {
            "Choice Specs": 0.1,
            "Choice Scarf": 0.1,
            "Focus Sash": 0.4,
            "Sitrus Berry": 0.1,
            "Life Orb": 0.1,
            "Choice Band": 0.1,
            "Magnet": 0.1
        }
    },
    "Garchomp": {
        "count": 2,
        "move_raw_count": {
            "Iron Head": 1,
            "Stomping Tantrum": 2,
            "Protect": 2,
            "Swords Dance": 1,
            "Earthquake": 1,
            "Rock Slide": 1
        },
        "move_percents": {
            "Iron Head": 0.5,
            "Stomping Tantrum": 1.0,
            "Protect": 1.0,
            "Swords Dance": 0.5,
            "Earthquake": 0.5,
            "Rock Slide": 0.5
        },
        "ability_raw_count": {
            "Rough Skin": 2
        },
        "ability_percents": {
            "Rough Skin": 1.0
        },
        "item_raw_count": {
            "Safety Goggles": 1,
            "Clear Amulet": 1
        },
        "item_percents": {
            "Safety Goggles": 0.5,
            "Clear Amulet": 0.5
        }
    },
    "Iron Thorns": {
        "count": 2,
        "move_raw_count": {
            "Rock Blast": 1,
            "Wild Charge": 1,
            "Swords Dance": 1,
            "Protect": 2,
            "Rock Slide": 1,
            "Thunder Punch": 1,
            "Tera Blast": 1
        },
        "move_percents": {
            "Rock Blast": 0.5,
            "Wild Charge": 0.5,
            "Swords Dance": 0.5,
            "Protect": 1.0,
            "Rock Slide": 0.5,
            "Thunder Punch": 0.5,
            "Tera Blast": 0.5
        },
        "ability_raw_count": {
            "Quark Drive": 2
        },
        "ability_percents": {
            "Quark Drive": 1.0
        },
        "item_raw_count": {
            "Loaded Dice": 1,
            "Booster Energy": 1
        },
        "item_percents": {
            "Loaded Dice": 0.5,
            "Booster Energy": 0.5
        }
    },
    "Slowking-Galar": {
        "count": 1,
        "move_raw_count": {
            "Gunk Shot": 1,
            "Shadow Ball": 1,
            "Trick Room": 1,
            "Slack Off": 1
        },
        "move_percents": {
            "Gunk Shot": 1.0,
            "Shadow Ball": 1.0,
            "Trick Room": 1.0,
            "Slack Off": 1.0
        },
        "ability_raw_count": {
            "Regenerator": 1
        },
        "ability_percents": {
            "Regenerator": 1.0
        },
        "item_raw_count": {
            "Weakness Policy": 1
        },
        "item_percents": {
            "Weakness Policy": 1.0
        }
    },
    "Glimmora": {
        "count": 10,
        "move_raw_count": {
            "Mortal Spin": 9,
            "Spiky Shield": 8,
            "Stealth Rock": 1,
            "Venoshock": 1,
            "Power Gem": 7,
            "Sludge Bomb": 3,
            "Earth Power": 8,
            "Dazzling Gleam": 2,
            "Energy Ball": 1
        },
        "move_percents": {
            "Mortal Spin": 0.9,
            "Spiky Shield": 0.8,
            "Stealth Rock": 0.1,
            "Venoshock": 0.1,
            "Power Gem": 0.7,
            "Sludge Bomb": 0.3,
            "Earth Power": 0.8,
            "Dazzling Gleam": 0.2,
            "Energy Ball": 0.1
        },
        "ability_raw_count": {
            "Toxic Debris": 10
        },
        "ability_percents": {
            "Toxic Debris": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 3,
            "Life Orb": 1,
            "Focus Sash": 4,
            "Assault Vest": 2
        },
        "item_percents": {
            "Sitrus Berry": 0.3,
            "Life Orb": 0.1,
            "Focus Sash": 0.4,
            "Assault Vest": 0.2
        }
    },
    "Wo-Chien": {
        "count": 9,
        "move_raw_count": {
            "Leech Seed": 4,
            "Protect": 5,
            "Pollen Puff": 9,
            "Substitute": 1,
            "Snarl": 3,
            "Giga Drain": 4,
            "Ruination": 4,
            "Knock Off": 1,
            "Foul Play": 3,
            "Grass Knot": 1,
            "Tera Blast": 1
        },
        "move_percents": {
            "Leech Seed": 0.4444444444444444,
            "Protect": 0.5555555555555556,
            "Pollen Puff": 1.0,
            "Substitute": 0.1111111111111111,
            "Snarl": 0.3333333333333333,
            "Giga Drain": 0.4444444444444444,
            "Ruination": 0.4444444444444444,
            "Knock Off": 0.1111111111111111,
            "Foul Play": 0.3333333333333333,
            "Grass Knot": 0.1111111111111111,
            "Tera Blast": 0.1111111111111111
        },
        "ability_raw_count": {
            "Tablets of Ruin": 9
        },
        "ability_percents": {
            "Tablets of Ruin": 1.0
        },
        "item_raw_count": {
            "Leftovers": 2,
            "Assault Vest": 4,
            "Sitrus Berry": 2,
            "Rocky Helmet": 1
        },
        "item_percents": {
            "Leftovers": 0.2222222222222222,
            "Assault Vest": 0.4444444444444444,
            "Sitrus Berry": 0.2222222222222222,
            "Rocky Helmet": 0.1111111111111111
        }
    },
    "Scream Tail": {
        "count": 3,
        "move_raw_count": {
            "Dazzling Gleam": 2,
            "Protect": 2,
            "Encore": 3,
            "Disable": 3,
            "Trick Room": 1,
            "Play Rough": 1
        },
        "move_percents": {
            "Dazzling Gleam": 0.6666666666666666,
            "Protect": 0.6666666666666666,
            "Encore": 1.0,
            "Disable": 1.0,
            "Trick Room": 0.3333333333333333,
            "Play Rough": 0.3333333333333333
        },
        "ability_raw_count": {
            "Protosynthesis": 3
        },
        "ability_percents": {
            "Protosynthesis": 1.0
        },
        "item_raw_count": {
            "Booster Energy": 3
        },
        "item_percents": {
            "Booster Energy": 1.0
        }
    },
    "Sableye": {
        "count": 3,
        "move_raw_count": {
            "Encore": 3,
            "Disable": 3,
            "Quash": 2,
            "Will-O-Wisp": 1,
            "Knock Off": 1,
            "Reflect": 1,
            "Light Screen": 1
        },
        "move_percents": {
            "Encore": 1.0,
            "Disable": 1.0,
            "Quash": 0.6666666666666666,
            "Will-O-Wisp": 0.3333333333333333,
            "Knock Off": 0.3333333333333333,
            "Reflect": 0.3333333333333333,
            "Light Screen": 0.3333333333333333
        },
        "ability_raw_count": {
            "Prankster": 3
        },
        "ability_percents": {
            "Prankster": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 2,
            "Roseli Berry": 1
        },
        "item_percents": {
            "Focus Sash": 0.6666666666666666,
            "Roseli Berry": 0.3333333333333333
        }
    },
    "Gothitelle": {
        "count": 2,
        "move_raw_count": {
            "Psychic": 2,
            "Trick Room": 2,
            "Helping Hand": 1,
            "Fake Out": 2,
            "Protect": 1
        },
        "move_percents": {
            "Psychic": 1.0,
            "Trick Room": 1.0,
            "Helping Hand": 0.5,
            "Fake Out": 1.0,
            "Protect": 0.5
        },
        "ability_raw_count": {
            "Shadow Tag": 2
        },
        "ability_percents": {
            "Shadow Tag": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 1,
            "Aguav Berry": 1
        },
        "item_percents": {
            "Sitrus Berry": 0.5,
            "Aguav Berry": 0.5
        }
    },
    "Orthworm": {
        "count": 3,
        "move_raw_count": {
            "Heavy Slam": 3,
            "Iron Defense": 3,
            "Body Press": 3,
            "Shed Tail": 3
        },
        "move_percents": {
            "Heavy Slam": 1.0,
            "Iron Defense": 1.0,
            "Body Press": 1.0,
            "Shed Tail": 1.0
        },
        "ability_raw_count": {
            "Earth Eater": 3
        },
        "ability_percents": {
            "Earth Eater": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 2,
            "Rocky Helmet": 1
        },
        "item_percents": {
            "Sitrus Berry": 0.6666666666666666,
            "Rocky Helmet": 0.3333333333333333
        }
    },
    "Tornadus-Incarnate": {
        "count": 1,
        "move_raw_count": {
            "Sunny Day": 1,
            "Tailwind": 1,
            "U-turn": 1,
            "Taunt": 1
        },
        "move_percents": {
            "Sunny Day": 1.0,
            "Tailwind": 1.0,
            "U-turn": 1.0,
            "Taunt": 1.0
        },
        "ability_raw_count": {
            "Prankster": 1
        },
        "ability_percents": {
            "Prankster": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 1
        },
        "item_percents": {
            "Covert Cloak": 1.0
        }
    },
    "Corviknight": {
        "count": 2,
        "move_raw_count": {
            "Iron Defense": 1,
            "Body Press": 1,
            "Taunt": 1,
            "Roost": 1,
            "Bulk Up": 1,
            "Brave Bird": 1,
            "Tailwind": 1,
            "Iron Head": 1
        },
        "move_percents": {
            "Iron Defense": 0.5,
            "Body Press": 0.5,
            "Taunt": 0.5,
            "Roost": 0.5,
            "Bulk Up": 0.5,
            "Brave Bird": 0.5,
            "Tailwind": 0.5,
            "Iron Head": 0.5
        },
        "ability_raw_count": {
            "Mirror Armor": 2
        },
        "ability_percents": {
            "Mirror Armor": 1.0
        },
        "item_raw_count": {
            "Rocky Helmet": 1,
            "Lum Berry": 1
        },
        "item_percents": {
            "Rocky Helmet": 0.5,
            "Lum Berry": 0.5
        }
    },
    "Maushold": {
        "count": 2,
        "move_raw_count": {
            "Super Fang": 1,
            "Follow Me": 2,
            "Feint": 1,
            "Protect": 2,
            "Population Bomb": 1,
            "Taunt": 1
        },
        "move_percents": {
            "Super Fang": 0.5,
            "Follow Me": 1.0,
            "Feint": 0.5,
            "Protect": 1.0,
            "Population Bomb": 0.5,
            "Taunt": 0.5
        },
        "ability_raw_count": {
            "Friend Guard": 1,
            "Technician": 1
        },
        "ability_percents": {
            "Friend Guard": 0.5,
            "Technician": 0.5
        },
        "item_raw_count": {
            "Rocky Helmet": 1,
            "Wide Lens": 1
        },
        "item_percents": {
            "Rocky Helmet": 0.5,
            "Wide Lens": 0.5
        }
    },
    "Samurott-Hisui": {
        "count": 4,
        "move_raw_count": {
            "Ceaseless Edge": 3,
            "Aqua Cutter": 3,
            "Sacred Sword": 3,
            "Aqua Jet": 2,
            "Night Slash": 1,
            "Sucker Punch": 2,
            "Razor Shell": 1,
            "Protect": 1
        },
        "move_percents": {
            "Ceaseless Edge": 0.75,
            "Aqua Cutter": 0.75,
            "Sacred Sword": 0.75,
            "Aqua Jet": 0.5,
            "Night Slash": 0.25,
            "Sucker Punch": 0.5,
            "Razor Shell": 0.25,
            "Protect": 0.25
        },
        "ability_raw_count": {
            "Sharpness": 4
        },
        "ability_percents": {
            "Sharpness": 1.0
        },
        "item_raw_count": {
            "Assault Vest": 2,
            "Choice Band": 1,
            "Black Glasses": 1
        },
        "item_percents": {
            "Assault Vest": 0.5,
            "Choice Band": 0.25,
            "Black Glasses": 0.25
        }
    },
    "Glastrier": {
        "count": 4,
        "move_raw_count": {
            "Protect": 4,
            "Icicle Crash": 4,
            "Stomping Tantrum": 2,
            "Heavy Slam": 3,
            "Swords Dance": 1,
            "Close Combat": 2
        },
        "move_percents": {
            "Protect": 1.0,
            "Icicle Crash": 1.0,
            "Stomping Tantrum": 0.5,
            "Heavy Slam": 0.75,
            "Swords Dance": 0.25,
            "Close Combat": 0.5
        },
        "ability_raw_count": {
            "Chilling Neigh": 4
        },
        "ability_percents": {
            "Chilling Neigh": 1.0
        },
        "item_raw_count": {
            "Clear Amulet": 1,
            "Safety Goggles": 2,
            "Covert Cloak": 1
        },
        "item_percents": {
            "Clear Amulet": 0.25,
            "Safety Goggles": 0.5,
            "Covert Cloak": 0.25
        }
    },
    "Bruxish": {
        "count": 1,
        "move_raw_count": {
            "Wave Crash": 1,
            "Psychic Fangs": 1,
            "Super Fang": 1,
            "Trick Room": 1
        },
        "move_percents": {
            "Wave Crash": 1.0,
            "Psychic Fangs": 1.0,
            "Super Fang": 1.0,
            "Trick Room": 1.0
        },
        "ability_raw_count": {
            "Dazzling": 1
        },
        "ability_percents": {
            "Dazzling": 1.0
        },
        "item_raw_count": {
            "Power Band": 1
        },
        "item_percents": {
            "Power Band": 1.0
        }
    },
    "Slither Wing": {
        "count": 1,
        "move_raw_count": {
            "First Impression": 1,
            "Protect": 1,
            "Close Combat": 1,
            "U-turn": 1
        },
        "move_percents": {
            "First Impression": 1.0,
            "Protect": 1.0,
            "Close Combat": 1.0,
            "U-turn": 1.0
        },
        "ability_raw_count": {
            "Protosynthesis": 1
        },
        "ability_percents": {
            "Protosynthesis": 1.0
        },
        "item_raw_count": {
            "Life Orb": 1
        },
        "item_percents": {
            "Life Orb": 1.0
        }
    },
    "Jumpluff": {
        "count": 1,
        "move_raw_count": {
            "Sleep Powder": 1,
            "Tailwind": 1,
            "Leaf Storm": 1,
            "Encore": 1
        },
        "move_percents": {
            "Sleep Powder": 1.0,
            "Tailwind": 1.0,
            "Leaf Storm": 1.0,
            "Encore": 1.0
        },
        "ability_raw_count": {
            "Chlorophyll": 1
        },
        "ability_percents": {
            "Chlorophyll": 1.0
        },
        "item_raw_count": {
            "Covert Cloak": 1
        },
        "item_percents": {
            "Covert Cloak": 1.0
        }
    },
    "Perrserker": {
        "count": 1,
        "move_raw_count": {
            "Fake Out": 1,
            "Iron Head": 1,
            "Helping Hand": 1,
            "Taunt": 1
        },
        "move_percents": {
            "Fake Out": 1.0,
            "Iron Head": 1.0,
            "Helping Hand": 1.0,
            "Taunt": 1.0
        },
        "ability_raw_count": {
            "Steely Spirit": 1
        },
        "ability_percents": {
            "Steely Spirit": 1.0
        },
        "item_raw_count": {
            "Chople Berry": 1
        },
        "item_percents": {
            "Chople Berry": 1.0
        }
    },
    "Charizard": {
        "count": 2,
        "move_raw_count": {
            "Overheat": 1,
            "Heat Wave": 2,
            "Air Slash": 1,
            "Focus Blast": 1,
            "Tera Blast": 1,
            "Dragon Pulse": 1,
            "Flamethrower": 1
        },
        "move_percents": {
            "Overheat": 0.5,
            "Heat Wave": 1.0,
            "Air Slash": 0.5,
            "Focus Blast": 0.5,
            "Tera Blast": 0.5,
            "Dragon Pulse": 0.5,
            "Flamethrower": 0.5
        },
        "ability_raw_count": {
            "Solar Power": 2
        },
        "ability_percents": {
            "Solar Power": 1.0
        },
        "item_raw_count": {
            "Choice Scarf": 1,
            "Dragon Fang": 1
        },
        "item_percents": {
            "Choice Scarf": 0.5,
            "Dragon Fang": 0.5
        }
    },
    "Tauros-Paldea-Blaze": {
        "count": 1,
        "move_raw_count": {
            "Protect": 1,
            "Flare Blitz": 1,
            "Close Combat": 1,
            "Raging Bull": 1
        },
        "move_percents": {
            "Protect": 1.0,
            "Flare Blitz": 1.0,
            "Close Combat": 1.0,
            "Raging Bull": 1.0
        },
        "ability_raw_count": {
            "Intimidate": 1
        },
        "ability_percents": {
            "Intimidate": 1.0
        },
        "item_raw_count": {
            "Safety Goggles": 1
        },
        "item_percents": {
            "Safety Goggles": 1.0
        }
    },
    "Cloyster": {
        "count": 1,
        "move_raw_count": {
            "Liquidation": 1,
            "Icicle Spear": 1,
            "Iron Defense": 1,
            "Spikes": 1
        },
        "move_percents": {
            "Liquidation": 1.0,
            "Icicle Spear": 1.0,
            "Iron Defense": 1.0,
            "Spikes": 1.0
        },
        "ability_raw_count": {
            "Skill Link": 1
        },
        "ability_percents": {
            "Skill Link": 1.0
        },
        "item_raw_count": {
            "Never-Melt Ice": 1
        },
        "item_percents": {
            "Never-Melt Ice": 1.0
        }
    },
    "Muk": {
        "count": 1,
        "move_raw_count": {
            "Sludge Wave": 1,
            "Toxic Spikes": 1,
            "Acid Armor": 1,
            "Dark Pulse": 1
        },
        "move_percents": {
            "Sludge Wave": 1.0,
            "Toxic Spikes": 1.0,
            "Acid Armor": 1.0,
            "Dark Pulse": 1.0
        },
        "ability_raw_count": {
            "Stench": 1
        },
        "ability_percents": {
            "Stench": 1.0
        },
        "item_raw_count": {
            "Black Sludge": 1
        },
        "item_percents": {
            "Black Sludge": 1.0
        }
    },
    "Tauros": {
        "count": 1,
        "move_raw_count": {
            "Zen Headbutt": 1,
            "Close Combat": 1,
            "Giga Impact": 1,
            "Sunny Day": 1
        },
        "move_percents": {
            "Zen Headbutt": 1.0,
            "Close Combat": 1.0,
            "Giga Impact": 1.0,
            "Sunny Day": 1.0
        },
        "ability_raw_count": {
            "Intimidate": 1
        },
        "ability_percents": {
            "Intimidate": 1.0
        },
        "item_raw_count": {
            "Heat Rock": 1
        },
        "item_percents": {
            "Heat Rock": 1.0
        }
    },
    "Palafin": {
        "count": 1,
        "move_raw_count": {
            "Jet Punch": 1,
            "Wave Crash": 1,
            "Taunt": 1,
            "Protect": 1
        },
        "move_percents": {
            "Jet Punch": 1.0,
            "Wave Crash": 1.0,
            "Taunt": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Zero to Hero": 1
        },
        "ability_percents": {
            "Zero to Hero": 1.0
        },
        "item_raw_count": {
            "Mystic Water": 1
        },
        "item_percents": {
            "Mystic Water": 1.0
        }
    },
    "Great Tusk": {
        "count": 2,
        "move_raw_count": {
            "Close Combat": 2,
            "Headlong Rush": 2,
            "Earthquake": 1,
            "Rock Slide": 2,
            "Facade": 1
        },
        "move_percents": {
            "Close Combat": 1.0,
            "Headlong Rush": 1.0,
            "Earthquake": 0.5,
            "Rock Slide": 1.0,
            "Facade": 0.5
        },
        "ability_raw_count": {
            "Protosynthesis": 2
        },
        "ability_percents": {
            "Protosynthesis": 1.0
        },
        "item_raw_count": {
            "Life Orb": 1,
            "Choice Scarf": 1
        },
        "item_percents": {
            "Life Orb": 0.5,
            "Choice Scarf": 0.5
        }
    },
    "Pincurchin": {
        "count": 1,
        "move_raw_count": {
            "Thunderbolt": 1,
            "Discharge": 1,
            "Sucker Punch": 1,
            "Tera Blast": 1
        },
        "move_percents": {
            "Thunderbolt": 1.0,
            "Discharge": 1.0,
            "Sucker Punch": 1.0,
            "Tera Blast": 1.0
        },
        "ability_raw_count": {
            "Electric Surge": 1
        },
        "ability_percents": {
            "Electric Surge": 1.0
        },
        "item_raw_count": {
            "Life Orb": 1
        },
        "item_percents": {
            "Life Orb": 1.0
        }
    },
    "Rabsca": {
        "count": 1,
        "move_raw_count": {
            "Trick Room": 1,
            "Revival Blessing": 1,
            "Psychic": 1,
            "Struggle Bug": 1
        },
        "move_percents": {
            "Trick Room": 1.0,
            "Revival Blessing": 1.0,
            "Psychic": 1.0,
            "Struggle Bug": 1.0
        },
        "ability_raw_count": {
            "Telepathy": 1
        },
        "ability_percents": {
            "Telepathy": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 1
        },
        "item_percents": {
            "Sitrus Berry": 1.0
        }
    },
    "Moltres": {
        "count": 2,
        "move_raw_count": {
            "Heat Wave": 1,
            "Air Slash": 2,
            "Roost": 1,
            "Tailwind": 2,
            "Flamethrower": 1,
            "Protect": 1
        },
        "move_percents": {
            "Heat Wave": 0.5,
            "Air Slash": 1.0,
            "Roost": 0.5,
            "Tailwind": 1.0,
            "Flamethrower": 0.5,
            "Protect": 0.5
        },
        "ability_raw_count": {
            "Flame Body": 2
        },
        "ability_percents": {
            "Flame Body": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 2
        },
        "item_percents": {
            "Sitrus Berry": 1.0
        }
    },
    "Meowscarada": {
        "count": 1,
        "move_raw_count": {
            "Flower Trick": 1,
            "Knock Off": 1,
            "Sucker Punch": 1,
            "Protect": 1
        },
        "move_percents": {
            "Flower Trick": 1.0,
            "Knock Off": 1.0,
            "Sucker Punch": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Overgrow": 1
        },
        "ability_percents": {
            "Overgrow": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 1
        },
        "item_percents": {
            "Focus Sash": 1.0
        }
    },
    "Tinkaton": {
        "count": 1,
        "move_raw_count": {
            "Fake Out": 1,
            "Gigaton Hammer": 1,
            "Baby-Doll Eyes": 1,
            "Helping Hand": 1
        },
        "move_percents": {
            "Fake Out": 1.0,
            "Gigaton Hammer": 1.0,
            "Baby-Doll Eyes": 1.0,
            "Helping Hand": 1.0
        },
        "ability_raw_count": {
            "Mold Breaker": 1
        },
        "ability_percents": {
            "Mold Breaker": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 1
        },
        "item_percents": {
            "Sitrus Berry": 1.0
        }
    },
    "Rotom-Heat": {
        "count": 1,
        "move_raw_count": {
            "Thunderbolt": 1,
            "Overheat": 1,
            "Will-O-Wisp": 1,
            "Protect": 1
        },
        "move_percents": {
            "Thunderbolt": 1.0,
            "Overheat": 1.0,
            "Will-O-Wisp": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Levitate": 1
        },
        "ability_percents": {
            "Levitate": 1.0
        },
        "item_raw_count": {
            "Safety Goggles": 1
        },
        "item_percents": {
            "Safety Goggles": 1.0
        }
    },
    "Enamorus incarnate": {
        "count": 1,
        "move_raw_count": {
            "Moonblast": 1,
            "Sludge Bomb": 1,
            "Tera Blast": 1,
            "Earth Power": 1
        },
        "move_percents": {
            "Moonblast": 1.0,
            "Sludge Bomb": 1.0,
            "Tera Blast": 1.0,
            "Earth Power": 1.0
        },
        "ability_raw_count": {
            "Contrary": 1
        },
        "ability_percents": {
            "Contrary": 1.0
        },
        "item_raw_count": {
            "Choice Specs": 1
        },
        "item_percents": {
            "Choice Specs": 1.0
        }
    },
    "Tornadus incarnate": {
        "count": 1,
        "move_raw_count": {
            "Tailwind": 1,
            "Bleakwind Storm": 1,
            "Icy Wind": 1,
            "Taunt": 1
        },
        "move_percents": {
            "Tailwind": 1.0,
            "Bleakwind Storm": 1.0,
            "Icy Wind": 1.0,
            "Taunt": 1.0
        },
        "ability_raw_count": {
            "Prankster": 1
        },
        "ability_percents": {
            "Prankster": 1.0
        },
        "item_raw_count": {
            "Mental Herb": 1
        },
        "item_percents": {
            "Mental Herb": 1.0
        }
    },
    "Ceruledge": {
        "count": 1,
        "move_raw_count": {
            "Taunt": 1,
            "Bitter Blade": 1,
            "Shadow Sneak": 1,
            "Will-O-Wisp": 1
        },
        "move_percents": {
            "Taunt": 1.0,
            "Bitter Blade": 1.0,
            "Shadow Sneak": 1.0,
            "Will-O-Wisp": 1.0
        },
        "ability_raw_count": {
            "Flash Fire": 1
        },
        "ability_percents": {
            "Flash Fire": 1.0
        },
        "item_raw_count": {
            "Sitrus Berry": 1
        },
        "item_percents": {
            "Sitrus Berry": 1.0
        }
    },
    "Abomasnow": {
        "count": 3,
        "move_raw_count": {
            "Protect": 3,
            "Aurora Veil": 2,
            "Blizzard": 3,
            "Giga Drain": 1,
            "Energy Ball": 2,
            "Helping Hand": 1
        },
        "move_percents": {
            "Protect": 1.0,
            "Aurora Veil": 0.6666666666666666,
            "Blizzard": 1.0,
            "Giga Drain": 0.3333333333333333,
            "Energy Ball": 0.6666666666666666,
            "Helping Hand": 0.3333333333333333
        },
        "ability_raw_count": {
            "Snow Warning": 3
        },
        "ability_percents": {
            "Snow Warning": 1.0
        },
        "item_raw_count": {
            "Life Orb": 1,
            "Focus Sash": 1,
            "Light Clay": 1
        },
        "item_percents": {
            "Life Orb": 0.3333333333333333,
            "Focus Sash": 0.3333333333333333,
            "Light Clay": 0.3333333333333333
        }
    },
    "Tatsugiri-Droopy": {
        "count": 1,
        "move_raw_count": {
            "Muddy Water": 1,
            "Dragon Pulse": 1,
            "Icy Wind": 1,
            "Sleep Talk": 1
        },
        "move_percents": {
            "Muddy Water": 1.0,
            "Dragon Pulse": 1.0,
            "Icy Wind": 1.0,
            "Sleep Talk": 1.0
        },
        "ability_raw_count": {
            "Commander": 1
        },
        "ability_percents": {
            "Commander": 1.0
        },
        "item_raw_count": {
            "Choice Scarf": 1
        },
        "item_percents": {
            "Choice Scarf": 1.0
        }
    },
    "Vaporeon": {
        "count": 1,
        "move_raw_count": {
            "Calm Mind": 1,
            "Muddy Water": 1,
            "Stored Power": 1,
            "Protect": 1
        },
        "move_percents": {
            "Calm Mind": 1.0,
            "Muddy Water": 1.0,
            "Stored Power": 1.0,
            "Protect": 1.0
        },
        "ability_raw_count": {
            "Water Absorb": 1
        },
        "ability_percents": {
            "Water Absorb": 1.0
        },
        "item_raw_count": {
            "Leftovers": 1
        },
        "item_percents": {
            "Leftovers": 1.0
        }
    },
    "Brambleghast": {
        "count": 1,
        "move_raw_count": {
            "Phantom Force": 1,
            "Protect": 1,
            "Power Whip": 1,
            "Shadow Sneak": 1
        },
        "move_percents": {
            "Phantom Force": 1.0,
            "Protect": 1.0,
            "Power Whip": 1.0,
            "Shadow Sneak": 1.0
        },
        "ability_raw_count": {
            "Wind Rider": 1
        },
        "ability_percents": {
            "Wind Rider": 1.0
        },
        "item_raw_count": {
            "Focus Sash": 1
        },
        "item_percents": {
            "Focus Sash": 1.0
        }
    }
}