// Assigned values or presets

let firstValue
let secondValue
let operator

let displayValue = ''

document.getElementById('input').innerHTML = displayValue

// Functions

function addValue(inputValue){

    // Not allowing to use more than one dot (decimal) for one number

    if(inputValue === '.'){
        if(displayValue.indexOf('.') == -1){
            displayValue += inputValue
            document.getElementById('input').innerHTML = displayValue
        }
    }

    else{
        displayValue += inputValue
        document.getElementById('input').innerHTML = displayValue
    }
}


function addOperator(inputOperator){
    operator = inputOperator
    firstValue = parseFloat(displayValue)
    displayValue = ''

    // Reversing value

    if(operator === '+/-'){
        displayValue = firstValue * -1
        document.getElementById('input').innerHTML = displayValue
    }

    // Getting percent

    else if(operator === '%'){
        displayValue = firstValue / 100
        document.getElementById('input').innerHTML = displayValue
    }
}

// Reseting all values

function allClear(){
    displayValue = ''
    firstValue = ''
    secondValue = ''
    operator = ''
    document.getElementById('input').innerHTML = displayValue
}

// Getting evaluation based on inputed operator

function evaluation(){
    secondValue = parseFloat(displayValue)

    // Addition

    if(operator === '+'){
        displayValue = firstValue + secondValue
    }

    // Substraction

    else if(operator === '-'){
        displayValue = firstValue - secondValue
    }

    // Multiplying

    else if(operator === '*'){
        displayValue = firstValue * secondValue
    }

    // Dividing

    else if(operator === '/'){
        displayValue = firstValue / secondValue
    }

    document.getElementById('input').innerHTML = displayValue
}