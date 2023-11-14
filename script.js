// Nothing here yet...
// Make sure to link your JS in index.html!
// Steps
// Create a Car class, with a constructor that accepts 3 parameters: make (ex: Chevy, Ford, Toyota), model (ex: Camero, F150, Rav4), and year.
class Car {
constructor (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
describe () {
    return 'This is a ${this.year} ${this.model, made by ${this.make}}';
}
}
// Car should also include a method, .describe which simply returns "This is a YEAR MODEL, made by MAKE." replacing YEAR, MODEL and MAKE with the correct information from the Car object.

var car1 = new Car ('Chevy','Camaro', '2000');
var car2 = new Car ('Ford','F150', '2015');
var car3 = new Car ('Toyota','Rav4', '2022');
var car4 = new Car ('Toyota','Rav4', '2022');

// console.log('Car 1 is a ' + car1.year + ' ' + car1.make + ' ' + car1.model);



// const chevyTahoe = new Car("Chevrolet", "Tahoe", "2017");
// chevyTahoe.describe // This is a 2017 Tahoe, made by Chevrolet.
// Create 4 cars (with any make, model and year) and push them all to a new array called allCars.
// Create a new array called allCars.
// You will need to create 4 new variables, using the const {{carname}} = new Car() syntax. {{ carname }} is just whatever variable name you'll choose.
// Write a function with a single parameter car that, when called, will console.log the Car.describe method for the car used in the parameter.
// Declare the function using function {{ functionName }} (car) {};
// Inside the function's code block, simply return car.describe; so the function returns the describe phrase for the car in the parameters.
// Create an array called allCars, that includes all of the created cars. You can use array.push() or simply create the array with the data.
// Loop through allCars and call the function to log each car's describe method to the console one by one.
// You can use a for(), or forEach loop to achieve this. Remember to use allCars.length in your end condition if you use a for() loop.
// Remember you can call a function by simply writing the function with parenthesis around the parameters:
// functionName(param1, param2, param3, ...);