class Hotel {
  constructor() {}

  getBookingData(date, data) {
    let bookings = data.filter(booking => booking.date === date)
    return bookings
  }

  findRoomsAvailable(date, data) {
    let bookingsOnDate = this.getBookingData(date, data)
    return 25 - bookingsOnDate.length
  }

  calculatePercentBooked(date, data) {
    let bookingsOnDate = this.getBookingData(date, data)
    return (bookingsOnDate.length / 25) * 100
  }

  calculateTodaysRevenue(date, bookingData, roomData) {
    let bookingsOnDate = this.getBookingData(date, bookingData)
    return bookingsOnDate.reduce((dailyRevenue, bookedRoom) => {
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

  getAvailableRooms(date, bookingData, roomData) {
    let bookingsOnDate = this.getBookingData(date, bookingData)
    let rooms = roomData.reduce((roomsBooked, room) => {
      bookingsOnDate.forEach(booking => {
        if (booking.roomNumber === room.number) {
          roomsBooked.push(room)
        }
      })
      return roomsBooked
    }, [])
    return roomData.filter(room => !rooms.includes(room))
  }

  getRoomsByType(roomsAvailable, roomType) {
    return roomsAvailable.filter(room => room.roomType === roomType)
  }



    // get array of room objects based on roomsBooked -- array of rooms{} --> use that
  //filter over roomData
  //if !bookedRooms.includes(room)


  // iterate through roomData - return array of rooms where room.number DON'T match any room.roomNumber in roomsBooked array (nest iteration)


}

export default Hotel
