function hello(name){
    return(`hello ${name}`);
}

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

function convertFeet2Acre(squareFeet){
    const Acre = squareFeet / 43560;
    return Acre;
}

export {hello, fahrenheitToCelsius, convertFeet2Acre}