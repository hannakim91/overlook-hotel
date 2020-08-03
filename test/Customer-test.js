import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';
import Customer from '../src/Customer';
import sampleUsers from './data/sample-users';
import sampleBookings from './data/sample-bookings';
import sampleRooms from './data/sample-rooms';

describe('Customer', function() {
  let hotel;
  let customer;
  beforeEach(() => {
    hotel = new Hotel();
    customer = new Customer(sampleUsers[0]);
  });
  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  });
  it('should be an instance of Customer', function() {
    expect(customer).to.be.an.instanceof(Customer);
  });
  it('should have a username', function() {
    expect(customer.username).to.equal('customer1');
  });
  it('should have an id #', function() {
    expect(customer.id).to.equal(1)
  });
  it('should have a name', function() {
    expect(customer.name).to.equal('Leatha Ullrich')
  });
  it('should hold a list of their bookings', function() {
    customer.getMyBookingData(hotel, sampleBookings)

    expect(customer.bookings.length).to.equal(25)
    expect(customer.bookings[0].userID).to.equal(1)
  });
  // it('should be able to add a new booking', function() {
  //   customer.addBooking(hotel, '2021/01/01', sampleBookings, roomData)
  //   expect(this.bookings.length).to.equal(26)
  // });
  // it('should receive a verbose apology if a desired room is unavailable/not get a new booking added', function() {
  //   customer.addBooking()
  //   expect(this.bookings.length).to.equal(25)
  // });
});
