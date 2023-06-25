const inputValue = document.querySelector('#value');
const inputFee = document.querySelector('#fee');
const inputTime = document.querySelector('#time');
const total = document.querySelector('.total');
const buttonCalculate = document.querySelector('.calculate')


function calculaJuros(value, fee, time) {
    return value*Math.pow((1 + fee), time);
}


buttonCalculate.addEventListener('click', function () {

    let value = parseFloat(inputValue.value);
    let fee = parseFloat(inputFee.value) / 100;
    let time = parseInt(inputTime.value);

    let amount = calculaJuros(value, fee, time);

    total.innerHTML = `R$ ${amount.toFixed(2)}`.replace('.', ',');
});
