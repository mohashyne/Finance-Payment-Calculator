// Listen for submit btn
document.getElementById('finance-form').addEventListener('submit', calculateResults);

// Calculate result
function calculateResults(e){
    console.log('Calculating....');
    // UI Vars
    const amount = document.getElementById('amount');
    const profit = document.getElementById('profit');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalProfit = document.getElementById('total-profit');

    const principal = parseFloat(amount.value);
    const calculatedProfit = parseFloat(profit.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12; 

    e.preventDefault();
}

