function buttonClicked() {
    let element = document.getElementById("content");
    element.innerHTML="This is the replacement :-)";
}

function setColor(event) {
    let element = document.getElementById("content");
    let color = document.getElementById("color").value;
    element.style.backgroundColor=color;

    alert(event);
}