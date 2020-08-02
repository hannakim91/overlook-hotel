import User from '../src/User';

class Customer extends User {
  constructor(userData) {
    super()
    this.username = 'customer' + userData.id
  }

  
}

export default Customer
