
// deel a op b en gooi exceptie als b een zero (nul) is
// fix the error in the function
function delen(a,b) {
    if(b == 0) {
        ...a.. ("Delen door nul is flauwekul!");
    }
    return a/b;
}

function printAndReturnLengthOfNames(names) {
    let counter = 0;
    for(let name of names) {
        if(name!=null && name != "") {
            console.log("The name is: "+name);
            counter++;
        }
        else {
            // Take away
            throw("U mag geen lege namen geven");
        }
    }

    return counter;
}

try {
    console.log(delen(3,4));
}
catch(e) {
    console.error(e);
}

try {
    console.log(delen(3,0));
}
catch(e) {
    console.error(e);
}

try {
    console.log(delen(3,4));
}
catch(e) {
    console.error(e);
}


// dit is eigenlijk een invoer van de gebruiker.
let namen = ["Aap", "Noot", "", "Mies", "Poedel"];

try {
    let aantalLeden = printAndReturnLengthOfNames(namen);
    console.log("het aantal leden is: "+aantalLeden);
}
catch(e) {
    console.error("He eh ... wat is dat voor lege naam!");
}

// gaat happy verder
console.log("Succesvol einde van het programma!");

{
    // let op: let ::= scope in block
    //         var ::= scope ook buiten het block
    var lastName = "Loman";
    let firstName = "Raymond";
}

console.log(lastName);
// console.log(firstName); // error: firstName is out of scope now
