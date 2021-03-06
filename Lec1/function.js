  
// // High Order Functions => Functions which accept functions as an argument !
// // Callback Functions => Functions which are passed into a function as an argument !

// function getFirstName(fullName){
//     // fullName = "TONY STARK".split(" ") => [ "TONY" , "STARK"  ];
//     fullName = fullName.split(" ");
//     return fullName[0];
// }

// function getLastName(fullName){
//     fullName = fullName.split(" ");
//     return fullName[1];
// }

// function sayHi( fullName  , fun  ){
//     let name = fun(fullName);
//     console.log(name);
// }


// sayHi("TONY STARK" , getFirstName);
// sayHi("BRUCE BANNER" ,  getLastName);
// function body // function statement

// let sayHi = function(){
//     console.log("I a m function stored in sayHi !!");
// }


function sayHi(name){
    console.log( name + " says Hiii !!!");
    return 10;
}

// functions are variables 

// function call
// sayHi();

// let value = sayHi();
// console.log( value );
console.log(sayHi("deepika"));

let value = sayHi("Steve");
console.log(value);