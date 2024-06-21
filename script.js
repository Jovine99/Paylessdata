document.addEventListener('DOMContentLoaded', () => {
  const openDashboardBtn = document.getElementById('openDashboardBtn');
  const closeDashboardBtn = document.getElementById('closeDashboardBtn');
  const dashboard = document.getElementById('dashboard');

  openDashboardBtn.addEventListener('click', () => {
    dashboard.style.bottom = '0';
  });

  closeDashboardBtn.addEventListener('click', () => {
    dashboard.style.bottom = '-100%';
  });

  const airtimeAmount = document.getElementById('airtime-amount');
  const customAmountInput = document.getElementById('custom-amount');

  airtimeAmount.addEventListener('change', () => {
    if (airtimeAmount.value === 'custom') {
      customAmountInput.style.display = 'block';
    } else {
      customAmountInput.style.display = 'none';
    }
  });

  const dataQuantity = document.getElementById('data-quantity');
  const customQuantityInput = document.getElementById('custom-quantity');

  dataQuantity.addEventListener('change', () => {
    if (dataQuantity.value === 'custom') {
      customQuantityInput.style.display = 'block';
    } else {
      customQuantityInput.style.display = 'none';
    }
  });
});

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(function(section) {
    section.classList.add('hidden');
  });
  
  document.getElementById(sectionId).classList.remove('hidden');
  document.getElementById('transaction-results').innerText = '';
}

function purchaseAirtime() {
  let phoneNumber = document.getElementById('data-number').value;
  let amount = document.getElementById('airtime-amount').value;

  if (amount === 'custom') {
    amount = document.getElementById('custom-amount').value;
  }

  if (!phoneNumber || !amount) {
    alert('Please enter both phone number and amount.');
    return;
  }

  setTimeout(function() {
    document.getElementById('transaction-results').innerText = `Airtime purchased successfully for ${phoneNumber} with amount ${amount}.`;
  }, 1000);
}

function purchaseData() {
  let phoneNumber = document.getElementById('data-number').value;
  let quantity = document.getElementById('data-quantity').value;

  if (quantity === 'custom') {
    quantity = document.getElementById('custom-quantity').value;
  }

  if (!phoneNumber || !quantity) {
    alert('Please enter both phone number and quantity.');
    return;
  }

  setTimeout(function() {
    document.getElementById('transaction-results').innerText = `Mobile data purchased successfully for ${phoneNumber} with quantity ${quantity}.`;
  }, 1000);
}

function validatePhoneNumber(input) {
  const phoneNumberPattern = /^\+2547\d{8}$/;
  if (!phoneNumberPattern.test(input.value)) {
    input.setCustomValidity('Please enter a valid phone number in the format +2547XXXXXXXX.');
  } else {
    input.setCustomValidity('');
  }
}
