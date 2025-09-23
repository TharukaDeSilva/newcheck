var mul = x => x*x;

console.log(mul(5))


var sum  = (x, y) => {

    return (x ===0 || y === 0) ? 0 : x + y;
};

console.log(sum(7, 3));

console.log(function() {return 5 * 5;});