function* generateEvenNumbers(start, end) {
    let base = Math.floor(start / 2) * 2; // :-)

    while (base < end) {
        console.log("Ben nu in de generator function");
        yield base += 2;
    }
}

const gen = generateEvenNumbers(5, 26);

for (let value = gen.next().value; value != undefined; value = gen.next().value) {
    console.log(value);
}


