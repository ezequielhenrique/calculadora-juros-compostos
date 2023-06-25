const inputValue = document.querySelector('#value');
const inputFee = document.querySelector('#fee');
const inputTime = document.querySelector('#time');
const total = document.querySelector('.total');
const buttonCalculate = document.querySelector('.calculate')
const ctx = document.getElementById('myChart');
const chartParent = document.querySelector('.plot-chart');
const imageParent = document.querySelector('.image');


const chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
          data: [],
        }],
        labels: []
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
        y: {
            beginAtZero: false
        }
      }
    }
});


function updateChartData(chart, label, data) {
    chart.data.labels = label;
    chart.data.datasets.pop();

    chart.data.datasets.push({
        label: 'Valor',
        data: data,
        backgroundColor: '#6D28D9',
    })

    chart.update();
}


function calculaJuros(value, fee, time) {
    let listValues = new Array(time);

    for (let i=0; i<time; i++) {
        listValues[i] = value.toFixed(2);
        value += value*fee;
    }

    listValues.push(value.toFixed(2));

    return [value, listValues];
}


buttonCalculate.addEventListener('click', function () {

    let value = parseFloat(inputValue.value);
    let fee = parseFloat(inputFee.value) / 100;
    let time = parseInt(inputTime.value);

    let amount = calculaJuros(value, fee, time);

    imageParent.style.display = 'none';
    chartParent.style.display = 'block';

    total.innerHTML = `R$ ${amount[0].toFixed(2)}`.replace('.', ',');

    updateChartData(chart, new Array(amount[1].length).fill(''), amount[1]);
});
