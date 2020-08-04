// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// probably don't neeed to import partial file to index.js if you're importing other scss into base.s

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import Hotel from '../src/Hotel';
import Customer from '../src/Customer';
import Booking from '../src/Booking';

import api from './api.js'

const hotel = new Hotel()

function apiData() {
  api.getApiData()
    .then(data => {
      data.userData.forEach(user => {
        hotel.users.push(new Customer(user))
      })
      data.roomData.forEach(room => {
        hotel.rooms.push(room)
      })
      // if not turning into objects -- don't need foreach loops
      data.bookingData.forEach(booking => {
        hotel.bookings.push(booking)
      })
    })
    .then(() => populateCustomerDashboard())
}

const mloginPopup = document.querySelector('.mlogin-popup');
const mloginTrigger = document.querySelector('.mlogin-trigger');
const modalCloseButton = document.querySelector('.mclose-button');
const changeViewButton = document.querySelector('.change-view-button');
const customerDashboardView = document.querySelector('.customer-dashboard-view')
const managerDashboardView = document.querySelector('.manager-dashboard-view')
const mainView = document.querySelector('.main-view')
const logOutButton = document.querySelector('.log-out-button')

window.addEventListener('load', onWindowLoad)
window.addEventListener('click', windowOnClick);
mloginTrigger.addEventListener('click', toggleModal);
modalCloseButton.addEventListener('click', toggleModal);
changeViewButton.addEventListener('click', viewDashboard);
logOutButton.addEventListener('click', handleLogOutClick);

function onWindowLoad() {
  if (JSON.parse(localStorage.getItem('loggedIn')) === true && localStorage.getItem('userType') === 'customer') {
    showCustomerDashboard()
  } else if (JSON.parse(localStorage.getItem('loggedIn')) === true && localStorage.getItem('userType') === 'manager') {
    showManagerDashboard()
  } else {
    mainView.classList.remove('hidden')
  }
}

function toggleModal() {
  mloginPopup.classList.toggle('show-modal');
}

function windowOnClick(event) {
  if (event.target === mloginPopup) {
    toggleModal();
  }
}

function viewDashboard(event) {
  event.preventDefault();
  toggleModal()
  checkLogInDetails()
  // showDashboard()
}

function checkLogInDetails() {
  const username = document.querySelector('#username')
  const password = document.querySelector('#password')
  const logInForm = document.querySelector('.mcontent')
// should check with input values be properties of User?
  if (username.value === 'manager' && password.value === 'overlook2020') {
    showManagerDashboard() // not yet a method
    storeManagerData()
  } else if (username.value.includes('customer') && password.value === 'overlook2020') {
    storeCustomerData()
    showCustomerDashboard()
  } else {
    logInForm.innerHTML += 'Please refresh and enter a valid username and password'
  }
}

function storeManagerData() {
  localStorage.setItem('loggedIn', true)
  localStorage.setItem('userType', 'manager')
}

function storeCustomerData() {
  localStorage.setItem('loggedIn', true)
  localStorage.setItem('userType', 'customer')
}
// make this a toggle
function showCustomerDashboard() {
  customerDashboardView.classList.remove('hidden')
  mainView.classList.add('hidden')
  apiData()
}

function populateCustomerDashboard() {
  customerDashboardView.innerHTML += `${hotel.users[0].name}`
}

function showManagerDashboard() {
  managerDashboardView.classList.remove('hidden')
  mainView.classList.add('hidden')
}

function handleLogOutClick(event) {
  localStorage.setItem('loggedIn', false)
  managerDashboardView.classList.add('hidden')
  customerDashboardView.classList.add('hidden')
  mainView.classList.remove('hidden')
  //not working for manager ATM -- need to do querySelectorAll and loop in eventhandler function
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
