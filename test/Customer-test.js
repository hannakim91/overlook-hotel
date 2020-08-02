import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';
import sampleUsers from './data/sample-users';

describe('Customer', function() {
  let customer;
  beforeEach(() => {
    customer = new Customer(sampleUsers[0]);
  })
  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  });
  it('should be an instance of Customer', function() {
    expect(customer).to.be.an.instanceof(Customer);
  });
  it('should have a default password', function() {
    expect(customer.password).to.equal('overlook2020');
  });
  it('should have a username', function() {
    console.log(customer.username)
    expect(customer.username).to.equal('customer1');
  });
});
