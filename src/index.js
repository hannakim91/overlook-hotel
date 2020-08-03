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

const mloginPopup = document.querySelector('.mlogin-popup');
const mloginTrigger = document.querySelector('.mlogin-trigger');
const modalCloseButton = document.querySelector('.mclose-button');
const changeViewButton = document.querySelector('.change-view-button');
const dashboardView = document.querySelector('.dashboard-view')
const mainView = document.querySelector('.main-view')
const logOutButton = document.querySelector('#log-out-button')

window.addEventListener('load', onWindowLoad)
window.addEventListener('click', windowOnClick);
mloginTrigger.addEventListener('click', toggleModal);
modalCloseButton.addEventListener('click', toggleModal);
changeViewButton.addEventListener('click', viewDashboard);
logOutButton.addEventListener('click', handleLogOutClick);

function handleLogOutClick(event) {
  mainView.classList.remove('hidden')
  dashboardView.classList.add('hidden')
  localStorage.setItem('loggedIn', false)
  //clear local storage
}

function onWindowLoad() {
  if (JSON.parse(localStorage.getItem('loggedIn')) === true) {
    showDashboard()
  } else {
    mainView.classList.remove('hidden')
  }
}

function toggleModal() {
  mloginPopup.classList.toggle('show-modal');
}

// make this a toggle
function showDashboard() {
  dashboardView.classList.remove('hidden')
  mainView.classList.add('hidden')
}

function windowOnClick(event) {
  if (event.target === mloginPopup) {
    toggleModal();
  }
}
let users = []
api.getApiData().then(allData => {
  allData.userData.forEach(user => {
    users.push(user)
  })
})
console.log(users)


function viewDashboard(event) {
  event.preventDefault();

  checkLogInDetails()
  // showDashboard()
}

function checkLogInDetails() {
  const username = document.querySelector('#username')
  const password = document.querySelector('#password')
  const dashboardView = document.querySelector('.dashboard-view')
  const logInForm = document.querySelector('.mcontent')
// should check with input values be properties of User?
  if (username.value === 'manager' && password.value === 'overlook2020') {
    toggleModal()
    showDashboard()
    localStorage.setItem('loggedIn', true)
  } else if (username.value.includes('customer') && password.value === 'overlook2020') {
    toggleModal()
    showDashboard()
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
