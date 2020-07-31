class Hotel {
  constructor() {}

  findRoomsBooked(date, data) {
    let roomsBooked = data.filter(booking => booking.date === date)
    return roomsBooked
  }

  findRoomsAvailable(date, data) {
    let roomsBooked = this.findRoomsBooked(date, data)
    return 25 - roomsBooked.length
  }

  calculatePercentBooked(date, data) {
    let roomsBooked = this.findRoomsBooked(date, data)
    return (roomsBooked.length / 25) * 100
  }
// maybe refactor to give revenue for today OR give customer's total for the day -- reusable
  calculateTodaysRevenue(date, bookingData, roomData) {
    let roomsBooked = this.findRoomsBooked(date, bookingData)
    return roomsBooked.reduce((dailyRevenue, bookedRoom) => {
      roomData.forEach(room => {
        if (room.number === bookedRoom.roomNumber) {
          dailyRevenue += room.costPerNight
        }
      })
      return dailyRevenue
    }, 0)
  }

  findUsersBookings(id, bookingData) {
    let bookings = bookingData.filter(booking => booking.userID === id)
    return bookings
  }

// refactor with findRoomsBooked - maybe generic "findBookingData"?
  calculateUserSpending(id, bookingData, roomData) {
    let userBookings = bookingData.filter(booking => booking.userID === id)
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
