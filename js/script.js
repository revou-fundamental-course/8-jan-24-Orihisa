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
        
        countArea()
        
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

            count.addEventListener('click', function() {
            result.value = val.value ** 2 + '' + 'cm'});
            result.value = '';
            area.style.backgroundColor = '#43766C';
            perimeter.style.backgroundColor = '';
            document.getElementById('resultName').innerText = 'Luas Persegi:';
            document.getElementById('equation').innerHTML = 'L = S x S';
            document.getElementById('symbol').innerHTML = 'L = Luas Persegi';
        }

        function countPerimeter() {
            
            count.addEventListener('click', function() {
            result.value = 4 * val.value + '' + 'cm'});
            result.value = '';
            perimeter.style.backgroundColor = '#43766C';
            area.style.backgroundColor = '';
            document.getElementById('resultName').innerText = 'Keliling Persegi:';
            document.getElementById('equation').innerHTML = 'P = 4 x S';
            document.getElementById('symbol').innerHTML = 'P = Keliling Persegi';
        }

        function empty() {
            
            if (!val.value) {
                rst = '';
                document.getElementById('inputAlert').innerHTML = 'Masukan angka terlebih dahulu.';
            } else {
                document.getElementById('inputAlert').innerHTML = '';
            }
        }