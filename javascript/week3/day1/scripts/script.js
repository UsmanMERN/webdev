// console.log("connected")

// loops

// 1- for
// 2- while
// 3- do while


// post increment & post decrement
// pre increment & pre decrement


// value ++

// let i = 1
// // i += 1

// console.log('i :>> ', --i); //0
// console.log('i :>> ', i); //0

// console.log('i :>> ', 5 + --i); // 4  i=-1

// console.log('i :>> ', 6 + --i); //4 i=-2

// console.log('i :>> ', i); //i = -2
// let i= 5

// console.log(i) // 5
// console.log(i++) //  1
// console.log(i++) // 2
// console.log(i) // 3
// -1
// for (let i = 5; -1 >= 0; i--) {
//     console.log(i)
// }


let input = +prompt("enter the number")

for (let i = 1; i <= 10; i++) {
    document.getElementById('table').innerHTML += `<h2>${input} x ${i}  =${input * i}</h2>`
}


// let i = 10

// while (i <= 10) {
//     console.log(i)
//     i++
// }


// let i = 1
// do {
//     console.log('i :>> ', i);
//     i++
// } while (i <= 10)