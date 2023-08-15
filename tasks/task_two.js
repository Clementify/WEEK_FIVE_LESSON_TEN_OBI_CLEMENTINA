// Task 2: Create a class of phones, using your intuition, add at least the core five features of a phone as the core class fields. Instantiate the phone class to create different types of phones at least three.

class Phones {
    constructor(screen, ram, rom, camera, battery, network){
        this.screen = screen;
        this.ram = ram;
        this.rom = rom;
        this.camera = camera;
        this.battery = battery;
        this.network = network
    }
}
let samsung = new Phones('6,7 pixels', '4gb', '128gb', '25pixel', '5000', '5g');
let redmi = new Phones('6,7 pixels' ,'4gb', '128gb', '25pixel', '5000', '5g')
let iphone = new Phones('6,7 pixels', '4gb', '128gb', '25pixel', '5000', '5g')
console.log(samsung)