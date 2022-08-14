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

    // Compute monthly payment
    const x = Math.pow(1 + calculatedProfit, calculatedPayments);
    const monthly = (principal*x*calculatedProfit)/(x-1);

    if(isFinite(monthly)){
       monthlyPayment.value = monthly.toFixed(2);
       totalPayment.value = (monthly * calculatedPayments).toFixed(2);
       totalProfit.value = ((monthly*calculatedPayments)-principal).toFixed(2);
    }else {
     showError('Please check your numbers')
    }

    e.preventDefault();
}

// Show Error
function showError(error){
    // Create a div
    const errorDiv = document.createElement('div');

    //Get element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = ('alert alert-danger');

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}


// Clear error
function clearError(){
    document.querySelector('.alert').remove();
}
