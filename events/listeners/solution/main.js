function init() {

    
    let knopjes = document.getElementsByClassName("clicker");
    
    
    let index = 0;
    for(let knopje of knopjes) { // knopje is een button
        knopje.value += (index++);
        knopje.addEventListener('click', myEventListener);
    }

    // demo, Takeaway: dit is een 'anonieme functie'
    document.getElementById("button4").addEventListener('click', function() {
        document.write("You clicked button4");
    } );
}




// die e hier is een event.
// uit die e kun je uithalen wat de 'target' (de knop waar je op clickte) was
// en uit die knop kun je dan weer halen wat de value van die knop is.
function myEventListener(e) {
    alert("You clicked me" + e.target.value);
    console.log(e);
}

function myBlur() {
    alert("You left me");
}