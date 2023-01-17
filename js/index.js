var letter;
var words = [];

var letterincrement = 0;

//the data for dictionary is in words.js. screw json

/*
-check if there is input
-check if input is a letter
-check if input is different from currently inserted letter

-if above conditions are true...
	-convert letter to uppercase
	-insert letter
	-increment letter number
	-update letter span with new letter
	-show word insertion tool
	
-if conditions are false, direct the user to the first error found in the input within the following list:
	-no input
	-input not letter
	-input is same as current letter
*/
function pushletter() {
	var templetter = document.getElementById("letter").value;
	var TLup = templetter.toUpperCase();
	
	if(TLup == "") {
		document.getElementById("sletter").innerHTML = "There is no input.";
	} else if(TLup == TLup.toLowerCase()) {
		document.getElementById("sletter").innerHTML = "Input must be a letter.";
	} else if(TLup == "ETH") {
		document.getElementById("sletter").innerHTML = "The secret letter...";
		document.getElementById("eth").style.display = "block";
	} else if(TLup.length > 1) {
		document.getElementById("sletter").innerHTML = "Input is longer than one letter.";
	} else if(TLup == letter) {
		document.getElementById("sletter").innerHTML = "Letter must be different than current.";
	} else {
		letter = TLup;
		letterincrement += 1;
		words = [];
		
		document.getElementById("sletter").innerHTML = "Your current letter is " + letter + "."
		document.getElementById("pword").style.display = "block";
		document.getElementById("list").innerHTML = "Letter number " + letterincrement + "...";
	}
}

/*
-check if there is input
-check if input is a word in the english language
-check if word begins with chosen letter
-check if word is already used

-if above conditions are true...
	-convert word to lowercase
	-add word to list
	-update word span to empty
	-show word list
	
-if conditions are false, direct the user to the first error found in the input within the following list:
	-no input
	-input not an english word
	-input does not begin with inserted letter
	-input is same as word within list
*/
function pushword() {
	var tempword = document.getElementById("word").value;
	tempword = tempword.toLowerCase();
	var firstletter = tempword.charAt(0);
	firstletter = firstletter.toUpperCase();
	
	if(tempword == "luthier") {
		document.getElementById("sword").innerHTML = "A six letter word, for sure.";
		document.getElementById("luthier").style.display = "block";
		
		if(firstletter == letter && !(words.includes("luthier"))) {
			words.push("luthier");
			
			document.getElementById("list").style.display = "block";
			document.getElementById("list").innerHTML += "<br>luthier";
		}
	} else if(tempword == "egg") {
		document.getElementById("sword").innerHTML = "Egg?";
		document.getElementById("egg").style.display = "block";
		
		if(firstletter == letter && !(words.includes("egg"))) {
			words.push("egg");
			
			document.getElementById("list").style.display = "block";
			document.getElementById("list").innerHTML += "<br>egg";
		}
	} else if(tempword == "invisible") {
		document.getElementById("sword").innerHTML = "";
		document.getElementById("invisible").style.display = "block";
		
		if(firstletter == letter && !(words.includes("invisible"))) {
			words.push("invisible");
			
			document.getElementById("list").style.display = "block";
			document.getElementById("list").innerHTML += "<br>invisible";
		}
	} else if(tempword == "journalfry") {
		document.getElementById("sword").innerHTML = "You cannot grasp my true form!";
		document.getElementById("journalfry").style.display = "block";
		
		if(firstletter == letter && !(words.includes("journalfry"))) {
			words.push("journalfry");
			
			document.getElementById("list").style.display = "block";
			document.getElementById("list").innerHTML += "<br>journalfry";
		}
	} else if(tempword == "sideways dog") {
		document.getElementById("sword").innerHTML = "A dog... aligned with the Z axis!?";
		document.getElementById("sidewaysdog").style.display = "block";
	} else if(tempword == "") {
		document.getElementById("sword").innerHTML = "There is no input.";
	} else if(!(dictionary.includes(tempword))) {
		document.getElementById("sword").innerHTML = "Word is not in the English dictionary.";
	} else if(firstletter != letter) {
		document.getElementById("sword").innerHTML = "Word does not begin with chosen letter.";
	} else if(words.includes(tempword)) {
		document.getElementById("sword").innerHTML = "Word has already been used.";
	} else {
		words.push(tempword);
		
		document.getElementById("sword").innerHTML = "";
		document.getElementById("list").style.display = "block";
		document.getElementById("list").innerHTML += "<br>" + tempword;
	}
}

//listen for the press of an enter key in each field, and upon enter press, trigger the event that corresponding to that input's button
var inputletter = document.getElementById("letter");
var inputword = document.getElementById("word");

inputletter.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
		document.getElementById("letterbutton").click();
	}
});

inputword.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
		document.getElementById("wordbutton").click();
	}
});

//function for hiding a used id
function hideid(id) {
	document.getElementById(id).style.display = "none";
}