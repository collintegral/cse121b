const monsterDisplayElement = document.getElementById("monstersDisplay");
const filterDrop = document.getElementById("filtered");
const MAXMONSTERSSHOWN = 20;

let monsterUrl = "https://www.dnd5eapi.co/api/monsters/";
let monsterNumber = 0;
let monsterDetailList = [];
let monsterDetailSection = [];

var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

const getMonsters = async () => {
    const response = await fetch(monsterUrl, requestOptions);
    let monsterList = await response.json();
    monsterNumber = monsterList.count;

    for (const monster of monsterList.results) {
        const response = await fetch(`${monsterUrl}${monster.index}`);
        let monsterData = await response.json();
        monsterDetailList.push(monsterData);
    }

    reset();
    filterDrop.disabled = false;
    randomMonsters();
    displayMonsters();
}


function randomMonsters() 
{
    monsterDetailSection = [];
    let tempMonsterList = getShuffledMonsters(monsterDetailList);

    for (let i = 0; i < MAXMONSTERSSHOWN; i++) {
        monsterDetailSection.push(tempMonsterList[i]);
    }
}


function randomFilteredMonsters(levelFilter)
{
    monsterDetailSection = [];
    let filteredMonsterList = [];

    if (levelFilter == .5)
    {
        filteredMonsterList = monsterDetailList.filter(monster => monster.challenge_rating < levelFilter);
    }
    else if (levelFilter == 21)
    {
        filteredMonsterList = monsterDetailList.filter(monster => monster.challenge_rating > levelFilter);
    }
    else
    {
        filteredMonsterList = monsterDetailList.filter(monster => monster.challenge_rating == levelFilter);
    }

    let tempMonsterList = getShuffledMonsters(filteredMonsterList);

    for (let i = 0; i < MAXMONSTERSSHOWN; i++) {
        let nextMonster = tempMonsterList[Math.floor(Math.random() * (tempMonsterList.length))];
        monsterDetailSection.push(nextMonster);
    }
}

function getShuffledMonsters(tempArray) 
{
    let m = tempArray.length, tempVar, i;

    while (m) {
        i = Math.floor(Math.random() * m--);

        tempVar = tempArray[m];
        tempArray[m] = tempArray[i];
        tempArray[i] = tempVar;
    }

    return tempArray;
}


function FilterMonsters()
{
    reset();
    let filter = filterDrop.value;
    console.log(Number(filter.split("el")[1]));
    let filterNum;

    switch(filter) {
        case "all":
            filterNum = 0;
            break;
        default:
            filterNum = Number(filter.split("el")[1]);
    }

    if (filterNum == 0) {
        randomMonsters();
        displayMonsters();
    }
    else {
        randomFilteredMonsters(filterNum);
        displayMonsters();
    }
}


function reset()
{
    monsterDisplayElement.replaceChildren();
}


function displayMonsters ()
{
    if (monsterDetailSection[0] != undefined)
    {
        monsterDetailSection.forEach(monster =>
        {
            let article = document.createElement("article");

            let h3 = document.createElement("h3");
            h3.textContent = monster.name;

            let hp = document.createElement("h4");
            let ac = document.createElement("h4");
            let cr = document.createElement("h4");
            
            hp.textContent = `HP: ${monster.hit_points}`
            ac.textContent = `AC: ${monster.armor_class[0].value}`
            cr.textContent = `CR: ${monster.challenge_rating}`;
        
            article.appendChild(h3);
            article.appendChild(hp);
            article.appendChild(ac);
            article.appendChild(cr);


            monsterDisplayElement.appendChild(article);
        });
    }
}


function capitalizeString(string)
{
    let stringArray = string.split("/-| /");
    let capArray = [];

    stringArray.forEach(word => {
        let capWord = word.charAt(0).toUpperCase() + word.slice(1);
        capArray.push(capWord);
    });

    return capArray.join();
}

filterDrop.disabled = true;

let h1 = document.createElement("h1");
h1.textContent = "Loading Monsters...";
monsterDisplayElement.appendChild(h1);

filterDrop.addEventListener("change", () => {FilterMonsters()});

getMonsters();