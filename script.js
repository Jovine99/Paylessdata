document.addEventListener('DOMContentLoaded', () => {
  const openDashboardBtn = document.getElementById('openDashboardBtn');
  const dashboard = document.getElementById('dashboard');

  openDashboardBtn.addEventListener('click', () => {
    dashboard.style.bottom = '0';
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
  let phoneNumber = document.getElementById('airtime-number').value;
  let amount = document.getElementById('airtime-amount').value;

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

  if (!phoneNumber || !quantity) {
    alert('Please enter both phone number and quantity.');
    return;
  }

  setTimeout(function() {
    document.getElementById('transaction-results').innerText = `Mobile data purchased successfully for ${phoneNumber} with quantity ${quantity}.`;
  }, 1000);
}

document.getElementById('airtime-amount').addEventListener('change', function() {
  if (this.value === 'custom') {
    document.getElementById('custom-amount').style.display = 'inline-block';
  } else {
    document.getElementById('custom-amount').style.display = 'none';
  }
});

document.get

