#!/usr/bin/env python
import asyncio
import json
from typing import Any, List, Tuple, Dict
import aiohttp
from dataclasses import dataclass
import re
import sys
from bs4 import BeautifulSoup
from mlogger import init_logger

logging = init_logger()


@dataclass
class Mon:
    name: str
    item: str
    ability: str
    nature: str
    evs: str
    moves: List[str]
    tera_type: str


@dataclass
class Paste:
    url: str
    title: str
    mons: List[Mon]
    username: str


async def fetch(session: aiohttp.ClientSession, url: str, username="") -> Paste:
    async with session.get(url) as response:
        response = await response.text()
        soup = BeautifulSoup(response, "html.parser")
        title_select = soup.select_one("aside h1")
        if title_select:
            title = title_select.text.strip()
        else:
            title = "Untitled"
        articles = soup.select("article")
        mons = []

        nickname_regex = r"^.*? \((.*)\)$"
        for article in articles:
            text = article.text.strip()
            lines = text.split("\n")
            monobj = Mon("", "", "", "", "", [], "")
            for index in range(0, len(lines)):
                if index == 0:
                    name = lines[index]
                    if "@" in name:
                        items = name.split("@")
                        name = items[0].strip()
                        monobj.item = items[1].strip()
                    name = name.strip()
                    name = name.removesuffix(" (F)")
                    name = name.removesuffix(" (M)")
                    nickname_match = re.match(nickname_regex, name)
                    if nickname_match:
                        name = nickname_match.group(1)
                    monobj.name = name
                    continue
                line = lines[index]
                if line.startswith("Ability:"):
                    ability = line.split(":")[1].strip()
                    monobj.ability = ability
                elif line.startswith("Tera Type:"):
                    tera_type = line.split(":")[1].strip()
                    monobj.tera_type = tera_type
                elif line.startswith("- "):
                    move = line.split("- ")[1].strip()
                    monobj.moves.append(move)
            mons.append(monobj)
        paste = Paste(url=url, title=title, mons=mons, username=username)
        return paste


def parse_txt_file():
    # Open the pates.txt file
    lines = []
    with open("pastes.txt", "r") as file:
        lines = file.readlines()

    regex_pattern = r"(https:\/\/pokepast\.es\/[^\s]+)"

    links = []
    for line in lines:
        # Parse out the pokepast.es link from the line
        match = re.search(regex_pattern, line)
        if match:
            links.append(match.group(0))
    return links


def parse_json_file() -> List[Tuple[str, str]]:
    # Parse vr-battlefy.json; extract all the pokepastes
    with open("vr-battlefy.json", "r") as f:
        data = json.load(f)

    # List of entries, each entry is a tuple of (username, paste_url)
    entries: List[Tuple[str, str]] = []

    for item in data:
        username = item["captain"]["username"]
        custom_fields = item["customFields"]
        for field in custom_fields:
            if field["value"].startswith("https://pokepast.es/"):
                # Strip any spaces from the end of the URL
                field["value"] = field["value"].split(" ")[0].strip()
                # Remove any URL parameters
                field["value"] = field["value"].split("?")[0]
                entries.append((username, field["value"]))
                break
    return entries


async def main() -> int:
    # links = parse_txt_file()
    entries = parse_json_file()

    async with aiohttp.ClientSession() as session:
        tasks = [fetch(session, items[1], items[0]) for items in entries]
        results = await asyncio.gather(*tasks)

    # Uncomment to get list of pastes as CSV.
    # write_csv(results)

    # Get most common mons
    # most_used_mons(results)

    # Get most common sets
    most_used_sets(results)

    return 0


def most_used_sets(results: List[Paste]):
    sets: Dict[str, Dict[Any, Any]] = {}
    for result in results:
        for mon in result.mons:
            if mon.name == "":
                continue
            mon.name = mon.name.lower()
            if mon.name in sets:
                sets[mon.name]["count"] += 1
            else:
                sets[mon.name] = {
                    "count": 1,
                    "move_raw_count": {},
                    "move_percents": {},
                    "ability_raw_count": {},
                    "ability_percents": {},
                    "item_raw_count": {},
                    "item_percents": {},
                    "tera_type_raw_count": {},
                    "tera_type_percents": {},
                }

            # Add the moves to the set
            for move in mon.moves:
                if move in sets[mon.name]["move_raw_count"]:
                    sets[mon.name]["move_raw_count"][move] += 1
                else:
                    sets[mon.name]["move_raw_count"][move] = 1

            # Add the ability to the set
            if mon.ability in sets[mon.name]["ability_raw_count"]:
                sets[mon.name]["ability_raw_count"][mon.ability] += 1
            else:
                sets[mon.name]["ability_raw_count"][mon.ability] = 1

            # Add the item to the set
            if mon.item in sets[mon.name]["item_raw_count"]:
                sets[mon.name]["item_raw_count"][mon.item] += 1
            else:
                sets[mon.name]["item_raw_count"][mon.item] = 1

            # Add the tera type to the set
            if mon.tera_type in sets[mon.name]["tera_type_raw_count"]:
                sets[mon.name]["tera_type_raw_count"][mon.tera_type] += 1
            else:
                sets[mon.name]["tera_type_raw_count"][mon.tera_type] = 1

    # Calculate the percentages
    for mon_name in sets:
        total = sets[mon_name]["count"]
        for move in sets[mon_name]["move_raw_count"]:
            sets[mon_name]["move_percents"][move] = sets[mon_name]["move_raw_count"][move] / total
        for ability in sets[mon_name]["ability_raw_count"]:
            sets[mon_name]["ability_percents"][ability] = sets[mon_name]["ability_raw_count"][ability] / total
        for item in sets[mon_name]["item_raw_count"]:
            sets[mon_name]["item_percents"][item] = sets[mon_name]["item_raw_count"][item] / total
        for tera_type in sets[mon_name]["tera_type_raw_count"]:
            sets[mon_name]["tera_type_percents"][tera_type] = sets[mon_name]["tera_type_raw_count"][tera_type] / total

    # Write to a JSON file
    with open("common_sets.json", "w") as file:
        file.write(json.dumps(sets, indent=4))
    logging.info("Data written to common_sets.json")
    return


