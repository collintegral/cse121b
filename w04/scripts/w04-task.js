/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};

myProfile.name = "Collin Christensen";
myProfile.photo = "images/profilepic.jpg";
myProfile.favoriteFoods = ["Curry", "Ribs", "Tteokbokki", "Raspberry Scone", "Crusty Bread", "Gyro"];
myProfile.hobbies = ["Reading", "Board Games", "Programming", "Singing"];
myProfile.placesLived = [];


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({place: "York, PA", length: "4 years"}, {place: "Kansas City, KS", length: "16 years"}, {place: "Tempe, AZ", length: "2 years"});


/* DOM Manipulation - Output */
/* Name */
document.getElementById("name").textContent = myProfile.name;
/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/
console.log(myProfile.favoriteFoods);
myProfile.favoriteFoods.forEach(food => {
        let newLi = document.createElement("li");
        newLi.textContent = food;
        document.getElementById("favorite-foods").appendChild(newLi);
    });

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
        let newLi = document.createElement("li");
        newLi.textContent = hobby;
        document.getElementById("hobbies").appendChild(newLi);
    });

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
        let newDt = document.createElement("dt");
        let newDd = document.createElement("dd");
        newDt.textContent = place.place;
        newDd.textContent = place.length;
        document.getElementById("places-lived").appendChild(newDt);
        document.getElementById("places-lived").appendChild(newDd);
    });

