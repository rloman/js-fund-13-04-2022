let bedrijfsnaam = "NCOI";



// kijk, die x hier noemen we een 'parameter'
function kwadraat(x) {
    let result = x*x;

    console.log(bedrijfsnaam+":Kijk, dit is de log");

    return result;
}

function doeNiets() {
    // console.log(result); // vout
    console.log("Kijk, ik doe niets");

    // een functie hoeft niet iets te returnen
}


let vierKw = kwadraat(4); // kijk, die 4 noemen we een 'argument'

console.log(vierKw);

let tweeKw = kwadraat(2);

doeNiets();

let nothing = doeNiets();
console.log(nothing);