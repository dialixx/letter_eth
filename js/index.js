var letter;
var words = [];

function pushletter() {
	var templetter = document.getElementById("letter").value;
	var TLup = templetter.toUpperCase();
	var TLdown = templetter.toLowerCase();
	
	var letterincrement = 0;
	
	if(templetter.length == 1 && TLup != TLdown) {
		letter = TLup;
		words = [];
		letterincrement += 1;
		
		document.getElementById("pword").style.display = "block";
		document.getElementById("list").style.display = "none";
		
		document.getElementById("sletter").innerHTML = " Your current letter is " + TLup + ".";
		document.getElementById("list").innerHTML = "Letter number " + letterincrement + "...";
	} else {
		document.getElementById("sletter").innerHTML = " Invalid input. Please insert a letter.";
	}
}

function pushword() {
	var tempword1 = document.getElementById("word").value;
	var templetter = tempword1.charAt(0);
	var firstletter = templetter.toUpperCase();
	
	var tempword2 = tempword1.toLowerCase();
	
	if(firstletter == letter && !(words.includes(tempword2))) {
		words.push(tempword2);
		
		document.getElementById("list").innerHTML += "<br>" + tempword2;
		document.getElementById("list").style.display = "block";
		document.getElementById("sword").innerHTML = ""
	} else {
		document.getElementById("sword").innerHTML = "Please enter a valid word."
	}
}


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