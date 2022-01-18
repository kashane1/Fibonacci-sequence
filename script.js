// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write text to the #text input
function writeSolution() {
    var solution = generateFib();
    var text = document.querySelector("#solution");
    text.value = solution;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writeSolution);

function generateFib() {
    var userLength = window.prompt("How many iterations of the finacci sequence do you want?", 2);
    while (userLength < 2 || userLength > 100) {
        pwLength = window.prompt("Please choose a length between 2 and 100.\n\n", 2);
    }

    var fib = [0,1];
    for (i=2; i<userLength; i++) {
        fib[i] = (fib[i-1] + fib[i-2]);
    }
    console.log(fib);

    return fib.join(",");
}