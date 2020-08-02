import chai from 'chai';
const expect = chai.expect;

import User from '../src/User';

describe('User', function() {
  let user;
  beforeEach(() => {
    user = new User('manager');
  })
  it('should be a function', function() {
    expect(User).to.be.a('function');
  });
  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  });
  it('should have a username', function() {
    expect(user.username).to.equal('manager');
  });
});
