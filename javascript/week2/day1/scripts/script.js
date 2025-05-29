// console.log("connected")

// console.log()



// document.getElementById("heading1").innerHTML = '<h2>Usman bhai na thk btaya</h2>'


// const age = +prompt('Enter your Age')

// if (age > 18) {
//     document.getElementById("heading1").innerHTML = "Your age is " + age + "."
// } else {
//     alert("please Enter in Number")
// }

// console.log('document.getElementsByClassName() :>> ', );

// const myhtml = document.getElementsByClassName('heading1')

// for (let i = 0; i < myhtml.length; i++) {
//     myhtml[i].style.backgroundColor = 'red';
//     myhtml[i].innerHTML = 'NOmi bhai Idk what is learning';
//     if (i % 2 == 0) {
//         myhtml[i].innerHTML = 'Usman shk Idk what is learning';
//     }
// }


// console.log('document.getElementsByTagName() :>> ', document.getElementsByTagName('h1'));
// document.querySelectorAll("#heading1")[0].innerText = "<h2>This is for nomi bhai understading</h2>"
// console.log('document.querySelector("#heading1") :>> ',);


// console.log()

function submit() {
    const value = document.getElementById('name').value
    if (!value) {
        alert("please enter a value")
    } else {
        console.log('value :>> ', value);
    }
}