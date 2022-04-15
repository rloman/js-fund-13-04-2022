function changeAddress() {
    let element = document.getElementById("address");

    element.value = "My new address";

    cleanAllInputFields();
}

function cleanAllInputFields() {
    let alleInputVelden = document.getElementsByTagName("input");

    for(let element of alleInputVelden) {
        element.value = "";
    }

    alleInputVelden = document.getElementsByClassName("info");

    for(let element of alleInputVelden) {
        element.value = "Voer een waarde in";
    }

    document.getElementById("first").style.backgroundColor="#ff0066";

}