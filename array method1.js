let fruits  = ["apple", "banana", "cherry", "woodapple", "orange", "pineapple", "grape", "kiwi", "mango", "papaya"];
var vehicles = [];

// joining arrays as string

let a  = fruits.join(" ");

let b =  a.split(" ")
console.log(a);
console.log(b);
vehicles.push("car", "bike", "bus", "truck", "van");
// print vehicles array
console.log(vehicles);

//delete vehicle array
delete vehicles[2]
vehicles.reverse();

console.log(vehicles)