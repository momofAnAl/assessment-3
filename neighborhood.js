console.log("Welcome to the NeighborHood");

const restaurantsBtn = document.querySelector('#restaurants');
const parksBtn = document.querySelector('#parks');
const communityBtn = document.querySelector('#community');

function randomRes () {
    var restaurants = ["Duke's Seafood", "Greenlake Bar&Grill", "Noi-Thai Cuisine", "EightRow"];
    const randomRestaurant = Math.floor(Math.random() * restaurants.length);
    alert(restaurants[randomRestaurant]);
}

restaurantsBtn.addEventListener('click', randomRes);