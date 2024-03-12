// Assigned values or presets

let firstValue
let secondValue
let operator

let displayValue = ''

document.getElementById('input').innerHTML = displayValue

// Functions

function addValue(inputValue){
    if(inputValue === '0'){
        displayValue += '0.'
        document.getElementById('input').innerHTML = displayValue
    }

    else if(inputValue === '.'){
        if(displayValue.indexOf('.') == -1){
            displayValue += inputValue
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

    if(operator === '+/-'){
        displayValue = firstValue * -1
        document.getElementById('input').innerHTML = displayValue
    }

    else if(operator === '%'){
        displayValue = firstValue / 100
        document.getElementById('input').innerHTML = displayValue
    }
}

function allClear(){
    displayValue = ''
    firstValue = ''
    secondValue = ''
    operator = ''
    document.getElementById('input').innerHTML = displayValue
}

function evaluation(){
    secondValue = parseFloat(displayValue)
    
    if(operator === '+'){
        displayValue = firstValue + secondValue
    }

    else if(operator === '-'){
        displayValue = firstValue - secondValue
    }

    else if(operator === '*'){
        displayValue = firstValue * secondValue
    }

    else if(operator === '/'){
        displayValue = firstValue / secondValue
    }

    document.getElementById('input').innerHTML = displayValue
}