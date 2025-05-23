// console.log("Hello World!");

// alert("We are learning JavaScript!");

// document.write("Hello World!");

document.getElementById("heading").innerText = '<h1>Hello World!</h1>';
document.getElementById("heading1").innerHTML = '<h1>Hello World!</h1>';

// variable declaration

/*
var usama = "my name is usama";
console.log(usama);
var usama = "I am learning JavaScript";
console.log(usama);

let adnan, nomi, usman = "my name is usman";
adnan = "my name is adnan";
nomi = "my name is nomi";
usman = "my name is usman";

adnan = "I am learning JavaScript";
console.log(adnan);
console.log(nomi);
console.log(usman);

let andnan = "my name is andnan";
console.log(andnan);

const azamBhai = "my name is azam bhai";

azamBhai = "I am learning JavaScript";

console.log(azamBhai);

*/

// let age = null;
// age = Symbol('my name is usama');;
// console.log(age);

let myArray = [1, 2, 3, 4, "my name is usama", true, null, undefined, { name: "usama", age: 20 }, [1, 2, 3, 4, [5, 6, 7, 8]]];

// console.log(myArray);


// let myObject = { name: "usama", age: 20, city: "karachi", isStudent: true, isMarried: false, hobbies: ["reading", "writing", "coding"], address: { city: "karachi", country: "pakistan" }, dateOfBirth: new Date("2000-01-01"), id: Symbol("my name is usama") };

// let myObject = { name: "Azam", age: "24", city: "chokara" }

// console.log('myObject :>> ', myObject.name);

// const age = 122121

// let isStudent = undefined;

// let myTransactions = [200, 300, 400, 500, 600, 700, 800, 900, 1000]

// let myTransaction = {
//     transaction1: 200,
//     transaction2: 300,
//     transaction3: 400,
//     transaction4: 500,
//     transaction5: 600,
//     transaction6: 700,
//     transaction7: 800,
//     transaction8: 900,
//     transaction9: 1000
// }


// function eidfuncationBBQ() {
//     console.log("cancel");
//     console.log("cancel");
//     console.log("cancel");
//     console.log("cancel");
//     console.log("cancel");
// }
// eidfuncationBBQ();


// DataTypes

// primitive data types

// string = 'my name is usama';
// number = 123;
// boolean = false;
// undefined = undefined;
// null = null;
// BigInt = 1234567890123456789012345678901234567890n;

// non primitive data types

// array = [1, 2, 3, 4, 5];
// object = { name: 'usama', age: 20, city: 'karachi' };
// function = function() { console.log('my name is usama'); };


// mutable and immutable data types

// mutable data types = array, object, function
// immutable data types = string, number, boolean, undefined, null, BigInt
// Immutable example (string)
// let str = "hello";
// let newStr = str.toUpperCase();
// console.log(str); // Output: "hello"
// console.log(newStr) // Output: "HELLO"



// let name, age, city, isStudent, isMarried, hobbies, address, dateOfBirth, id;
// name = "usama";
// age = 20;
// city = "karachi";
// isStudent = true;

// let subject = "Web Development";

// let usamaSubject = subject.toLowerCase();

// console.log('usamaSubject :>> ', usamaSubject);
// console.log('subject :>> ', subject);


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const arr1 = arr

// arr1.push(11, 12, 13, 14, 15);

// arr.push(16, 17, 18, 19, 20);

// console.log('arr :>> ', arr);
// console.log('arr1 :>> ', arr1);


// string to number conversion

// let str = "456.789px";
// // console.log('str :>> ', str);
// let num1 = Number(str);     // 456
// let num2 = parseInt(str);   // 456
// let num3 = parseFloat(str); // 456

// console.log('num1 :>> ', num1);
// console.log('num2 :>> ', num2);
// console.log('num3 :>> ', num3);

// boolean to number conversion

// let bool = true;
// let num4 = Number(bool);    // 1

// console.log('num4 :>> ', num4);



// let str2 = "3.14";
// let num5 = parseInt(str2);   // 3
// let num6 = parseFloat(str2); // 3.14

// let str3 = "10px";
// let num9 = Number(str3)
// let num7 = parseInt(str3);   // 10
// let num8 = parseFloat(str3); // 10


// Converting to a String

// let num = 123;
// let str1 = String(num);    // "123"
// let str2 = num.toString(); // "123"

// console.log('str1 :>> ', str1);
// console.log('str2 :>> ', str2);
// console.log('num :>> ', num);


// let bool = true;
// let str3 = String(bool);   // "true"
// let str4 = bool.toString(); // "true"

// console.log('str3 :>> ', str3);
// console.log('str4 :>> ', str4);
// console.log('bool :>> ', bool);


// let arr = [1, 2, 3];
// let str5 = String(arr);    // "1,2,3"
// let str6 = arr.toString(); // "1,2,3"

// console.log('str5 :>> ', str5);
// console.log('str6 :>> ', str6);
// console.log('arr :>> ', arr);

// Converting to Boolean


// let num = 100;
// let bool1 = Boolean(num);   // true

// console.log('bool1 :>> ', bool1);
// let str = 1;
// let bool2 = Boolean(str);   // false

// if (str) {
//     // document.writeln("Usama")
//     console.log("usman shak");
// } else {
//     document.writeln("unkown")

// }

// console.log('bool2 :>> ', bool2);
// let obj = {};
// let bool3 = Boolean(obj);   // true

// console.log('bool3 :>> ', bool3);

// let nullVal = null;
// let bool4 = Boolean(nullVal); // false
// console.log('bool4 :>> ', bool4);



// let name = "usama";

// let newName = name.toUpperCase();

// console.log('name :>> ', name);
// console.log('newName :>> ', newName);



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// let newArr = arr

// newArr.push(11, 12, 13, 14, 15);
// arr.push(11, 12, 13, 14, 15);

// console.log('arr :>> ', arr);
// console.log('newArr :>> ', newArr);