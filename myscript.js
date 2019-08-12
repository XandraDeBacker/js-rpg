import Person from '/character.js';

let player1= new Person ("elf", "sword");
console.log ("elf", "sword");


//Vraag: Save the inputs inside variables/an object, and use them to initiate new characters for both players:
//Antwoord:
//Maak een submitbtn in html om in js te gebruiken en volgende functie te schrijven.
//functie (woord)submitData1/2 heb ik zelf geschreven en zal taak uitvoeren.
//Create button://
let submitbtn1=document.getElementById("submit1");
submitbtn1.addEventListener("click",submitData1);
let myItem1=document.getElementById("Item1")
let myBeing1=document.getElementById("Being1");
function submitData1(event) {
  // event.preventDefault();v
  console.log("test");
//Create player 1 name with placeholder
let p1Name=document.getElementById("p1Name").value;
console.log (p1Name);
//Create player 1 items choise from dropdownbox:
let selection1a = document.getElementById("select1a").selectedIndex;
let chozen1a = document.getElementsByClassName("s1a")[selection1a].value;
myItem1.innerHTML=chozen1a;

//Create player 1 being choise from dropdownbox
let selection1b = document.getElementById("select1b").selectedIndex;
let chozen1b = document.getElementsByClassName("s1b")[selection1b].value;

// myBeing1.innerHTML=chozen1b; (nu niet meer nodig omdat het woord voor gekozen selectie niet meer zichtbaar hoeft te zijn nadat de foto er bijgekomen is.)

let playground1 = document.getElementById ("show1")
playground1.style.display='block';

if (chozen1b == "human"){
  document.getElementById("img1").src="images/human.gif";
  document.getElementById("img1").style.display="block";

}else if (chozen1b == "orc"){
  document.getElementById("img1").src="images/orc.gif";
  document.getElementById("img1").style.display="block";
}else if (chozen1b == "vampire"){
  document.getElementById("img1").src="images/vampire.gif";
  document.getElementById("img1").style.display="block";
}else {
  document.getElementById("img1").src="images/elf.gif";
  document.getElementById("img1").style.display="block";
}
//var gemaakt van field om na keuze te zetten op niet zichtbaar:
let f1 = document.getElementById ("field1");
f1.style.display="none";
let pnl1 = document.getElementById("panel1");
pnl1.style.display="block";





}

//Create btn player 2
let submitbtn2=document.getElementById('submit2');
submitbtn2.addEventListener("click",submitData2);
let myItem2=document.getElementById('Item2')
let myBeing2=document.getElementById("Being2");
// submitbtn.addEventListener("click",checkPassword);
function submitData2(event) {
  // event.preventDefault();
  console.log("test");
// Create name placeholder player 2
let p2Name=document.getElementById('p2Name').value;
console.log (p2Name);

// create player 2 items choise from dropdownbox
let selection2a = document.getElementById("select2a").selectedIndex;
let chozen2a = document.getElementsByClassName ("s2a")[selection2a].value;
myItem2.innerHTML=chozen2a;

//Create player 2 being choise from dropdownbox
let selection2b = document.getElementById("select2b").selectedIndex;
let chozen2b = document.getElementsByClassName("s2b")[selection2b].value;
//var gemaakt van show om pas zichtbaar te zijn (plaats in te nemen na keuze:)
let playground2 = document.getElementById ("show2")
playground2.style.display='block';

//myBeing2.innerHTML=chozen2b; (eerst gemaakt om de keuze in woordvorm weer te geven,
//maar verwijderd na aanmaak show foto na keuze met "else if":)

if (chozen2b == "human"){
  document.getElementById("img2").src="images/human.gif";
  document.getElementById("img2").style.display="block";
}else if (chozen2b == "orc"){
  document.getElementById("img2").src="images/orc.gif";
  document.getElementById("img2").style.display="block";
}else if (chozen2b == "vampire"){
  document.getElementById("img2").src="images/vampire.gif";
  document.getElementById("img2").style.display="block";
}else {
  document.getElementById("img2").src="images/elf.gif";
  document.getElementById("img2").style.display="block";
}
//var gemaakt van field om na keuze te zetten op niet zichtbaar:
let f2 = document.getElementById ("field2");
f2.style.display="none";

let pnl2 = document.getElementById("panel2");
pnl2.style.display="block";

let logging = document.getElementById("log");
logging.style.display="block";

}
