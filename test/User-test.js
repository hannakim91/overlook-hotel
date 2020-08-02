import chai from 'chai';
const expect = chai.expect;

import User from '../src/User';

describe('User', function() {
  let user;
  beforeEach(() => {
    user = new User();
  })
  it('should be a function', function() {
    expect(User).to.be.a('function');
  });
  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  });
  it('should have a default password', function() {
    expect(user.password).to.equal('overlook2020');
  });
});
