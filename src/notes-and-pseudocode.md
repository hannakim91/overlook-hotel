https://pixabay.com/illustrations/texture-background-mandala-2111362/

https://pixabay.com/vectors/pattern-seamless-background-5358326/

**Test and write method that calculates total rooms available for today's date**
iterate through sampleBookings array
and filter date given === booking.date - assign returned array to a variable, roomsBookedOnDate

iterate through roomsBookedOnDate array and return array of booking.roomNumber
total rooms (25) - array.length = rooms available for today's date

**Total revenue for today’s date**
find rooms booked for given date
returns array of booked room objects
roomsBooked.roomNumber -- need to iterate through roomsBooked and sampleRooms both?

iterate through rooms array with reduce -acc = sum, element = room,
if booking.roomNumber to room.number
return sum of room.costPerNight

nested loop inside reduce--- iterate through sampleRooms(roomData)

### kyle info on classes:
hotel may be useful to know about all rooms
manager - what is your job, what do you need to know as manager
should building itself be doing calculations? maybe?
maybe reservation class -- knows about rooms and reservation data, costPerNight
from each reservation -- map over and add cost per night?
**keep everything as dry as possible** - plug in different arays
- maybe calculator class? --> call caclulator's methods in cust/manager
- parent class for customer/manager -- has call functions from hotel/calculator

**Customer select a room for booking**
- first need to connect Hotel/calculation methods to Customer class and call methods from scripts?
- where should this live?
- POST request when hit "book" button
**fetching and using API data**
// repo could live inside Hotel
//manager vs customer -- access all info vs just themselves
// Bookings - class
// separation: hotel doesn't want user to see all data -- therefore don't want repo's as global variables
// if manager/customer..


// this.username === username.value -- if no user found/error message

// promise lets function get called --- but since async - it says move on/keep loading page so consolelog doesnt show up yet
//or userRepositorylike old project =-- ** do this with bookings/room repos**

// fake database --> need to store it somewhere (global instances of repo classes for now)

// calendar->pick date -> compare rooms in hotel vsbookings for date
// dynamic web app pattern - page in loading state until api call finished
**display customer dashboard**
populateCustomerDashboard()
how to get out of objectObject -- can't post arrays -- maybe array -> string and turn it into an unordered list via HTML?
also want Hotel method to add this data to customer instance and populate HTML from there instead of hotel
and only display date, room number, roomservice charges (map)
### still need to match right user logged in to user info displayed!!!!

**get to search results page**
- also need some buttons to view/hide different rooms by getRoomsByType
- queryselectorall for this?
- be able to select a room to book

const roomType = event.target.id
console.log(roomType)
console.log(availableRoomsDisplay(suite))
