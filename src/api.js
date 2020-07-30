const arrowFunction = () => console.log('hello')

const api = {

  getUsers: () => {
    const result = await 
    // await takes a promise
  },
  //calling on property that is an anonymous function

  getRooms: () => {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
      .then(response => response.json())
      .then(data => console.log(data));
      .catch(error => console.log(error))

  },

  getBookings: () => {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
      .then(response => response.json())
      .then(data => console.log(data));
      .catch(error => console.log(error))

  }

}


fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
  .then(response => response.json())
  .then(data => console.log(data));
  .catch(error => console.error)
// can add/change properties/methods to const variable



export default api;
// in index.js - call api.getUsers/rooms..etc
