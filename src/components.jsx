import {hello, fahrenheitToCelsius, convertFeet2Acre, convertMetre2time, Airquality2Descript} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}


function Question2(){
    return <section>
2. Write a function that converts from fahrenheit to celsius
        <h2>results</h2>
        <p>fahrenheitToCelsius(32) == "{fahrenheitToCelsius(32)}"</p>
        <p>fahrenheitToCelsius(212) == "{fahrenheitToCelsius(212)}"</p>
        <p>fahrenheitToCelsius(70) == "{fahrenheitToCelsius(70)}"</p>
    </section>;
}

function Question3(){
    return <section>
3. Write a program that converts square feet to acres.
        <h2>results</h2>
        <p>convertFeet2Acre(50000) == "{convertFeet2Acre(50000)}"</p>
        <p>convertFeet2Acre(60000 ) == "{convertFeet2Acre(60000 )}"</p>
        <p>convertFeet2Acre(65000) == "{convertFeet2Acre(65000)}"</p>
    </section>;
}

function Question4(){
    return <section>
4. Write a program that converts square feet to acres.
        <h2>results</h2>
        <p>convertMetre2time(10, 15, 3) == "{convertMetre2time(10, 15, 3)}"</p>
        <p>convertMetre2time(20, 20, 3) == "{convertMetre2time(20, 20, 3)}"</p>
        <p>convertMetre2time(40, 40, 3) == "{convertMetre2time(40, 40, 3)}"</p>
    </section>;
}

function Question5(){
    return <section>
5.Compute the air quality given an air quality index
        <h2>results</h2>
        <p>Airquality2Descript(20) == "{Airquality2Descript(20)}"</p>
        <p>Airquality2Descript(60) == "{Airquality2Descript(60)}"</p>
        <p>Airquality2Descript(110) == "{Airquality2Descript(110)}"</p>
        <p>Airquality2Descript(155) == "{Airquality2Descript(155)}"</p>
        <p>Airquality2Descript(201) == "{Airquality2Descript(201)}"</p>
        <p>Airquality2Descript(400) == "{Airquality2Descript(400)}"</p>
        <p>Airquality2Descript(-5) == "{Airquality2Descript(-5)}"</p>
      
    </section>;
}

export {Question1, Question2, Question3, Question4, Question5}