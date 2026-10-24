function fahrenheitToCelsius(temp){
    return (temp - 32)* 5/9;
}

function celsiusToFarenheit(temp){
    return (temp * 9/5) + 32;
}

export { fahrenheitToCelsius, celsiusToFarenheit};