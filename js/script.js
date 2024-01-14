const   count = document.getElementById("countButton"),
        reset = document.getElementById("resetButton"),
        area = document.getElementById('countArea'),
        perimeter = document.getElementById('countPerimeter');

let     val = document.getElementById('squareSide'),
        result = document.getElementById('resultBox');
        active = true;
        
        reset.addEventListener('click', clear);
        area.addEventListener('click', countArea);
        perimeter.addEventListener('click', countPerimeter);
        val.addEventListener('keydown', trigger);
        count.addEventListener('click', empty);
        
        countArea();
        
        function trigger(event) {

            if (event.key === 'Enter') {
                count.click();
            } else if (event.key === 'Escape') {
                reset.click();
            }
        }

        function clear() {
            val.value = '';
            result.value = '';
            document.getElementById('inputAlert').innerHTML = '';
        }
        
        function countArea() {
            if (active = true) {
                            
                count.addEventListener('click', function() {
                result.value = val.value ** 2 + '' + 'cm'});

                result.value = '';
                resultText = 'Luas Persegi:';
                equationText = 'L = S x S';
                symbolLetter = 'L = Luas Persegi';
                area.style.backgroundColor = '#43766C';
                perimeter.style.backgroundColor = '';
            }

            document.getElementById('resultName').innerText = resultText;
            document.getElementById('equation').innerHTML = equationText;
            document.getElementById('symbol').innerHTML = symbolLetter;
        }

        function countPerimeter() {
            if (active = true) {
                
                count.addEventListener('click', function() {
                result.value = 4 * val.value + '' + 'cm'});

                result.value = '';
                resultText = 'Keliling Persegi:';
                equationText = 'P = 4 x S';
                symbolLetter = 'P = Keliling Persegi';
                perimeter.style.backgroundColor = '#43766C';
                area.style.backgroundColor = '';
            }

            document.getElementById('resultName').innerText = resultText;
            document.getElementById('equation').innerHTML = equationText;
            document.getElementById('symbol').innerHTML = symbolLetter;
        }

        function empty() {
            if (val.value == '') {
                document.getElementById('inputAlert').innerHTML = 'Masukan angka terlebih dahulu.';
            } else {
                document.getElementById('inputAlert').innerHTML = '';
            }
        }