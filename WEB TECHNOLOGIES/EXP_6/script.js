var calculationHistory = {};

function calculateFactorial() {
    performCalculation('Factorial');
}

function calculateFibonacci() {
    performCalculation('Fibonacci');
}

function calculatePrime() {
    performCalculation('Prime');
}

function calculatePalindrome() {
    performCalculation('Palindrome');
}

function performCalculation(operation) {
    var number = document.getElementById('inputNumber').value;
    var result;

    switch (operation) {
        case 'Factorial':
            result = calculateFactorialValue(number);
            break;
        case 'Fibonacci':
            result = calculateFibonacciSeries(number);
            break;
        case 'Prime':
            result = calculatePrimeNumbers(number);
            break;
        case 'Palindrome':
            result = checkPalindrome(number);
            break;
    }

    var historyItem = operation + ' of ' + number + ': ' + result;

    if (!calculationHistory[operation]) {
        calculationHistory[operation] = historyItem;
        displayHistory();
    } else if (calculationHistory[operation] !== historyItem) {
        calculationHistory[operation] = historyItem;
        displayHistory();
    }

    // Display result in the list
    var resultItem = document.createElement('li');
    resultItem.textContent = historyItem;
    document.getElementById('myList').appendChild(resultItem);
}

function calculateFactorialValue(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

function calculateFibonacciSeries(num) {
    var series = [0, 1];
    for (var i = 2; i <= num; i++) {
        series[i] = series[i - 1] + series[i - 2];
    }
    return series.slice(0, num + 1).join(', ');
}

function calculatePrimeNumbers(num) {
    var primes = [];
    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes.join(', ');
}

function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function checkPalindrome(str) {
    var reversedString = str.split('').reverse().join('');
    return str === reversedString ? 'Yes' : 'No';
}

function displayHistory() {
    var historyContainer = document.getElementById('history');
    historyContainer.innerHTML = '<h2>Calculation History</h2>';

    for (var key in calculationHistory) {
        var historyItem = document.createElement('p');
        historyItem.textContent = calculationHistory[key];
        historyContainer.appendChild(historyItem);
    }
}
