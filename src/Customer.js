import User from '../src/User';

class Customer extends User {
  constructor(userData) {
    super()
    this.username = 'customer' + userData.id;
    this.id = userData.id;
    this.name = userData.name;
  }


}

export default Customer
