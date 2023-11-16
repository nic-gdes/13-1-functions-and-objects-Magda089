// Nothing here yet...
// Make sure to link your JS in index.html!
alert("JavaScript is working!");
// Steps
// 1. Create a Car class, with a constructor that accepts 3 parameters: make (ex: Chevy, Ford, Toyota), model (ex: Camero, F150, Rav4), and year.
class Car {
constructor (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
  // Step 2: Include a describe method
describe () {
    return `This is a ${this.year} ${this.model}, made by ${this.make}.`;
}
}
// Step 3: Create 4 cars and push them to an array called allCars

const chevyCamaro = new Car ('Chevy','Camaro', '2000');
const fordF150 = new Car ('Ford','F150', '2015');
const toyotaRav4 = new Car ('Toyota','Rav4', '2022');
const hondaAccord = new Car ('Honda','Acord', '2018');




// Step 4 
// Write a function with a single parameter car that, when called, will console.log the Car.describe method for the car used in the parameter.
// Declare the function using function {{ functionName }} (car) {};
// Inside the function's code block, simply return car.describe; so the function returns the describe phrase for the car in the parameters.

function logCarDescription (car) {
    console.log (car.describe());
}


// Step 5
const allCars = [];
// Push the created cars to the allCars array
allCars.push(chevyCamaro, fordF150, toyotaRav4, hondaAccord);

// Step 6: Loop through allCars and call the function to log each car's describe method
for (let i = 0;i < allCars.length; i++) {
    logCarDescription(allCars[i]);
}