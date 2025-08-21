function prime(a, b) {
  return a + b;
}

console.log(prime(2, 3));





// Function to check if a number is prime using function expression
var prime = function (val) {
  var count = 0;
  for (var i = 0; i <= val; i++) {
    if (val % i === 0) {
      count++;
    }
  }

  if (count === 2) {
    return true;
  } else {
    return false;
  }
};

let primes =[]
for (var i = 0; i<=1000; i++){
    if (prime(i)){
        primes.push(i);
    }
}

console.log(primes);
