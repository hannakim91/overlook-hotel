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
    console.log(roomsBooked)
    return roomsBooked.reduce((dailyRevenue, bookedRoom) => {
      roomData.forEach(room => {
        if (room.number === bookedRoom.roomNumber) {
          dailyRevenue += room.costPerNight
        }
      })
      return dailyRevenue
    }, 0)
  }



}

export default Hotel
