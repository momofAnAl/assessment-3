console.log("hello world");

let form = document.querySelector('#contact');
const imageClick = document.querySelector('#image-click');

function mouseover() {
	alert('You are in the right track!');
}

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted sucessfully!');
}

form.addEventListener('submit', handleSubmit);
imageClick.addEventListener('mouseover', mouseover);