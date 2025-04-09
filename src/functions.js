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

function Airquality2Descript(AQI) 
{
    let airDescript;
    if(AQI >= 0 && AQI <= 50){
        airDescript = "Good";
    }else if (AQI >= 51 && AQI <= 100){
        airDescript = "Moderate";
    }else if (AQI >= 101 && AQI <= 150){
        airDescript = "Unhealthy for Sensitive Groups";
    }else if (AQI >= 151 && AQI <= 200){
        airDescript = "Unhealthy";
    }
    else if (AQI >= 201 && AQI <= 300){
        airDescript = "Very Unhealthy";
    }
    else if (AQI >= 301){
        airDescript = "Hazardous";
    }  else {  // invalid inputs
        airDescript = "Invalid AQI value";
    }
    return airDescript;
}

export {hello, fahrenheitToCelsius, convertFeet2Acre, convertMetre2time, Airquality2Descript}