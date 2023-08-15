
// Task 1: Create a class of car with the following fields: numSeats, numbHeadLamps, fuelTankMaxLitre, numbExhaustPipe, convertible(boolean), numbOfDoors, numbOfEnginePlug(default to 4). Instantiate the class to create different types of cars using your car class(at least for).

// Write something
class Car {
    constructor(numbSeats,numHl,FTML,nEMP,car,doors,numEP =4){
        this.numberOfSeats = numbSeats;
        this.numberOfHeadlamps = numHl;
        this.fuelTankManagement = FTML;
        this.nEMP = nEMP;
        this.car = car;
        this.doors = doors;
        this.numEP = numEP
    }
}
const Toyota = new Car (54,3, 'max', 'map', 'spider', 'four')
console.log(Toyota)