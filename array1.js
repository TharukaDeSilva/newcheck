

console.log(fruits);
fruits.pop();

console.log(fruits);
vehicles.push("car", "bike", "bus", "truck", "van");
console.log(vehicles);
console.log("length of the fruits array is "+fruits.length)

// interate through array
function iterateFruits(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(String(i+1)+": "+arr[i]);
    }

}

iterateFruits(vehicles);


console.log("\n Convert array to string "+ vehicles.toString());
