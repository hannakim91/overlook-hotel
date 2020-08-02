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
const loggedInView = document.querySelector('.logged-in-view')
const mainView = document.querySelector('.main-view')

window.addEventListener('load', onWindowLoad)
window.addEventListener('click', windowOnClick);
mloginTrigger.addEventListener('click', toggleModal);
mCloseButton.addEventListener('click', toggleModal);
changeViewButton.addEventListener('click', viewLoggedInView)

function onWindowLoad() {
  if (JSON.parse(localStorage.getItem('loggedIn')) === true) {
    showLoggedInView()
  } else {
    mainView.classList.remove('hidden')
  }
}

function toggleModal() {
  mloginPopup.classList.toggle('show-modal');
}

function showLoggedInView() {
  loggedInView.classList.remove('hidden')
  mainView.classList.add('hidden')
}

function windowOnClick(event) {
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
  // showLoggedInView()
}

function checkLogInDetails() {
  const username = document.querySelector('#username')
  const password = document.querySelector('#password')
  const loggedInView = document.querySelector('.logged-in-view')
  const logInForm = document.querySelector('.mcontent')
// should check with input values be properties of User?
  if (username.value === 'manager' && password.value === 'overlook2020') {
    toggleModal()
    showLoggedInView()
    localStorage.setItem('loggedIn', true)
  } else if (username.value.includes('customer') && password.value === 'overlook2020') {
    toggleModal()
    showLoggedInView()
    localStorage.setItem('loggedIn', true)
  } else {
    logInForm.innerHTML += 'Please refresh and enter a valid username and password'
  }
}



function getTodaysDate() {
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  if (day < 10) {
    day = `0${day}`
  }
  if (month < 10) {
    month = `0${month}`
  }
  let today = `${month}-${day}-${date.getFullYear()}`
  document.getElementById('date-input').setAttribute('min', today)
}

getTodaysDate()
