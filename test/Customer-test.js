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
  it('should have a username', function() {
    expect(customer.username).to.equal('customer1');
  });
  it('should have an id #', function() {
    expect(customer.id).to.equal(1)
  });
  it('should have a name', function() {
    expect(customer.name).to.equal('Leatha Ullrich')
  })
});
