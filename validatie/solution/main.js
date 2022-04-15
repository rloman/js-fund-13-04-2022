
let re = /^[1-9]\d{3}\s?[A-Z]{2}$/;

function validateForm() {

    let postcode = data.postcode.value;
    let messages = "";

    if(data.address.value.trim() == "") {
        messages += "U dient een geldig huisadres in te voeren\n";
    }

    let resultValidation = re.test(postcode);
    if(!resultValidation) {
        messages += "U dient een geldige postcode (4 cijfers en dan 2 letters) in te voeren!\n";
    }

    if(messages != "") {
        alert(messages);

        return false;
    } else {
        return true;
    }
}
