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
while(counter < 11) { // start block
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
while(counter < 11)

// for loop

for(let i = 0;i<10;i=i+2) {
    console.log("For loop, value of i: "+i);
}

let names  = ["ray"];
names.forEach(element => {
    console.log(element);
});