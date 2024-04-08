let currentResult = '';
let currentOperation = '';
let currentInput = '';

function clearResult() {
    currentResult = '';
    currentOperation = '';
    currentInput = '';
    document.getElementById('result').value = '';
}

function appendToResult(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function performOperation(operation) {
    if (currentInput !== '') {
        if (currentResult === '') {
            currentResult = parseFloat(currentInput);
        } else {
            currentResult = operate(currentResult, parseFloat(currentInput), currentOperation);
        }

        currentOperation = operation;
        currentInput = '';
        document.getElementById('result').value = '';
    }
}

function calculateResult() {
    if (currentInput !== '') {
        if (currentResult === '') {
            currentResult = parseFloat(currentInput);
        } else {
            currentResult = operate(currentResult, parseFloat(currentInput), currentOperation);
        }

        document.getElementById('result').value = currentResult;
        currentInput = '';
        currentOperation = '';
    }
}

function calculateSquare() {
    if (currentInput !== '') {
        currentResult = parseFloat(currentInput) * parseFloat(currentInput);
        document.getElementById('result').value = currentResult;
        currentInput = '';
    }
}

function calculateSquareRoot() {
    if (currentInput !== '') {
        currentResult = Math.sqrt(parseFloat(currentInput));
        document.getElementById('result').value = currentResult;
        currentInput = '';
    }
}

function calculateSine() {
    if (currentInput !== '') {
        currentResult = Math.sin(parseFloat(currentInput) * (Math.PI / 180));
        document.getElementById('result').value = currentResult;
        currentInput = '';
    }
}

function calculateCosine() {
    if (currentInput !== '') {
        currentResult = Math.cos(parseFloat(currentInput) * (Math.PI / 180)); 
        document.getElementById('result').value = currentResult;
        currentInput = '';
    }
}

function calculateTangent() {
    if (currentInput !== '') {
        currentResult = Math.tan(parseFloat(currentInput) * (Math.PI / 180)); 
        document.getElementById('result').value = currentResult;
        currentInput = '';
    }
}

function operate(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                alert('Division by zero is not allowed!');
                clearResult();
                return 0;
            }
            return a / b;
    }
}
