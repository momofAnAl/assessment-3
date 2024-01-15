console.log("New profile is connected!")

const colorBtn = document.querySelector('#color');
const placeBtn = document.querySelector('#place');
const ritualBtn = document.querySelector('#ritual');

function clickColor(){
    alert('My favorite color is Green!');
}
function clickPlace(){
    alert('My favorite place is Mountains!');
}
function clickRitual(){
    alert('My favorite ritual is Catholic!')
}

colorBtn.addEventListener('click', clickColor);
placeBtn.addEventListener('click', clickPlace);
ritualBtn.addEventListener('click', clickRitual);