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
