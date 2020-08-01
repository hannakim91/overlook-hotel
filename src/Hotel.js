class Hotel {
  constructor() {}

  getBookingData(date, data) {
    let bookings = data.filter(booking => booking.date === date)
    return bookings
  }

  findRoomsAvailable(date, data) {
    let roomsBooked = this.getBookingData(date, data)
    return 25 - roomsBooked.length
  }

  calculatePercentBooked(date, data) {
    let roomsBooked = this.getBookingData(date, data)
    return (roomsBooked.length / 25) * 100
  }

  calculateTodaysRevenue(date, bookingData, roomData) {
    let roomsBooked = this.getBookingData(date, bookingData)
    return roomsBooked.reduce((dailyRevenue, bookedRoom) => {
      roomData.forEach(room => {
        if (room.number === bookedRoom.roomNumber) {
          dailyRevenue += room.costPerNight
        }
      })
      return dailyRevenue
    }, 0)
  }

  // maybe refactor to give revenue for today OR give customer's total for the day -- reusable but would need 4 parameters passed through...

  findUsersBookings(id, bookingData) {
    let bookings = bookingData.filter(booking => booking.userID === id)
    return bookings
  }

  calculateUserSpending(id, bookingData, roomData) {
    let userBookings = this.findUsersBookings(id, bookingData)
    return userBookings.reduce((totalSpending, booking) => {
      roomData.forEach(room => {
        if (room.number === booking.roomNumber) {
          totalSpending += room.costPerNight
        }
      })
      totalSpending.toFixed(2)
      return totalSpending
    }, 0)
  }

}

export default Hotel
