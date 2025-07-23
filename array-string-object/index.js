const statementArray = [
    "Is these christmas?",
    "Yayy! its early",
    "Is it christmas really!",
    "No its not the christmas",
    "Last month of the year have christmas",
    "Till then finish Javascript"
]

function printChristmasStatement(statementArray){
    for( const value of statementArray)
    {
        if(value.includes("christmas")){
            console.log(value)

        }
    }
}

// printChristmasStatement(statementArray)`

const person = {
  name: ["Bob", "Smith"],
  age: 32,
};

// console.log("This is test Name " + person.name[0]
//  + " " + "This is Age " + person.age
// )

console.log(`This is test Name ${person.name[0]}
        This is Age ${person.age}`)

