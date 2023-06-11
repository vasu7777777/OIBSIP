function appendToInput(value) {
    document.getElementById('input').value += value;
}

function calculate() {
    var input = document.getElementById('input').value;
    var output = eval(input);
    document.getElementById('output').value = output;
}

function clearDisplay() {
    document.getElementById('input').value = '';
    document.getElementById('output').value = '';
}
