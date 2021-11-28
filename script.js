const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num) {
    return num * num
}

function cubed(num) {
    return num * num * num
}

function factorial(num) {
    if (num < 0) return undefined
    if (num == 0) return 1
    let x = num - 1
    while (x > 1) {
        x--
    }
    return num
}

input.onchange = function () {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
        para.textContent = 'You neet to enter a number!';
    } else {
        para.textContent = num + ' sqaured is ' + squared(num) + '. ' +
            num + ' cubed is ' + cubed(num) + '.' +
            num + ' factorial is ' + factorial(num) + '.'
    }
}