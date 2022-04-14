let postcode = window.prompt("Voer een postcode in");

// Takeaway
let re = /^\d{4}\s?[a-zA-Z]{2}$/;

let validatieResultaat = re.test(postcode); // boolean result (true of false)

if(validatieResultaat == true) {
    alert("Geldige postcode");
}
else {
    alert("Ongeldige postcode");
}

// re.exec kan de String parsen (uitpakken)
re = /^(\d{4})\s?([a-zA-Z]{2})$/;

if(re.test(postcode) == true)  {

    let [_, cijfers, letters] = re.exec(postcode);
    console.log("De cijfers zijn: "+cijfers);
    console.log("De letters zijn: "+ letters);
}

// Opdracht: lees uit een zin jouw geboortedag, -maand en jaar.
let sentence = "Ik ben Raymond en ben geboren op 09-08-1968";

re = /(\d{1,2})-(\d{1,2})-(\d{1,4})/;

let [_, dag, maand, jaar] = re.exec(sentence);
console.log(dag);
console.log(maand);
console.log(jaar);