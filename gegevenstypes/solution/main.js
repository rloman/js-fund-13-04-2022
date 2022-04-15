

// deze functie levert true op als het een geheel getal is, anders false
// getal ::= een float (dus kan 4.0, 3, 3.55, 3.1415, etc. zijn)
function isGeheelGetal(getal) {

    let resultAsBoolean = Math.floor(getal) == Math.ceil(getal);
    return resultAsBoolean;
}

// use case: voer een getal in, en valideer die, d.w.z. check of het een number is

let invoer = "monkey"; // string


if(isNaN(invoer)) {
    console.log("invoer is geen getal!");
}
else {
    let getal = parseInt(invoer); // Number
    console.log(getal+1);
}

// use case: ik wil omzetten naar hoofdletters
// vout: als ik denk dat invoer.toUppercase de waarde van invoer veranderd... nee dus.
let invoerGroot = invoer.toUpperCase();
console.log(invoer);
console.log(invoerGroot);

console.log(invoer.length == 6);

console.log(invoer.substring(2,4) == "nk");
console.log(invoer.substring(4,3) == "k");
console.log(invoer.substring(4,2) == "nk");

console.log("NCOI".indexOf("CO") == 1);

// Takeaway: weet dat er een class Math is met allerlei rekentruukjes

console.log(Math.PI);
console.log(Math.E);
console.log(Math.floor(3.5) == 3);
console.log(Math.ceil(3.5) == 4);

// Leuke truuk: als je een getal invoer als float (3.5 als voorbeeld ... of 4.0 of 5) en je wilt controleren
// of dat getal een geheel getal is ...
// dan kun je Math.floor en Math.ceil en als die gelijk is, dan heeft de bezoeker
// een geheel getal ingevoerd.

invoer;//  = parseFloat(window.prompt("Voer een getal in met of zonder decimale punt"));
invoer = 13.0;
console.log(isGeheelGetal(invoer) == true);

invoer = 3.6;
console.log(isGeheelGetal(invoer) == false);

invoer = 3.141592653589;
console.log(isGeheelGetal(invoer) == false);

invoer = 4;
console.log(isGeheelGetal(invoer) == true);

let now = new Date();

console.log(now.getFullYear());


console.log("Vandaag is het: "+now.getDay());
console.log("Vandaag is het: "+now.getDate());

// Exercise datatypes
/*
Maak een lijst van namen (strings)
Roep een functie aan die die namen als parameter ontvangt
Die functie returned een array met de namen allemaal in hoofdletter

print dan die namen in console.log of document.write

Of doe de oefening uit het boekje

*/



let number = 3.5555;
let rounded = number.toFixed(2);
console.log(rounded == 3.56);
console.log(typeof(rounded) == "string");
let roundedNumberAgain = parseFloat(rounded);