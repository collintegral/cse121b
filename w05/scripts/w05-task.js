/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const DisplayTemples = (temples => {
    temples.forEach(temple =>
        {
            let article = document.createElement("article");

            let h3 = document.createElement("h3");
            h3.textContent = temple.templeName;

            let img = document.createElement("img");
            img.setAttribute("src", temple.imageUrl);
            img.setAttribute("alt", temple.location);

            article.appendChild(h3);
            article.appendChild(img);

            templesElement.appendChild(article);
        });
});

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    templeList = await response.json();

    DisplayTemples(templeList);
}

/* reset Function */
function reset()
{
    templesElement.replaceChildren();
}

/* filterTemples Function */
function filterTemples(temples)
{
    reset();
    let filter = document.getElementById("filtered").value;

    switch (filter) {
        case "utah":
            DisplayTemples(temples.filter(temple => temple.location.toLowerCase().includes( "utah")));
            break;
        case "notutah":
            DisplayTemples(temples.filter(temple => !temple.location.toLowerCase().includes("utah")));
            break;
        case "older":
            DisplayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0 ,1)));
            break;
        default:
            DisplayTemples(temples);
            break;
    }
}

document.getElementById("filtered").addEventListener("change", () => {filterTemples(templeList)});

getTemples();


/* Event Listener */
