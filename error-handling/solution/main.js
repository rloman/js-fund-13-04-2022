
// deel a op b en gooi exceptie als b een zero (nul) is
function delen(a,b) {
    if(b == 0) {
        throw ("Delen door nul is flauwekul!");
    }
    return a/b;
}

console.log(delen(3,4));
try {
    console.log(delen(3,0));
}
catch(message) {
    // error handler
    console.log("Das jammer ... ");
    console.log(message);

    // probeer het probleem eventueel te fixen
    throw message;
}

console.log("Einde programma");




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
