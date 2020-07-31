import chai from 'chai';

import sampleRooms from './data/sample-rooms';
import sampleBookings from './data/sample-bookings';
import sampleUsers from './data/sample-users';

import Hotel from '../src/Hotel';

const expect = chai.expect;

describe('Hotel details', function() {
  let hotel;
  beforeEach(() => {
    hotel = new Hotel();
  })
  it('should be a function', function() {
    expect(Hotel).to.be.a('function');
  });
  it('should be an instance of Hotel', function() {
    expect(hotel).to.be.an.instanceof(Hotel);
  });
  it('should calculate how many rooms are available for a given date', function() {
    const numberOfRooms = hotel.findRoomsAvailable('2020/04/22', sampleBookings)
    const numberRooms = hotel.findRoomsAvailable('2025/01/05', sampleBookings)
    console.log(numberRooms)
    expect(numberOfRooms).to.equal(23);
    expect(numberRooms).to.equal(25)
  });
  it('should calculate total revenue for today\'s date', function() {
    const todaysRevenue = hotel.calculateTodaysRevenue('2020/04/22', sampleBookings, sampleRooms)
    const nonExistentRevenue = hotel.calculateTodaysRevenue('2025/01/05', sampleBookings)
    //2 rooms - 294.56+176.36
    expect(todaysRevenue).to.equal(470.92)
    expect(nonExistentRevenue).to.equal(0)
  });
  it('should calculate percentage of rooms occupied for today\'s date', function() {
    const percentBooked = hotel.calculatePercentBooked('2020/04/22', sampleBookings)
    const noBookingsDate = hotel.calculatePercentBooked('2025/01/05', sampleBookings)

    expect(percentBooked).to.equal(8)
    expect(noBookingsDate).to.equal(0)
  });
});
