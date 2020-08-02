import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';

describe('Customer', function() {
  let customer;
  beforeEach(() => {
    customer = new Customer();
  })
  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  });
  it('should be an instance of Customer', function() {
    expect(customer).to.be.an.instanceof(Customer);
  });
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});
