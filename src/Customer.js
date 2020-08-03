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

  findBookings(hotel, bookingData) {
    this.bookings = hotel.findUsersBookings(this.id, bookingData);
  }

}

export default Customer
