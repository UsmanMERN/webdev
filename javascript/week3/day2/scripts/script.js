// document.addEventListener('DOMContentLoaded', function () {
//     console.log('loaded javascript');
// })

// document.getElementById('formbtn').addEventListener('submit', function (e) {
//     e.preventDefault()

//     const name = document.getElementById('name').value.trim()
//     const email = document.getElementById('email').value
//     const password = document.getElementById('password').value

//     // console.log('name :>> ', name, 'email', email, 'password', password);

//     // let tirmedName = name.trim()
//     // console.log('name.length :>> ', tirmedName);

//     if (name.length < 3) {
//         alert("Please Enter your correct Name");
//     }

//     console.log('uppercase :>> ', name.toUpperCase());
//     console.log('lowercase :>> ', name.toLowerCase());


//     // document.getElementById('results').classList = 'd-none'
//     document.getElementById('results').className = 'd-block'

//     const result = `
//     <div class="">
//     <h2 class="result-border card shadow mt-3 py-3 ps-4"> Hello ${name}</h2>
//     <h2 class="result-border card shadow mt-3 py-3 ps-4"> Hello ${name}</h2>
//     <h2 class="result-border card shadow mt-3 py-3 ps-4">${fullName} ...</h2>

//     </div>
//     `


//     document.getElementById('results').innerHTML = result

//     // console.log('email :>> ', email);
//     // console.log('password :>> ', password);
//     // console.log('we are in submit btn');
// })

// const name = `thisisusman ${}`
const fullName = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia ab enim sed modi sint mollitia illum eveniet qui quisquam".substring(0, 20)
const newstr = "Muhammad Nouman".replace("Nouman", "Nomi")
const newstr1 = "Apple, Mango, Banana".charAt(11)
const newstr2 = "Apple, Mango, Banana".indexOf('B')
const newstr3 = "Apple, Mango, Banana".includes('M')
const newstr4 = "Apple, Mango, Banana".slice(-8)
// let newstr5 = newstr4 + newstr1 + newstr2 + newstr3

// newstr5 += newstr5

// let newstr6 = "Muhammad Nouman".endsWith('o')



// console.log('fullName :>> ', fullName + "...");
// console.log('fullName :>> ', newstr1);
// console.log('fullName :>> ', newstr2);
// console.log('fullName :>> ', newstr4);
// console.log('fullName :>> ', newstr6);


let num1 = 12