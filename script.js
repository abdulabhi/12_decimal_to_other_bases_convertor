function convertDecimal() {
    const decimalInput = document.getElementById('decimalInput').value;

    if (!isValidDecimal(decimalInput)) {
        alert("Please enter a valid decimal number.");
        return;
    }

    const decimal = parseInt(decimalInput, 10);
    const binary = decimal.toString(2);
    const hexadecimal = decimal.toString(16).toUpperCase();
    const octal = decimal.toString(8);

    document.getElementById('binary').textContent = binary;
    document.getElementById('hexadecimal').textContent = hexadecimal;
    document.getElementById('octal').textContent = octal;
}

function isValidDecimal(decimal) {
    const decimalRegex = /^\d+$/;
    return decimalRegex.test(decimal);
}

document.getElementById('convertButton').addEventListener('click', convertDecimal);