def most_used_mons(results: List[Paste]):
    # Get the most used mons
    mons: Dict[Mon, int] = {}
    for result in results:
        for mon in result.mons:
            if mon == "":
                continue
            if mon in mons:
                mons[mon] += 1
            else:
                mons[mon] = 1
    mons_list = sorted(mons.items(), key=lambda x: x[1], reverse=True)
    # Write to text file
    with open("common_mons.txt", "w") as file:
        for item in mons_list:
            file.write(f"{item[0]},{item[1]}\n")

    # Generate most common pairs of 2, 3, and 4 mons
    pairs: Dict[str, int] = {}
    for result in results:
        for i in range(len(result.mons)):
            for j in range(i + 1, len(result.mons)):
                mon1 = result.mons[i].name
                mon2 = result.mons[j].name
                if mon1 == "" or mon2 == "":
                    continue
                if mon1 > mon2:
                    mon1, mon2 = mon2, mon1
                pair = f"{mon1} + {mon2}"
                if pair in pairs:
                    pairs[pair] += 1
                else:
                    pairs[pair] = 1
    pairs_list = sorted(pairs.items(), key=lambda x: x[1], reverse=True)
    with open("common_pairs.txt", "w") as file:
        for pairs_item in pairs_list:
            file.write(f"{pairs_item[0]},{pairs_item[1]}\n")

    # Generate most common triples of 3 mons
    triples: Dict[str, int] = {}
    for result in results:
        for i in range(len(result.mons)):
            for j in range(i + 1, len(result.mons)):
                for k in range(j + 1, len(result.mons)):
                    mon1 = result.mons[i].name
                    mon2 = result.mons[j].name
                    mon3 = result.mons[k].name
                    if mon1 == "" or mon2 == "" or mon3 == "":
                        continue
                    if mon1 > mon2:
                        mon1, mon2 = mon2, mon1
                    if mon2 > mon3:
                        mon2, mon3 = mon3, mon2
                    if mon1 > mon2:
                        mon1, mon2 = mon2, mon1
                    triple = f"{mon1} + {mon2} + {mon3}"
                    if triple in triples:
                        triples[triple] += 1
                    else:
                        triples[triple] = 1
    triples_list = sorted(triples.items(), key=lambda x: x[1], reverse=True)
    with open("common_triples.txt", "w") as file:
        for triple_item in triples_list:
            file.write(f"{triple_item[0]},{triple_item[1]}\n")

    # Generate most common quads of 4 mons
    quads: Dict[str, int] = {}
    for result in results:
        for mon1_ind in range(len(result.mons)):
            for mon2_ind in range(mon1_ind + 1, len(result.mons)):
                for mon3_ind in range(mon2_ind + 1, len(result.mons)):
                    for mond4_ind in range(mon3_ind + 1, len(result.mons)):
                        mon1 = result.mons[mon1_ind].name
                        mon2 = result.mons[mon2_ind].name
                        mon3 = result.mons[mon3_ind].name
                        mon4 = result.mons[mond4_ind].name
                        if mon1 == "" or mon2 == "" or mon3 == "" or mon4 == "":
                            continue
                        if mon1 > mon2:
                            mon1, mon2 = mon2, mon1
                        if mon2 > mon3:
                            mon2, mon3 = mon3, mon2
                        if mon3 > mon4:
                            mon3, mon4 = mon4, mon3
                        if mon2 > mon3:
                            mon2, mon3 = mon3, mon2
                        if mon1 > mon2:
                            mon1, mon2 = mon2, mon1
                        if mon3 > mon4:
                            mon3, mon4 = mon4, mon3
                        quad = f"{mon1} + {mon2} + {mon3} + {mon4}"
                        if quad in quads:
                            quads[quad] += 1
                        else:
                            quads[quad] = 1
    quads_list = sorted(quads.items(), key=lambda x: x[1], reverse=True)
    with open("common_quads.txt", "w") as file:
        for quad_item in quads_list:
            file.write(f"{quad_item[0]},{quad_item[1]}\n")

    return


def write_csv(results):
    # Write results to a CSV
    with open("results.csv", "w") as file:
        file.write("url,username,title,mon1,mon2,mon3,mon4,mon5,mon6\n")
        for result in results:
            # Sort the mons and pad with empty strings if there are less than 6
            mons = sorted([mon.name for mon in result.mons])
            mons.extend([""] * (6 - len(mons)))
            file.write(f"{result.url},{result.username},{result.title},{','.join(mons)}\n")


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
