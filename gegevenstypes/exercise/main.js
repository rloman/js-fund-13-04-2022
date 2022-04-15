// use case: voer een getal in, en valideer die, d.w.z. check of het een number is

let invoer = "monkey"; // string


if(isNaN(invoer)) {
    console.log("invoer is geen getal!");
}
else {
    let getal = parseInt(invoer); // Number
    console.log(getal+1);
}

console.log(invoer.substring(2,4) == "nk");
console.log(invoer.substring(4,3) == "k");
console.log(invoer.substring(4,2) == "nk");

... exercise:
druk de 1e t/m het 3e karakter af van invoer

// Takeaway: weet dat er een class Math is met allerlei wiskunde handigheden
console.log(Math.PI);



// Exercise datatypes
/*
Maak een lijst van namen (strings)
Roep een functie aan die die namen als parameter ontvangt
Die functie returned een array met de namen allemaal in hoofdletter

print dan die namen in console.log of document.write

Of doe de oefening uit het boekje

*/
