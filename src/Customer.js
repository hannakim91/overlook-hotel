import User from '../src/User';
import Hotel from '../src/Hotel';

class Customer extends User {
  constructor(userData) {
    super()
    this.username = 'customer' + userData.id;
    this.id = userData.id;
    this.name = userData.name;
    this.bookings = [];
  }

  getMyBookingData(hotel, bookingData) {
    this.bookings = hotel.findUsersBookings(this.id, bookingData);
  }

  seeAvailableRooms(hotel, date, bookingData, roomData) {
    let availableRooms = hotel.getAvailableRooms(date, bookingData, roomData)
  }
}

export default Customer
