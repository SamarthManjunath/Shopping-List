var budget = prompt("Enter your budget");
document.getElementById("budget").innerHTML = "Your total budget is $" + budget;

if (budget >=0 && budget <=50){
	document.getElementById("line1").innerHTML = "You can buy 5 things in groceries";
	document.getElementById("line2").innerHTML = "You can buy 2 things in clothing";
	document.getElementById("line3").innerHTML = "You can buy 1 thing in tech";
}

if (budget >50 && budget <=100){
	document.getElementById("low").innerHTML = "You can buy few things in groceries for $" + budget;

}

if (budget >100 && budget <=150){
	document.getElementById("low").innerHTML = "You can buy few things in groceries for $" + budget;

}

if (budget >150){
	document.getElementById("low").innerHTML = "You can buy few things in groceries for $" + budget;

}

document.getElementById("list_view").innerHTML = "Do you want to see the full list?";

function done(){
	document.getElementById("line1").innerHTML = "Thanks for using the app!";
	var myObj1 = document.getElementById("line2"); 
	var myObj2 = document.getElementById("line3"); 
	var myObj3 = document.getElementById("list_view");
	var myObj4 = document.getElementById("budget");
	var myObj5 = document.getElementById("button1");
	var myObj6 = document.getElementById("button2");
	myObj1.remove();
	myObj2.remove();
	myObj3.remove();
	myObj4.remove();
	myObj5.remove();
	myObj6.remove();
}

function get_groceries(){

	var groceries = { "milk": 2, "tomato": 2, "onion": 2, "bell pepper": 4, "shampoo": 8, "falafel": 6 }
	var appended_list = [];
	for (var i = 0; i <= groceries.length; i++){
		appended_list.push(groceries);
	}

}

function get_clothing(){
var groceries = { "milk": 2, "tomato": 2, "onion": 2, "bell pepper": 4, "shampoo": 8, "falafel": 6 }
	return groceries;
}

function get_tech(){
var groceries = { "milk": 2, "tomato": 2, "onion": 2, "bell pepper": 4, "shampoo": 8, "falafel": 6 }
	return groceries;
}

function show(budget){

	if (budget >=0 && budget <=50){
		document.getElementById("line1").innerHTML = get_groceries();
		document.getElementById("line2").innnerHTML = get_clothing();
		document.getElementById("line3").innerHTML = get_tech();
	}
}
function show_list(){
	show(budget); 
}



