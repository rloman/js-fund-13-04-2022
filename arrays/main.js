let primes = [2, 3, 5, 7, 11, 13];

console.log(primes.length);

console.log("Dit zou 7 moeten zijn: => " + primes[3]);

// Iterate over the array
// Basic for (als je een telvariabele wilt hebben)
for (let i = 0; i < primes.length; i++) {
    console.log("Prime:"+(i+1) + " => " + primes[i]);
}

// Enhanced for (als je geen teller nodig hebt of wilt hebben)
for(let number of primes) {
    console.log("Prime: "+number);
}

// for each
primes.forEach(number => {
    console.log("Prime: "+number);
});


// Multidimensionale array
let arr = [];
for(let i = 1;i<=10;i++) {
    arr[i] = [];
    for(let j = 1;j<=20;j++) {
        arr[i][j] = (i) * (j);
    }
}



for(let i = 1;i<=10;i++) {
    for(let j = 1;j<=20;j++) {
        console.log((j+"x"+i+"="+arr[i][j]).padStart(9, ' '));
    }
}

//Takeaway: zo maak je een array
let numbers = [1,2,3];
let totaal = 0;

// zo loop je er overheen
for(let i = 0;i<numbers.length;i++) {
    let x = numbers[i];
    totaal += x;
}