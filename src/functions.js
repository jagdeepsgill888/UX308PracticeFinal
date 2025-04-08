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

function convertMetre2time(Width, Length, mowRate){
    let lawnArea = Width * Length;
    let mowMintues = lawnArea / mowRate;
    return mowMintues;
}

export {hello, fahrenheitToCelsius, convertFeet2Acre, convertMetre2time}