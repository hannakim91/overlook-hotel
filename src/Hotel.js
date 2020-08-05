class Hotel {
  constructor(roomData, userData, bookingData) {
    this.rooms = roomData || [];
    this.users = userData || [];
    this.bookings = bookingData || [];
  }

  getBookingData(date) {
    let bookings = this.bookings.filter(booking => booking.date === date)
    return bookings
  }

  findRoomsAvailable(date) {
    let bookingsOnDate = this.getBookingData(date)
    return 25 - bookingsOnDate.length
  }

  calculatePercentBooked(date) {
    let bookingsOnDate = this.getBookingData(date)
    return (bookingsOnDate.length / 25) * 100
  }

  calculateTodaysRevenue(date) {
    let bookingsOnDate = this.getBookingData(date)
    return bookingsOnDate.reduce((dailyRevenue, bookedRoom) => {
      this.rooms.forEach(room => {
        if (room.number === bookedRoom.roomNumber) {
          dailyRevenue += room.costPerNight
        }
      })
      return dailyRevenue
    }, 0)
  }

  // maybe refactor to give revenue for today OR give customer's total for the day -- reusable but would need 4 parameters passed through... -also if naming too generic, will you know what it's doing?

//can separate out pieces of the method instead
  findUserBookings(id) {
    let userBookings = this.bookings.filter(booking => booking.userID === id)
    return userBookings
  }

  calculateUserSpending(id) {
    let userBookings = this.findUserBookings(id)
    return userBookings.reduce((totalSpending, booking) => {
      this.rooms.forEach(room => {
        if (room.number === booking.roomNumber) {
          totalSpending += room.costPerNight
        }
      })
      totalSpending.toFixed(2)
      return totalSpending
    }, 0)
  }

  getAvailableRooms(date) {
    let bookingsOnDate = this.getBookingData(date, this.bookings)
    let rooms = this.rooms.reduce((roomsBooked, room) => {
      bookingsOnDate.forEach(booking => {
        if (booking.roomNumber === room.number) {
          roomsBooked.push(room)
        }
      })
      return roomsBooked
    }, [])
    return this.rooms.filter(room => !rooms.includes(room))
  }

  getRoomsByType(roomsAvailable, roomType) {
    return roomsAvailable.filter(room => room.roomType.includes(roomType))
  }


    // get array of room objects based on roomsBooked -- array of rooms{} --> use that
  //filter over roomData
  //if !bookedRooms.includes(room)


  // iterate through roomData - return array of rooms where room.number DON'T match any room.roomNumber in roomsBooked array (nest iteration)


}

export default Hotel
