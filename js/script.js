const   count = document.getElementById('calcButton'),
        reset = document.getElementById('resetButton'),
        area = document.getElementById('calcArea'),
        perimeter = document.getElementById('calcPerimeter');

let     val = document.getElementById('squareSide'),
        result = document.getElementById('resultBox'),
        alert = document.getElementById('inputAlert');

reset.addEventListener('click', clear);
area.addEventListener('click', areaFunc);
perimeter.addEventListener('click', perimeterFunc);
val.addEventListener('keydown', trigger);
val.addEventListener('input', validateInput)
count.addEventListener('click', empty);
areaFunc();

function validateInput() {
    
    let numeric = /^\d*\.?\d*$/;
    if (!val.value.match(numeric) || val.value.match(/^\.$/)) {
        alert.innerHTML = 'Isi dengan angka positif.';
        val.style.border = '2px solid red';
        return false;
    } else {
        alert.innerHTML = '';
        val.style.border = 'none';
        return true;
    }
}

function trigger(event) {
    
    if (event.key === 'Enter') {
        count.click();
    } else if (event.key === 'Escape') {
        reset.click();
    }
}

function empty() {
    
    if (!val.value) {
        val.style.border = '2px solid red';
        alert.innerHTML = 'Masukan angka positif terlebih dahulu.';
    } else {
        alert.innerHTML = '';
        val.style.border = 'none';
    }
}

function clear() {
    val.style.border = 'none';
    val.value = '';
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
    
    count.addEventListener('click', function() {
        
        if (val.value != '' && validateInput() == true) {
            val.style.border = 'none';
            result.value = parseFloat(val.value ** 2).toFixed(3);
        } else {
            result.value = '';
        }
        if (result.value != parseFloat(result.value)) {
            return parseInt(result.value);
        } else if (result.value = parseFloat(result.value)) {
            return parseFloat(result.value);
        }
    });

    if (result.value !== '') {
        result.value = parseFloat(val.value ** 2).toFixed(3);
    }
    if (result.value != parseFloat(result.value)) {
        return parseInt(result.value);
    } else if (result.value = parseFloat(result.value)) {
        return parseFloat(result.value);
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

    count.addEventListener('click', function() {
        if (val.value !== '' && validateInput() == true) {
            val.style.border = 'none';
            result.value = parseFloat(4 * val.value).toFixed(3);
        }
        if (result.value != parseFloat(result.value)) {
            return parseInt(result.value);
        } else if (result.value = parseFloat(result.value)) {
            return parseFloat(result.value);
        }
    });
    
    if (result.value !== '') {
        result.value = parseFloat(4 * val.value).toFixed(3);
    }
    if (result.value != parseFloat(result.value)) {
        return parseInt(result.value);
    } else if (result.value = parseFloat(result.value)) {
        return parseFloat(result.value);
    }
}