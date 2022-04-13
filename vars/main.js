
// heeel oude manier
number = 42;
river = "Mississippi";

console.log(number);
console.log(river);

// iets beter is


/*
Als je een variable declareert met 'var' dan leeft die variabele vanaf daar 
tot het einde van het programma
*/
var leeftijd = 53;


console.log(leeftijd);
// de beste manier om een locale scoped variable te declareren is:

/*
Als je een variabele declareert met 'let' dan leeft die variabele vanaf daar
tot het einde van het huidige block
*/
{
    let familyName = "Jansen";
    var nogWelBekend = 101;

    console.log("In het block is familyName: "+familyName);
    // dus familyName is nu offscope
}

console.log(nogWelBekend);
// console.log(familyName);


let datum=window.prompt("Wat is de huidige datum?");

alert(window.prompt("Please enter your name"));

console.log("De datum is: "+datum);

var num1 = "200A";
console.log(typeof(num1));

num1 = 13;
console.log(typeof(num1));

//boolean
/*
    Dr. Boole
*/

let female = true;
female = false;

if(female) {
    console.log("is female");
} else {
    console.log("is male");
}


// voorbeeld van de modulus operator

let aantalMinutenAfterMidnight = 133;
// use: druk af uur:minuten (hh:mm) iets als: 02:30

let hours = parseInt(aantalMinutenAfterMidnight / 60) ;
let minutes = aantalMinutenAfterMidnight % 60;

console.log(hours+":"+minutes);




