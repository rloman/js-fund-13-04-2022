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



function myEventListener(e) {
    alert("You clicked me" + e.target.value);
    console.log(e);
}

function myBlur() {
    alert("You left me");
}