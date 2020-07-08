
// comment บรรรทัดเดียว
/* alert('hello javascript');
alert("abc");
var a = 1;
var b = 2;
var c = a + b;
console.log("log var",c);
*/
/* 
comment หลายบรรทัด
1
*/
/*
let mark = prompt("ใส่คะแนน");

if (mark > 79) {
    alert("A");
} else if (mark > 69) {
    alert("B");
} else if (mark > 59) {
    alert("C");
} else if (mark > 49) {
    alert("D");
} else alert("F");


let age = prompt("โปรดใส่อายุคุณ");
let price;
price = (age < 18) ? '2000' : '3500';
alert(price);
*/

//alert( null || 2 || undefined );
//alert( alert(1) || 2 || alert(3) );
//alert( 1 && null && 2 );
//alert( 2 && 3 );
//alert( null || 2 && 3 || 4 );
/*
let age = prompt("โปรดใส่อายุคุณ");
let checking;
checking = (age >= 18) && (age <= 60) ? "อยู่" : 'ไม่อยู่';
alert(checking);
*/
/*
function draw(n) {

    let star = "";
    for (let i = 0; i < n; i++)
        star = star + "*\n";
    return star;
}

alert(draw(5));
*/
/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
function showOk() {
  alert( "You agreed." );
}
function showCancel() {
  alert( "You canceled the execution." );
}
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
*/
/*
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}
*/
/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );
  
/*
let sayHi = () => alert("Hello!");
sayHi();
--
let ask = (question, yes, no) => confirm(question) ? yes() : no();
let showOk = () => alert("You agree");
let showCancel = () => alert("You canceled the execution.");
ask("Do you agree?", showOk, showCancel);
*/

/*
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// เอาค่าชื่อมาจากตัวแปร
bag[fruit] = 5;
*/
/*
let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };

  for (let key in user) {
    // ตั้งชื่อ key เป็นตัวแทนของค่า key ทั้งหมดใน object
    alert( key );  // key = name, age, isAdmin
    alert( user[key] ); 
  }


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu, time) {


    for (let key in menu) {
        if (typeof key[menu] == "number") {
            menu[key] = menu[key] * time;
        }
    }


}


multiplyNumeric(menu, 5);

console.log(menu)



user = {
    sayHi: function() {
      alert("Hello");
    }
  };
  
  user = {
    sayHi() { // เหมือนกับ "sayHi: function()"
      alert("Hello");
    }
  };
  


let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" จะอ้างถึง Object ปัจจุบัน
      alert(this.name);
    }
  
  };
  
  console.log(user.name)


let user = {
    name: "John",
    go: function () { alert(this.name) }
}

    user.go();

*/

/*
let calculator = {
    num1: 0,
    num2: 0,
    read() {
        this.num1 = +prompt("Input 1");
        this.num2 = +prompt("input 2");

    },

    sum() {

        return this.num1 + this.num2;
    },

    mul() {

        return this.num1 * this.num2;
    }

};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


let numMin = +(prompt("รับMin"));
let numMax = +(prompt("รับMax"));
//let resultMin = Match.min(Match.random(numMin, numMax));
let random = (numMin, numMax) => {
  return numMin + Math.random() * (numMin - numMax)
}

function random1(numMin, numMax) {
  return numMin + Math.random() * (numMin - numMax)
}

console.log(random(numMin,numMax));
console.log(random1(numMin,numMax));
*/
/*
function ucFirst(str) {
  return  str.slice(0, 1).toUpperCase() + str.slice(1, str.length) ;
       
}

*/
/*

function seek(str){
  return str.includes("xxx") || str.includes("viaga");
}
console.log(seek("intervixxxaganet"));
*/
/*
function extractCurrencyValue(str, rate) {
 return (str.slice(1, str.length)) * rate;
 }

console.log(extractCurrencyValue("$120", 50));
*/

/*
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Rolll");
styles[1] = "Classics";
styles.shift();
styles.unshift("Rap", "Reggae");
*/
/*
let value = [ ];
let sum1 = 0;

 while (true) {
  let input1 = +prompt("รับค่า");
    if (Number.isNaN(input1)){
      break;
    }
     value.push(input1);
   
 }

  for (let i = 0; i < value.length; i++){
    sum1 =+ Number(value[i]);
  }

alert(sum1);
console.log(value);
*/

/*
let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (และชื่ออื่น ๆ)
}

*/
/* Home work 1.7*/
/*
array1 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
]
let array2 = array1.map(item => item.name +" "+ item.surname);
console.log(array2);
*/

/* Home work 1.8*/
/*

array1 = [1, 3, 4, 5, 6, 7, 8]
let array2 = array1.map(item => (item%2==0) ? "even" : "odd");
console.log(array2);


/* Home work 1.9*/
/*
array1 = [1, -3, 2, 8, -4, 5]
let array2 = array1.map(myFunction);

function myFunction(num) {
  if (num < 0){ num = num * -1}
  return num;
}
console.log(array2);
/*

/* Home work 1.10*

array1 = [100, 200.25, 300.84, 400.3]
let array2 = array1.map(myFunction);

function myFunction(num) {
  let num2 = parseFloat(num);
  return num2.toFixed(2);
}
console.log(array2);
*/
/*
const fruits = ['apple','banana','orange'];

const clonef = [...fruits];

const students = [ { id:1 ,name : 'bean', age : 14},{id:2 , name : 'ken', age : 15}];
const clonestu = [...students];

function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
  return `${firstName} ${lastName}`;

function getFullName(user){
  return {firstName, lastName}
};

if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

if (currentUser){
  test = () => {
    console.log('Nope.');
  };

*/












































