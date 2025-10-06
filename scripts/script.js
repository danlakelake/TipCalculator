//script js
'use strict';

// Hide the tip amount on load
let totalTip_text = (document.getElementById('total-tip').style.display = 'none');
let each_text = (document.getElementById('each').style.display = 'none');

// Change face function
function changeFaceIcon() {
  // Get the face service icon
  let face_icon = document.getElementById('small-face');
  // Store service value
  let service = document.getElementById('service-quality').value;

  // Change the icon depends on the quality service value
  if (service == 0.3) {
    face_icon.innerHTML = `<i id="outstanding-face" class="fa-sharp fa-solid fa-face-grin-stars"></i>`;
  } else if (service == 0.15) {
    face_icon.innerHTML = `<i id="okay-face" class="fa-sharp fa-solid fa-face-meh"></i>`;
  } else if (service == 0.1) {
    face_icon.innerHTML = `<i id="angry-face" class="fa-sharp fa-solid fa-face-angry"></i>`;
  } else if (service == 0.05) {
    face_icon.innerHTML = `<i id="terrible-face" class="fa-sharp fa-solid fa-face-sad-tear"></i>`;
  } else {
    face_icon.innerHTML = `<i id="happy-face" class="fa-sharp fa-solid fa-face-smile"></i>`;
  }
}

// Custom function
function calculateTip() {
  // Store the data of inputs
  let bill_amount = document.getElementById('bill-amount').value;
  let service_quality = document.getElementById('service-quality').value;
  let total_people = document.getElementById('total-people').value;

  // Bill amount validation
  if (bill_amount == 0 || bill_amount === '') {
    alert(translations[currentLang].alertInvalidAmount);
    return false;
  }

  // Service quality validation
  if (service_quality == 0) {
    alert(translations[currentLang].alertSelectService);
    return false;
  }

  // Total people tip validation
  if (total_people === '' || total_people <= 1) {
    total_people = 1;
    document.getElementById('each').style.display = 'none';
    document.getElementById('total-people').value = 1;
  } else {
    document.getElementById('each').style.display = 'block';
  }

  // Do some Math
  let total = (bill_amount * service_quality) / total_people;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  // Display the tip
  document.getElementById('total-tip').style.display = 'block';
  document.getElementById('tip').innerHTML = total;
}

// Change face icon on service option
document.getElementById('service-quality').onchange = function () {
  changeFaceIcon();
};

// Clicking the button calls to our custom function
document.getElementById('calculate').onclick = function () {
  calculateTip();
};
