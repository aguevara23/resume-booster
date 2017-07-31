function random(val)
{
return val[Math.floor(Math.random()*val.length)];
}

function capital(str)
{
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function titleCase(str) {
  return str.split(' ').map(function(val){
    return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
  }).join(' ');
}


var job = faker.name.jobTitle();
var fname = faker.name.firstName();
var lname = faker.name.lastName();
var bs = faker.company.bs();
var buzz = faker.company.bsBuzz();
var bsNoun = titleCase(faker.company.bsNoun());
var adj = capital(faker.company.bsAdjective());
var companyName = faker.company.companyName();
var desc = faker.name.jobDescriptor();
var num = faker.random.number() + "th";
var hVerb = capital(faker.hacker.verb());
var hNoun = capital(faker.hacker.noun());
var city = faker.address.city();

var authority = ["Monarch", "Prime Minister", "Dictator"]
var family = ["Father", "Mother", "Son", "Daughter", "Uncle", "Auntie"]
var animals = ["Puppies", "Kittens", "Raccoons", "Armadillos", "Chinchillas", "Salamanders", "Turtles", "Kangaroos", "Ostriches", "Komodo Dragons", "Red Pandas", "Ferrets", "Capybaras", "Bunnies"]
var generations = ["Millenials", "Baby Boomers", "Generation X'ers", "Centennials" ]

var img = [
	"./img/business1.jpg",
	"./img/business2.jpg",
	"./img/business3.jpg",
	"./img/business4.jpg",
	"./img/business5.jpg",
	"./img/business6.jpg",
	"./img/business7.jpg",
	"./img/business8.jpg",
	"./img/business9.jpg",
	"./img/business10.jpg",
]

function conjugation(str){
	var x = str.split("").reverse()[0]
	var t = str.substring(str.length-3, str.length);
	var newStr = str.substring(0, str.length-1);

	if (t == "ate") {
		return newStr + "or";
	} else if (x == "e") {
		return str += "r"
	} else if (x == "y") {
		return newStr + "ier";
	} else if (x == "p") {
		return newStr + "per";
	} else if (x == "t") {
		return newStr + "ter";
	} else if (x == "m") {
		return newStr + "mer";
	} else {
		str += "er";
	}
	return str;
}



var houseName =  "My name is " + fname + " of the House " + lname + ", First of Their Name"
var hackName = conjugation(hVerb) + " of " + hNoun + "s";
var adjName =  "the " + adj
var jobName =  job + " of the " + bsNoun + " of " + companyName;
var authName =  random(authority) + " of " + city ;
var animalName = random(family) + " of " + random(animals);
var generationName = random(family) + " of " + random(generations);
// console.log(hackName)
// console.log(desc);
var str = "\"" + houseName + ", " + adjName + ", " + jobName + ", " + authName + ", " + hackName + ", and " + animalName + ".\"";

// var testString= "generate"
// console.log(testString.substring(testString.length-3, testString.length));
// console.log(conjugation("generate"));
$("#quote").text(str)

$(document).ready(function(){
    $("button").click(function(){
        location.reload(true);
    });
    $("#background").css("background-image", "url(" + random(img) + ")");
});

// ============ THIS COUNTDOWN CODE IS BORROWED FROM W3SCHOOLS =================

// Set the date we're counting down to
var countDownDate = new Date("Jul 16, 2017 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + " Days  " + hours + " Hours  "
  + minutes + " Minutes  " + seconds + " Seconds";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Watch Now On HBO!";
  }
}, 1000);



console.log(str);
