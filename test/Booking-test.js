import chai from 'chai';
const expect = chai.expect;

import Booking from '../src/Booking';

describe('Booking', function() {
  let booking;
  let bookingInfo = {
    "id": "5fwrgu4i7k55hl6yv",
    "userID": 32,
    "date": "2020/01/21",
    "roomNumber": 10,
    "roomServiceCharges": []
    }
  beforeEach(() => {
    booking = new Booking(bookingInfo)
  });
  it('should be a function', function() {
    expect(Booking).to.be.a('function');
  });
  it('should be an instance of Booking', function() {
    expect(booking).to.be.an.instanceof(Booking);
  });
  it('should have a id', function() {
    expect(booking.id).to.equal('5fwrgu4i7k55hl6yv');
  });
  it('should have a userID', function () {
    expect(booking.userID).to.equal(32);
  });
  it('should have no room service charges as a default', function() {
    expect(booking.roomServiceCharges).to.deep.equal([])
  });
});
