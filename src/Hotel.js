class Hotel {
  constructor() {}

  findRoomsAvailable(date, data) {
    let roomsBooked = data.filter(booking => booking.date === date)
    console.log(roomsBooked.lengths)
    return 25 - roomsBooked.length
  }

}

export default Hotel
