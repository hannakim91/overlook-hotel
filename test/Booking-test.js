import chai from 'chai';
const expect = chai.expect;

import Booking from '../src/Booking';

describe('Booking', function() {
  let booking;
  beforeEach(() => {
    booking = new Booking()
  });
  it('should be a function', function() {
    expect(Booking).to.be.a('function');
  });
  it('should be an instance of Booking', function() {
    expect(booking).to.be.an.instanceof(Booking);
  });
  it('should have a default id', function() {
    expect(booking.id).to.equal('5fwrgu4i7k55hl6t8');
  });
  it('should have no room service charges as a default', function() {
    expect(booking.roomServiceCharges).to.deep.equal([])
  })
});
