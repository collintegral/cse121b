/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    return number1 + number2;
}

function addNumbers()
{
    num1 = Number(document.getElementById("add1").value);
    num2 = Number(document.getElementById("add2").value);
    document.getElementById("sum").value = add(num1, num2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2)
{
    return number1 - number2;
}

const subtractNumbers = function()
{
    num1 = Number(document.getElementById("subtract1").value);
    num2 = Number(document.getElementById("subtract2").value);
    document.getElementById("difference").value = subtract(num1, num2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) =>
{
    return number1 * number2;
}

const multiplyNumbers = () =>
{
    num1 = Number(document.getElementById("factor1").value);
    num2 = Number(document.getElementById("factor2").value);
    document.getElementById("product").value = multiply(num1, num2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) =>
{
    return number1 / number2;
}

function divideNumbers()
{
    num1 = Number(document.getElementById("dividend").value);
    num2 = Number(document.getElementById("divisor").value);
    document.getElementById("quotient").value = divide(num1, num2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

document.querySelector('#getTotal').addEventListener('click', () => {
    subtotal = Number(document.getElementById("subtotal").value);
    if (document.getElementById("member").checked == 1)
    {
        subtotal -= subtotal * .15;
    }
    document.getElementById("total").innerHTML = `$ ${subtotal.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let countArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").innerHTML = countArray;

/* Output Odds Only Array */
document.getElementById("odds").innerHTML = countArray.filter(oddnumbers => oddnumbers % 2 === 1);

/* Output Evens Only Array */
document.getElementById("evens").innerHTML = countArray.filter(evennumbers => evennumbers % 2 === 0);

/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = countArray.reduce((sum, num) => sum + num);

/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = countArray.map(double => double * 2);

/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerHTML = countArray.map(double => double * 2).reduce((sum, num) => sum + num);
