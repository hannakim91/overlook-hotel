const expect = require('chai').expect;
const User = require('../src/User');
const Customer = require('../src/Customer');
const Manager = require('../src/Manager');

const users = [
  {
    "id": 1,
    "name": "Leatha Ullrich"
  },
  {
    "id": 2,
    "name": "Rocio Schuster"
  },
  {
    "id": 3,
    "name": "Kelvin Schiller"
  },
  {
    "id": 4,
    "name": "Kennedi Emard"
  },
  {
    "id": 5,
    "name": "Rhiannon Little"
  }
]

// 1 has 1 booking, 2 has 2 bookings, 3 has 0 bookings, user 4 has 2,
const bookings = [
  {
    "id": "5fwrgu4i7k55hl6t8",
    "userID": 1,
    "date": "2020/02/05",
    "roomNumber": 12,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6vw",
    "userID": 2,
    "date": "2020/02/11",
    "roomNumber": 9,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6uf",
    "userID": 2,
    "date": "2020/01/09",
    "roomNumber": 18,
    "roomServiceCharges": []
  },
  {
    "id":"5fwrgu4i7k55hl89r",
    "userID":4,
    "date":"2020/02/01",
    "roomNumber":5,
    "roomServiceCharges":[]
  },
  {
    "id":"5fwrgu4i7k55hl6vc",
    "userID":4,
    "date":"2020/01/18",
    "roomNumber":18,
    "roomServiceCharges":[]
  },
  {"id":"5fwrgu4i7k55hl72y","userID":5,"date":"2020/01/23","roomNumber":12,"roomServiceCharges":[]},
]
