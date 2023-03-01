function subtract() {
    const firstInput = document.getElementById('firstNumber').value;
    const secondInput = document.getElementById('secondNumber').value;

    const result = document.getElementById('result');

    result.textContent = Number(firstInput) - Number(secondInput);
    
}