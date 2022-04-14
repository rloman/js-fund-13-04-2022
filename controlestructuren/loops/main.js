// while

/*

The while loop is een manier om herhalingen te bouwen.
D.m.v. de while loop wordt iets altijd 0 of vaker uitgevoerd
*/

// syntax
/*
while(<booleanExpression>) {
    block die uitgevoerd wordt als booleanExpression waar is
}
*/

let counter = 1;
while (counter < 11) { // start block
    console.log(counter);
    counter++;
} // eind block


// do while
/*
the do while loop wordt van 1x of vaker uitgevoerd
*/
console.log("Start met de do while");
counter = 45;
do {
    console.log(counter);
    counter += 2;
}
while (counter < 11)

// for loop

/*

Syntax van een basic for loop
for(<initialisatie>;<booleanExpression>;<incrementStep>) {
    
    1) Als de booleanExpressie waar is
       Dan wordt het block uitgevoerd
    Daarna voert de machine de incrementStep uit
    GOTO 1
}
*/
console.log("Nu de for loop")
for (let cijfer = 0; cijfer < 10; cijfer = cijfer + 1) {
    console.log("For loop, value of i: " + cijfer);
}

for(let cijfer = 10;cijfer > 0;cijfer = cijfer + 1) {
    console.log("For loop, value of i: " + cijfer);
}
