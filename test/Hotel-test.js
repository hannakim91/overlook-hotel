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
  it('should show how many rooms are available for a given date', function() {

    const numberOfRooms = hotel.findRoomsAvailable('2020/04/22', sampleBookings)
    const numberRooms = hotel.findRoomsAvailable('2020/01/14', sampleBookings)
    expect(numberOfRooms).to.equal(23);
    expect(numberRooms).to.equal(6)

  });
});
