// Add the `export` keyword to each function so that other modules can import it.

export function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32
}

export function fahrenheitToCelsius(fahrenheit) {
   return (fahrenheit - 32) * 5 / 9
}
