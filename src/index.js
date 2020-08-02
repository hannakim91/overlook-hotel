// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// probably don't neeed to import partial file to index.js if you're importing other scss into base.s

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import api from './api.js'

const mloginPopup = document.querySelector('.mlogin-popup');
const mloginTrigger = document.querySelector('.mlogin-trigger');
const mCloseButton = document.querySelector('.mclose-button');
const changeViewButton = document.querySelector('.change-view-button');

mloginTrigger.addEventListener('click', toggleModal);
mCloseButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);
changeViewButton.addEventListener('click', viewLoggedInView)

function toggleModal() {
  mloginPopup.classList.toggle('show-modal');
}

function windowOnClick(event) {
  // event.preventDefault() --- only where submit button is being affected**
  if (event.target === mloginPopup) {
    toggleModal();
  }
}

function viewLoggedInView(event) {
  event.preventDefault();
  api.getUsers();
  api.getRooms();
  api.getBookings();
  checkLogInDetails()
  // const loggedInView = document.querySelector('.logged-in-view')
  // toggleModal()
  // loggedInView.classList.remove('hidden')
}

function checkLogInDetails() {
  const username = document.querySelector('#username')
  const password = document.querySelector('#password')
  const loggedInView = document.querySelector('.logged-in-view')
  const logInForm = document.querySelector('.mcontent')

  if (username.value === 'manager' && password.value === 'overlook2020') {
    toggleModal()
    loggedInView.classList.remove('hidden')
  } else if (username.value.includes('customer') && password.value === 'overlook2020') {
    toggleModal()
    loggedInView.classList.remove('hidden')
  } else {
    logInForm.innerHTML += 'Please refresh and enter a valid username and password'
  }
}


function getTodaysDate() {
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  if (day < 10) {
    day = `0${day}`
  }
  if (month < 10) {
    month = `0${month}`
  }
  let today = `${month}-${day}-${year}`
  console.log(today)
  const dateInput = document.getElementById('date-input')
  dateInput.setAttribute('min', today)
}
getTodaysDate()
