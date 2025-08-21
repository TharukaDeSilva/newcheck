//call method

const person = {
    name: 'GFG',
    greet: function(city) {
        console.log('Hello, ' + this.name + ' from ' + city);
    }
};

console.log("Using the call method\n")
person.greet('Delhi');
const greets = person.greet;
greets.call(person, 'Noida');


console.log("\n Using bind method \n");

person.greet.bind(person, 'Delhi')();


console.log("\n Using apply method \n");

const personDetails = {
    name: 'GFG',
    greet: function(city, country) {
        console.log('Hello, ' + this.name + ' from ' + city + ', ' + country);
    }
};
personDetails.greet('Delhi', 'India');

personDetails.greet.apply(personDetails, ['Colombo', 'SL']);
//greet.apply(personDetails, ['Noida', 'Delhi']);

