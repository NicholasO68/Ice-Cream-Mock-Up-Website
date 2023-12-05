"use strict";

let qString = location.search.slice(1);

qString = qString.replace(/\+/g, " ");
qString = decodeURIComponent(qString);

//Putting in the ice cream price
const vanillacost = 3;
const chocolatecost = 3;
const strawberrycost = 3;
const bluemooncost = 5;
const sherbertcost = 5;

//Sets up the page when it loads
window.addEventListener("load", createLightbox)
window.addEventListener("change", ratingClick);
window.addEventListener("load", ratingSet);

////Validates the dates entered when the submit button is Clicked
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", calculateDate);
submitButton.addEventListener("click", getCost);



function createLightbox(){
	//Lightbox Container
	let Lightbox = document.getElementById("lightbox");
	
	//Parts of the Lightbox
	let icTitle = document.createElement("h1");
	let sourceOne = document.createElement("div");
	let linkOne = document.createElement("div");
	let sourceTwo = document.createElement("div")
	let linkTwo = document.createElement("div");
	let sourceThree = document.createElement("div")
	let linkThree = document.createElement("div");
	
	lightbox.appendChild(icTitle);
	icTitle.id = "icTitle";
	icTitle.textContent = webTitle;
	
	lightbox.appendChild(sourceOne);
	sourceOne.id = "sourceOne";
	sourceOne.textContent = firstWebSource;
	
	lightbox.appendChild(linkOne);
	linkOne.id = "linkOne";
	linkOne.textContent = firstWeblink;
	
	lightbox.appendChild(sourceTwo);
	sourceTwo.id = "sourceTwo";
	sourceTwo.textContent = secondWebSource;
	
	lightbox.appendChild(linkTwo);
	linkTwo.id = "linkTwo";
	linkTwo.textContent = secondWeblink;
	
	lightbox.appendChild(sourceThree);
	sourceThree.id = "sourceThree";
	sourceThree.textContent = thirdWebSource;
	
	lightbox.appendChild(linkThree);
	linkThree.id = "linkThree";
	linkThree.textContent = thirdWeblink;
}
function validateName(){
	let cName = document.getElementById("customer");
	 if (cName === "") {
    window.alert("Enter your name");
    return false;
  }
}

function validateAddress(){
	let cAddress = document.getElementById("address");
	 if (cAddress === "") {
    window.alert("Enter your Address");
    return false;
  }
}

//Creates the Estimated Cost
function getCost(){
	let realCost = 0;
	
	if(document.getElementById("vanilla").checked == true){
			realCost = vanillacost 
			document.getElementById("cost").innerHTML = "Total Cost: $" + realCost;
			return false
	}
	else if	(document.getElementById("chocolate").checked == true){
			realCost = chocolatecost 
			document.getElementById("cost").innerHTML = "Total Cost: $" + realCost;
			return false
	}
	else if	(document.getElementById("strawberry").checked == true){
			realCost = strawberrycost 
			document.getElementById("cost").innerHTML = "Total Cost: $" + realCost;
			return false
	}
	else if	(document.getElementById("blue").checked == true){
			realCost = bluemooncost
			document.getElementById("cost").innerHTML = "Total Cost: $" + realCost;
			return false
	}
	else if	(document.getElementById("sherbert").checked == true){
			realCost = sherbertcost 
			document.getElementById("cost").innerHTML = "Total Cost: $" + realCost;
			return false
	}
	else{
		return false
	}
	 
	
	
	
	
}

//Sets up the Default Values for the Ratings Page
function ratingSet(){

document.getElementById("great").checked = false;
document.getElementById("good").checked = false;
document.getElementById("bad").checked = false;

document.getElementById("great").onClick = ratingClick();
document.getElementById("good").onClick = ratingClick();
document.getElementById("bad").onClick = ratingClick();
}

//Gives out a response to the review when clicked
function ratingClick(){
	if (document.getElementById("amazing").checked == true){
		document.getElementById("result").innerHTML = "Glad to hear you had a wonderful experience!";
		return false;
	}
	else if (document.getElementById("great").checked == true){
		document.getElementById("result").innerHTML = "Glad to hear you had a enjoyable experience!";
		return false;
	}
		
	else if (document.getElementById("good").checked == true){
		document.getElementById("result").innerHTML = "Glad to hear you had a nice experience!";
		return false;
	}
	else if (document.getElementById("ok").checked == true){
		document.getElementById("result").innerHTML = "Glad to hear you had an alright experience!";
		return false;
	}

	else if (document.getElementById("bad").checked == true){
		document.getElementById("result").innerHTML = "We apologize for the poor experience...";
		return false;
	}

}

function calculateDate(){
	let valDay = document.getElementById("day").value
	let valMonth = document.getElementById("month").value
	let valYear = document.getElementById("year").value
	
	let convertMonth = 0.0328767
	let convertYear = 0.083
	
	let trueMonth = valDay * convertMonth 
	let trueYear = valMonth * convertYear
	
	document.getElementById("trueDate").innerHTML = "Estimated Date: " + valDay + " days, " + trueMonth + " months and " + trueYear + " years "
}

function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
 