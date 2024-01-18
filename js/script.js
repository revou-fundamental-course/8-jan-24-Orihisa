const   calculate = document.getElementById('calculationButton'),
        reset = document.getElementById('resetButton'),
        area = document.getElementById('squareArea'),
        perimeter = document.getElementById('squarePerimeter');

let     inputValue = document.getElementById('squareSide'),
        result = document.getElementById('resultBox'),
        alert = document.getElementById('inputAlert');

reset.addEventListener('click', clear);
area.addEventListener('click', areaFunc);
perimeter.addEventListener('click', perimeterFunc);
inputValue.addEventListener('keydown', trigger);
inputValue.addEventListener('input', validateInput)
calculate.addEventListener('click', empty);
areaFunc();

function validateInput() {
    
    let digit = /^\d*\.?\d*$/;
    if (!inputValue.value.match(digit) || inputValue.value.match(/^\.$/)) {
        alert.innerHTML = 'Isi dengan angka positif.';
        inputValue.style.border = '2px solid red';
        return false;
    } else {
        alert.innerHTML = '';
        inputValue.style.border = 'none';
        return true;
    }
}

function trigger(event) {
    
    if (event.key === 'Enter') {
        calculate.click();
    } else if (event.key === 'Escape') {
        reset.click();
    }
}

function empty() {
    
    if (!inputValue.value) {
        inputValue.style.border = '2px solid red';
        alert.innerHTML = 'Masukan angka positif terlebih dahulu.';
    } else {
        alert.innerHTML = '';
        inputValue.style.border = 'none';
    }
}

function clear() {
    inputValue.style.border = 'none';
    inputValue.value = '';
    result.value = '';
    document.getElementById('inputAlert').innerHTML = '';
}

function areaFunc() {
    
    area.disabled = true;
    perimeter.disabled = false;
    area.style.backgroundColor = '#B19470';
    perimeter.style.backgroundColor = '';
    document.getElementById('resultName').innerText = 'Luas Persegi:';
    document.getElementById('equation').innerHTML = 'L = S x S';
    document.getElementById('symbol').innerHTML = 'L = Luas Persegi';
    
    calculateArea();
    calculate.addEventListener('click', calculateArea);
    
    function calculateArea() {
        if (inputValue.value != '' && validateInput() == true) {
            inputValue.style.border = 'none';
            result.value = parseFloat(inputValue.value ** 2).toFixed(4);
        } else {
            result.value = '';
        }
        if (result.value != parseFloat(result.value)) {
            return parseInt(result.value);
        } else if (result.value = parseFloat(result.value)) {
            return parseFloat(result.value);
        }
    }    
}
        
function perimeterFunc() {

    perimeter.disabled = true;
    area.disabled = false;
    perimeter.style.backgroundColor = '#B19470';
    area.style.backgroundColor = '';
    document.getElementById('resultName').innerText = 'Keliling Persegi:';
    document.getElementById('equation').innerHTML = 'P = 4 x S';
    document.getElementById('symbol').innerHTML = 'P = Keliling Persegi';

    calculatePerimeter();
    calculate.addEventListener('click', calculatePerimeter);
    
    function calculatePerimeter() {
        if (inputValue.value != '' && validateInput() == true) {
            inputValue.style.border = 'none';
            result.value = parseFloat(4 * inputValue.value).toFixed(4);
        } else {
            result.value = '';
        }
        if (result.value != parseFloat(result.value)) {
            return parseInt(result.value);
        } else if (result.value = parseFloat(result.value)) {
            return parseFloat(result.value);
        }
    }
}