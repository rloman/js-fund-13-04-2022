let training = {};

training.afstand = 13;
training.datum = "12-04-2022";
training.duur = 65;

console.log(training);
console.log(typeof(training));
console.table(training);

console.log(training.afstand);

// associatieve array
console.log(training["afstand"]);

// wat zijn de eigenschappen van het training Object
for(let property in training) {
    console.log("training has property: "+property);
    console.log(
        "Training zijn property "+property+" heeft waarde: "
        +training[property]);
}

let training2 = {};
training2.afstand = 17;
training2.datum = "15-04-2022";
training2.duur = 90;

let trainings = [training, training2];

/* Oefening
Maak een object van je eigen hobby (of verzin een hobby)
geef dat object drie eigenschappen (properties)
console.log iets van dat object
maak nog een object van hetzelfde type
voeg beide gemaakte objecten toe in een array

maak een loop over die array

/*
let op het verschil van 'in' en 'of'
*/
for(let trainingElement of trainings) {
    console.log("TrainingElement heeft afstand: "+trainingElement.afstand);
}

// sender
let jsonString = JSON.stringify(trainings);

console.log(jsonString);

// ontvanger
let geparsteTrainings = JSON.parse(jsonString);

// dat gebruiken we hedendaags ENORM veel in REST services

console.log(geparsteTrainings.datum);

let persoon = {};
persoon.training = training2;

let personen = [persoon, persoon];
console.log(JSON.stringify(persoon));

