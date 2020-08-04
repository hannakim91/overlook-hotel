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

// document = everything on page therefore can't select something that isn't already on the doc -- need to use a diff way to target at another time
const mloginPopup = document.querySelector('.mlogin-popup');
const mloginTrigger = document.querySelector('.mlogin-trigger');
const modalCloseButton = document.querySelector('.mclose-button');
const changeViewButton = document.querySelector('.change-view-button');
const customerDashboardView = document.querySelector('.customer-dashboard-view');
const managerDashboardView = document.querySelector('.manager-dashboard-view');
const mainView = document.querySelector('.main-view');

window.addEventListener('load', onWindowLoad);
window.addEventListener('click', windowOnClick);
mloginTrigger.addEventListener('click', toggleModal);
modalCloseButton.addEventListener('click', toggleModal);
changeViewButton.addEventListener('click', viewDashboard);

// function parseLocalStorage() {
//
// }

function onWindowLoad() {
  let user = localStorage.getItem('user')
  console.log(user)
  if (JSON.parse(localStorage.getItem('loggedIn')) === true && user.includes('customer')) {
    showCustomerDashboard()
  } else if (JSON.parse(localStorage.getItem('loggedIn')) === true && localStorage.getItem('user') === 'manager') {
    showManagerDashboard()
  } else {
    mainView.classList.remove('hidden')
  }
}

function toggleModal() {
  mloginPopup.classList.toggle('show-modal');
}

function windowOnClick(event) {
  console.log(event.target)
  if (event.target === mloginPopup) {
    toggleModal();
  }
  handleLogOutClick(event);
  searchForRooms(event);
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
    storeCustomerData(username.value)
    showCustomerDashboard()
  } else {
    logInForm.innerHTML += 'Please refresh and enter a valid username and password'
  }
}

function storeManagerData() {
  localStorage.setItem('loggedIn', true)
  localStorage.setItem('user', 'manager')
}

function storeCustomerData(username) {
  localStorage.setItem('loggedIn', true)
  localStorage.setItem('user', username)
}


// make this a toggle
function showCustomerDashboard() {
  customerDashboardView.classList.remove('hidden')
  mainView.classList.add('hidden')
  apiData()
}

function createUpcomingBookingsDisplay(bookings) {
  let upcomingBookings = '<ul>'
  bookings.forEach(booking => {
    if (booking.date >= getTodaysDate()) {
      upcomingBookings += '<li>' + booking.date + ': Room ' + booking.roomNumber + '</li>'
    }
  })
  return upcomingBookings += '</ul>'
}

function createPastBookingsDisplay(bookings) {
  let pastBookings = '<ul>'
  bookings.forEach(booking => {
    if (booking.date < getTodaysDate()) {
      pastBookings += '<li>' + booking.date + ': Room ' + booking.roomNumber + '</li>'
    }
  })
  return pastBookings += '</ul>'
}

function populateCustomerDashboard() {
  const userBookings = hotel.findUserBookings(hotel.users[1].id)

  customerDashboardView.innerHTML += `
    <section class="customer-booking-info">
      <h1 class="customer-header">Hello ${hotel.users[1].name}!</h1>
      <section>
        <h2>Your Bookings</h2>
          <h3>Upcoming Bookings:</h3>
            <p>${createUpcomingBookingsDisplay(userBookings)}</p>
          <h3>Past Bookings:</h3>
            <p>${createPastBookingsDisplay(userBookings)}</p>
          <h3>Total Spending at The Overlook Hotel:</h3>
            <p>$${hotel.calculateUserSpending(hotel.users[1].id)}</p>
      </section>
    </section>`
}

function availableRoomsDisplay(roomsOpen) {
  let availableRooms = '<ul>'
  roomsOpen.forEach(room => {
    availableRooms += '<li>' + 'Room Number: ' + room.number + ' Room Type: ' + room.roomType + '</li>'
    })
  return availableRooms += '</ul>'
}

function searchForRooms(event) {
  const dateInput = document.querySelector('#date-input')
  const customerBookingInfo = document.querySelector('.customer-booking-info')
  const searchResults = document.querySelector('.search-results')
  const date = dateInput.value.replace(/-/g, '/')
  const roomsOpen = hotel.getAvailableRooms(date)

  if (event.target.id === 'search-date-button') {
    customerBookingInfo.classList.add('hidden')
    if (date < getTodaysDate()) {
      searchResults.innerHTML += `You can only see available rooms for ${getTodaysDate()} and beyond.`
    } else if (roomsOpen.length === 0) {
      searchResults.innerHTML = `So very extremely and relentlessly sorry to bring to your awareness that there are no rooms available for ${date}. We humbly suggest considering a different date at your leisure if there is an inkling of a possibility of any flexibility. Sorry.`
    } else {
      searchResults.innerHTML = `
        <section class="customer-search-results">
          ${availableRoomsDisplay(roomsOpen)}
        </section>`
    }
  }
}

function showManagerDashboard() {
  managerDashboardView.classList.remove('hidden')
  mainView.classList.add('hidden')
}

//event bubbling
// click handler function - if event.target === logOutButton
 // calls display functions

 //cant recognize eventhandler but can register event.target.id --- now handlelogoutclick only getting called on click -- creation phase (variable and function declarations) - article not available yet on window load
//within clickhandler function: looking at what you're clicking on /now -- at time of event/ and seeing if it meets condition
//no variable assignment happening ---
// id !== function or variable - it doesn't need to be assigned
function handleLogOutClick(event) {
  if (event.target.id === 'log-out-button') {
    localStorage.setItem('loggedIn', false)
    managerDashboardView.classList.add('hidden')
    customerDashboardView.classList.add('hidden')
    mainView.classList.remove('hidden')
  }
  //not working for manager ATM -- event.target.classlist.contains -- make it class instead
}

function getTodaysDate() {
  let date = new Date()
  let day = date.getDate()
  let month = (date.getMonth() + 1)
  if (day < 10) {
    day = `0${day}`
  }
  if (month < 10) {
    month = `0${month}`
  }
  let today = `${date.getFullYear()}/${month}/${day}`
  document.getElementById('date-input').setAttribute('min', today)
  return today
}

getTodaysDate()
