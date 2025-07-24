// // const Name = "ENUM"
// // const age = 20
// // const street = "Kandivali"
// // console.log(`"This is Double quotes"  ${Name}  

// //     `
// // )

// // const exercise = {
// //     exercise: "bench",
// //     date: "22 April 2025"
// // }

// // console.log(`Today's Exercise ${exercise.exercise}
// //     Assigned on ${exercise.date}`)


// // Name.length = 7

// // console.log(Name)
// // const arr = ["first", "second", "third"]
// // console.log(arr.length, arr)
// // // console.log(name.length," ", name)
// // arr.length = 2

// // console.log(arr.length, arr)

// // console.log(Name[0])

// // const testing = "Method"

// // console.log(Name.includes(testing))


// // console.log(Name.startsWith(" Method"))
// // console.log(Name.endsWith("include"))

// // console.log(Name.indexOf("  Include"))

// // let Name = "Method Include"

// // console.log(Name.slice(1))
// // console.log(Name.toLowerCase())
// // console.log(Name.toUpperCase())


// // arr.push("30", "61", "32")
// // arr.pop()

// // arr.unshift("10")
// // arr.shift()
// // const index = arr.indexOf("28")
// // arr.splice(index)
// // const backendData = [
// //     {
// //         name:"Non Name",
// //         age:25
// //     },
// //     {
// //         name:"New Name",
// //         age:27
// //     }
// // ]

// // function handler(value, i) {
// //     if(+value % 2 === 0) return value
// //     // else return "odd"
// // }
// // // handler("26", 0)
// // const arr = ["2666", "2777", "2888", "2999"]
// // const newarray = arr.filter(handler)
// // console.log(newarray)



// // backendData.map(handler)
// // console.log(backendData.filter(handler))
// // name

// // console.log(arr)

// // // console.log(recentObject.stationName[1])

// // const recentObject = {
// //     News: "Train news",
// //     Station: "Churchgate",
// //     stationName: ["BHY", "BO", "AN"],
// //     stationProperty: {
// //         name: "BHY",
// //         requirement: "Platform"
// //     }
// // }

// class Person {
//     constructor(firstName, Age) {
//         this.firstName = firstName
//         this.Age = firstName
//     }
// }

// // const newObject = new recentClass("New News", "KAN")
// // const secondObject = new recentClass("ZNews", "BO")
// // console.log(newObject.Station)

// // function createPerson(name) {
// //     const obj = {}
// //     obj.firstname = name
// //     obj.printFirstName = function () {
// //         console.log(this.firstname)
// //     }
// //     obj.printFirstName()
// //     return obj.firstname
// // }

// // const createPerson = (name)=>{
// //     this.firstName = name
// //     // return this.firstName
// // }

// // const newObj = new createPerson("Sumit")

// // console.log(`This is the first Name: ${newObj.firstName}`)

// const obj = {
//     station: "KAN",
//     StyleLikeConstructor: function(){
//         const station  = "BORIVALI"
//         console.log(`This is the station ${this.station}`)
//         return this.station
//     }
// }

// console.log(obj.StyleLikeConstructor())


// function addnum(num1, num2){
//    return num1 + num2;
// }

// // console.log(addnum(10, 20));


// (function addNum(num1, num2){
//     console.log(num1, num2)
//     console.log(num1 + num2)
//     return num1 + num2;
// })(10, 20);

// (function addNum(num1, num2){
//     console.log(num1, num2)
//     console.log(num1 + num2)
//     return num1 + num2;
// })(10, 20)


// Test cases
console.log(isPositiveInteger(5));      // true
console.log(isPositiveInteger(-3));     // false
console.log(isPositiveInteger(3.5));    // false
console.log(isPositiveInteger("10"));   // false

console.log(calculateAverage([1, 3, 5]));      // 3
console.log(calculateAverage([1, "two", 3]));  // Error, null
console.log(calculateAverage("not an array")); // Error, null

console.log(findMin([4, 2, 8, 1]));    // 1
console.log(findMin([]));              // Error, undefined
console.log(findMin([2, 'a', 3]));     // Error, undefined

let students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 72 },
  { name: "Charlie", grade: 91 }
];

console.log(getGrade("Alice"));      // 85
console.log(getGrade("Daniel"));     // Error, -1
console.log(getGrade(100));          // Error, -1

console.log(removeDuplicates([1,2,2,3,4,4,5]));   // [1,2,3,4,5]
console.log(removeDuplicates('test'));            // Error, []
console.log(removeDuplicates([]));  