// const a = ["26", "27", "28", "29", "30"];

// for( let i=0; i <= 5; i++ ) {
    //i = 0
    //i =1
    // i=2
    // i=3
    //i=4
    // console.log( "a[" + i + "] = " + a[i] );
// }

// let i=0
// do{
//     console.log( "a[" + i + "] = " + a[i] );
//     i++;
// }while( i < 0 );

// while(i==0){
//     console.log( "a[" + i + "] = " + a[i] );
//     i++;
// }

// while(i<6){
//     if(i==4) continue;
//     console.log( "a[" + i + "] = " + i*2 );
//     i++;
// }

// for( let i=0; i <= 5; i++ ) {
//     if(i==4) continue;
//     console.log( "a[" + i + "] = " + i*2 );
// }


// const b  = [
//     {
//         name: "John",
//         age: 30,
//         city: "New York"
//     },
//     {
//         name: "Jane",
//         age: 25,
//         city: "Los Angeles"
//     },
//     {
//         name: "Mike",
//         age: 32,
//         city: "Chicago"
//     }
// ]


// const c = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     address:{
//         street: "123 Main St",
//         zip: "10001"
//     }
// }

// for ( let zoom in c){
//     if(typeof c[zoom] === "object") {
//         for ( let meet in c[zoom] ) {
//             console.log( zoom + "." + meet + " = " + c[zoom][meet] );
//         }
//     }
//     else{
//         console.log( zoom + " = " + c[zoom] );

//     }
// }

// console.log( "c.address.street = " + c.address.street );
// console.log( "c.address.zip = " + length in c + c.length );
// const arr = [3, 5, 7];
// arr.foo = "hello";

// arr = {
//     0: 3,
//     1: 5,
//     2: 7,
//     foo: "hello"
// }

// for (const i in arr) {
//   console.log(i);
// }
// "0" "1" "2" "foo"

// for (const i of arr) {
//   console.log(i);
// }
// Logs: 3 5 7


// function myFunc() {
//   return "Toyota";
// }

// const myCar = {
// //   make: "Honda",
//   model: "Accord",
//   year: 1998,
// };

// console.log(myCar.make); // "Honda"
// myCar.make = myFunc();
// console.log(myCar.make); // "Toyota"



// function addSquares(a, b) {
//    return function square(c) {
//     return a*a*c + b*b*c;
//   }
 
// }

// const myFunnnnn = addSquares(2, 3)


// console.log((myFunnnnn(3))); // 13

//  |
//  |    |
//  |    |
//  |addSquares |  


// const square = function newSquare(number) {
//   return number * number;
// };

// console.log(square(4)); // 16
// var a=6

// // myFunc();

// function myFunc(){
//     //hoisting

//     a = 5
//     function a(){
//         console.log("a is called");
//     }

//     console.log(a()); // 5
    
// }

// myFunc(); // "a is called"

// console.log(a)

// function myFunc1(){
//     console.log("myFunc1 is called");   
// }

// myFunc1(); // "myFunc1 is called"
// const myFunc2 = (a, b, c) =>{
//     console.log("myFunc2 is called");
// }

// myFunc2(1, 2, 4); // "myFunc2 is called"

