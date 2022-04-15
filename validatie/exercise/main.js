
let re = /\d{4}\s?[A-Z]{2}/;

function validateForm() {

    let postcode = data.postcode.value;
    let messages = "";

    if(data.address.value.trim() == "") {
        ...maak foutmelding langer ... 
    }

    let resultValidation = re.....
    if(resultValidation == false) {
        messages += "U dient een geldige postcode (4 cijfers en dan 2 letters) in te voeren!\n";
    }

    if(messages != "") {
        alert(messages);

        return false;
    } else {
        return true;
    }
}
