/*
console.log("hello world");
console.log("pranav is ...............");
console.log(5 + 5);
console.log(5 % 6);
console.log(true);
console.log(null);


//Variables

//there are three types of variables 
// const , let, var
//const are to store constant

const pi=3.1415
console.log(pi);

//cannot change the value of const 
// pi=3.24

//let is to store value which can be changed
let age=18;
console.log(age);

age=19
console.log(age);

let number;
number=10
console.log(number);

//var is out dated(but it works both as const and let)
var fname='Abhi'
console.log(fname);

fname='Abhishek'
console.log(fname);


//data types
//1.string
const firstname='Abhishek';
const lname='Nasalapure';
console.log(firstname);
console.log(lname);
console.log(firstname+' '+lname);

//2.number
const num2=8;
const num=10.5;
console.log(num2);
console.log(num);
console.log(1+1);
console.log(2-1);
console.log(3*2);
console.log(9**3);
console.log(9/3);
console.log(9%4);
console.log(typeof num);
console.log(typeof num2);

//3.boolean
let myage=18
console.log(myage===18);
console.log(myage==18);
console.log(myage==='18');
console.log(myage=='18');
console.log(myage<18);
console.log(myage>18);


//4.null
console.log(null);
console.log(typeof null);


//5.Undefined
let number3;
console.log(number3);
console.log(typeof number3);

//6.object
let student1={
    name:'Abhishek',
    age:18,
    courses:['python','Web development']
};
console.log(student1);
console.log(student1.name);
console.log(student1.age);
console.log(student1.courses);
console.log(student1.courses[0]);
console.log(student1.courses[1]);

//7.array
const arry=['mango','banana','apple']
console.log(arry);
console.log(arry[0]);
console.log(arry[1]);
console.log(arry[2]);
console.log(arry[arry.length-1]);
arry.push('cheery');
arry.shift();
arry.unshift('apple2')
console.log(arry);
*/

// alert("You are coding in javascript not python");

//  IF/ELSE Statements
// 1. Simple if/else statement
/*
let age = 18;
if (age >= 18) {
  console.log(`your age is ${age} ,You are an adult.`);
} else {
  console.log("You are a minor.");
}

// 2. if/else if/else statements
age2 = prompt("How old are you?");
if (12 < age2 >= 18) {
  console.log("Your ticket price is 10");
} else if ((age2 > 18) & (age2 < 40)) {
  console.log("Your ticket price is 20");
} else {
  console.log("Your ticket price is 30");
  19;
}
// 3. Nested if/else statements
age3 = prompt("How old are you?");
if (age3 >= 18) {
  if (age3 >= 40) {
    console.log("You are a senior citizen");
  } else {
    console.log("You are an adult");
  }
} else {
  console.log("You are a minor");
}
*/

// // for loops
// for(let i = 0; i < 1000; i++){
//     console.log(i);
// }
// for(let i = 0; i < 1000; i++){
//   console.log("Abhishek");
// }
// const arry=['mango','banana','apple','grapes','papaya']
// for(i=0;i<arry.length; i++){
//   if(i%2==0){
//   console.log(arry[i])
// }
// if(i%2!=0){
//   console.log(arry[i])
// }
// }

// ternary oprater
let age=24;

const drive=age>=18?'you can drive':'you cannot drive';
console.log(drive);

// functions

function logger() {
  console.log("My name is Abhishek");
}

logger();
logger();
logger();

function fruitProcesser(apple,mango) {
  return `the juice contains ${apple} apples and ${mango} mangos`
}

output = fruitProcesser(3,4)
console.log(output);

my_age=calk_age(2006)
function calk_age(birthyear){
  console.log(`Your age is ${2024-birthyear}`);
}

const my_age2=function(birthyear){
  console.log(`Your age is ${2024-birthyear}`);
}
age=my_age2(2006)

const age3=(birthyear) => console.log
(2024-birthyear);
age3(2006)




