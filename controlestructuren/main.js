// controlestructuren zoals if ...


// we spelen alsof dit van een window.prompt komt
// let myString = window.prompt("Is it spring?");

// let spring = (myString === 'true');

let spring = window.confirm("Is it spring?");

if(spring) {
    alert("Ik ga lekker zwemmen");
} else {
    alert("Ik ga lekker schaatsen");
}

// dit is de declaration
let age;



// dit is de initialisatie
age = 45;
if(age < 55) {
    console.log("u bent nog jong");
}else {
    console.log("U bent een jongere oudere!");
}

// combinaties van boolean expressies

/*
    logische and is in JavaScript:     &&
    logische  or is in JavaScript:     || 
    logische not is in JavaScript:      !   (uitroepteken)
*/

// 
// dit is een herinit.
age = 15;

age = parseInt(window.prompt("Wat is uw leeftijd?"));

if(age >= 18  && window.confirm("Heb je het met je ouders overlegt???")) {
    // doe iets als je jonger
    alert("U bent nu welkom in ons cafe");
} else {
    alert("Kom volgend jaar maar weer een keer buurten ... ");
}

age = 103;


