const api = {

  getUsers: () => {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
      .then(response => response.json())
      .then(data => data.users)
      .catch(error => console.error)
    },
  //calling on property that is an anonymous function

  getRooms: () => {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
      .then(response => response.json())
      .then(data => console.log(data.rooms))
      .catch(error => console.log(error))
  },

  getBookings: () => {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
      .then(response => response.json())
      .then(data => console.log(data.bookings))
      .catch(error => console.log(error))
  },

  getApiData: () => {
    return Promise.all([api.getUsers(), api.getRooms(), api.getBookings()])
      .then(response => {
        let newFetchData = {}
        newFetchData.userData = response[0]
        newFetchData.roomData = response[1]
        newFetchData.bookingData = response[2]
        console.log(newFetchData)
        return newFetchData
      })
      .catch(error => console.log(error))
  }
}



// can add/change properties/methods to const variable



export default api;
// in index.js - call api.getUsers/rooms..etc
