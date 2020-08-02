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

  // maybe refactor to give revenue for today OR give customer's total for the day -- reusable but would need 4 parameters passed through... -also if naming too generic, will you know what it's doing?

//can separate out pieces of the method instead
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

  getAvailableRooms(date, bookingData, roomData) {
    let roomsBooked = this.getBookingData(date, bookingData)
    return roomData.reduce((list, room) => {
      roomsBooked.forEach(bookedRoom => {
        if (room.number !== bookedRoom.roomNumber) {
          list.push(room)
        }
      })
      console.log(list)
      return list
    }, [])

  }


  // iterate through roomData - return array of rooms where room.number DON'T match any room.roomNumber in roomsBooked array (nest iteration)

}

export default Hotel
