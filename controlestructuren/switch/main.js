let maand = 3;

let aantalDagen;

/*
if(maand==1) {
    aantalDagen = 31;
} else {
    if(maand == 2) {
        aantalDagen = 28;
    } else {
        if(maand == 3) {
            aantalDagen = 31;
        } else {
            if(maand == 4) {
                aantalDagen = 30;
            }
        }
    }
} // kan dus vervangen worden door
*/

maand = 314;
// met switch
switch (maand) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        aantalDagen = 31;
        break; // springt achter het einde van de switch (achter de accolade)
    case 2:
        aantalDagen = 28;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        aantalDagen = 30;
        break;
    default:
        aantalDagen = -1;
        break;
}

console.log("Deze maand heeft: " + aantalDagen + " dagen.");