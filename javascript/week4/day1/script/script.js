// console.log("connected")


let num = 123.9788

// num.toFixed(2)

// let numconverted = parseFloat(num)
// console.log('num :>> ', num.toFixed(1));



// console.log('num :>> ', Math.floor(num));
// console.log('num :>> ', Math.ceil(num));




function dice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice').className = 'd-block card'
    // result.innerHTML = randomNumber1
    document.getElementById('dice').innerHTML = randomNumber1
}


// console.log('Math.random() :>> ', randomNumber1);
// console.log('Math.random() :>> ', Math.min(12, 34, 56, 67, 0.56, 0.12));



// console.log('typeof  :>> ', typeof numconverted);
// console.log('typeof  :>> ', Math.round(12.3344));

let date = new Date()



console.log('date.getFullYear() :>> ', date.getFullYear());    // 2024
console.log('date.getMonth(); :>> ', date.getMonth());       // 8 (September, remember it's 0-indexed)
console.log('date.getDate() :>> ', date.getDate());        // 25
console.log('date.getDay() :>> ', date.getDay());        // 3 (Wednesday, 0 is Sunday, 6 is Saturday)
console.log('date.getHours() :>> ', date.getHours());      // 10
console.log('date.getMinutes() :>> ', date.getMinutes());     // 30
console.log('date.getSeconds() :>> ', date.getSeconds());    // 0
console.log('date.getMilliseconds() :>> ', date.getMilliseconds());// 0
console.log('date.getTime() :>> ', date.getTime());      // 1727253000000 (timestamp)


document.getElementById('date').addEventListener('change', function () {
    let targetDate = new Date(this.value);
    console.log('targetDate :>> ', targetDate);
    let now = new Date();
    let timeLeft = targetDate - now;

    console.log('timeLeft :>> ', timeLeft);
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById('dob').className = 'd-block card'
    document.getElementById('dob').innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
})



// Countdown Timer
function countdown() {
    let targetDate = new Date(2025, 5, 15);
    let now = new Date();
    let timeLeft = targetDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById('offertime').innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`

    console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
}

// Usage: countdown to New Year 2025

setInterval(() => countdown(), 1000);
