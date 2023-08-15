// Task 3: Create a dog class and add the following methods: bark, walk, run,wiggleTail, and getAngry. Add the following fields: breed, colour, size, and tail. Instantiate the class to create at least three different breeds. Develop a simple UI for dogs with buttons for bark, run,getAngry, wiggleTail. Add an event listener, on click, call the method to display what the dog is doing to the user.

class Dog {
    constructor(breed,colour,size,tail){
        this.breed = breed;
        this.colour = colour;
        this.size = size;
        this.tail = tail
    }
    bark(){
        return('Your dog is barking')
    }
    walk(){
        return('Your dog is walking')
    }
    run(){
        return('Your dog is running')
    }
    wiggleTail(){
        return('Your Dog is wiggling Tail')
    }
    getAngry(){
        return('Your dog is angry')
    }
}
const avatar = new Dog('german Shepherd','black','large','long')
const  zeus= new Dog('hybrid','black','xxlarge','short')
const Ceaser = new Dog('wolf','brown','xlarge','long')
console.log(avatar)
const barkButton = document.querySelector('.bark')
const runButton = document.querySelector('.run')
const wiggleButton = document.querySelector('.wiggle')
const angryButton = document.querySelector('.angry')
const displayContent = document.querySelector('.para')
const image = document.querySelector('.img img')
barkButton.addEventListener('click',()=>{
displayContent.innerHTML = avatar.bark();
image.src = '../images/barking-dog-gif'
}
)
runButton.addEventListener('click',()=>{
displayContent.innerText = avatar.run();
image.src = '../Images/dog-running.gif'
}
)
wiggleButton.addEventListener('click',()=>{
displayContent.innerText = avatar.wiggleTail();
image.src = '../Images/giphy.gif'
}
)
angryButton.addEventListener('click',()=>{
displayContent.innerText = avatar.getAngry();
image.src = '../Images/angryDog.gif'
}
)




