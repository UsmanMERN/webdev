// console.log('connected');\


// function calculateMyInfo() {
//     console.log("eloow testing")

// }

function calculate() {
    const calc = document.getElementById('name').value

    console.log('calc :>> ', calc);
    const frn = calc * 9 / 5 + 32

    console.log('frn :>> ', frn);
}

document.getElementById("submitbtn").onkeyup = function () {
    // console.log('double clikc');
    const calc = document.getElementById('name').value

    const frn = (calc * 9 / 5) + 32

    console.log('frn :>> ', frn);
    const age = document.getElementById('age').value
    const address = document.getElementById('address').value

    // if (!name || !age || !address) {
    //     alert("kindly enter your info")
    //     return
    // }


    let message = document.getElementById('message')

    let result = `
    <div class="bg-info rounded-3 mt-5 text-light p-2">
    <h2>Name : ${name}</h2>
    <h2>Age : ${age}</h2>
    <h2>address : ${address}</h2>
    </div>
    `

    message.className = 'd-block'
    message.innerHTML = result
    document.getElementById('name').value = ''
    document.getElementById('age').value = ''
    document.getElementById('address').value = ''
}