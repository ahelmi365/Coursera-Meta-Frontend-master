class Animal {
    constructor(color='Yellow', energy=100) {
        this.color = color;
        this.energy = energy;
    }

    isActive () {
        if (this.energy > 0) {
            this.energy-=20;
            console.log("Current Energy is:"+ this.energy);
        } else if (this.energy == 0) {
            this.sleep();
        }

    }
    sleep () {
        this.energy+=20;
        console.log(this.energy);
    }
    getColor () {
        console.log(this.color);
    }
}

class Cat extends Animal {
    constructor(sound='purr', canJumpHigh='true', canClimbTree='true', color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTree = canClimbTree;

    }
    makeSound () {
        console.log(this.sound);
    }
}

const cat1 = new Cat();
for (const prop in cat1) {
 console.log(prop, ':', cat1[prop]);
}
console.log('--------------------------------');

for (const key of Object.keys(cat1)) {
    console.log(key, ':', cat1[key]);
}

class Bird extends Animal {
    constructor(sound='chirp', canFly=true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor( houseCatSound='meow', color, energy, sound, canJumpHigh, canClimbTree) {
        super( sound, canJumpHigh, canClimbTree,color, energy );
        this.houseCatSound = houseCatSound;
    }

    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }

}

class Tiger extends Cat {
    constructor(tigerSound= "Roar!", color, energy, sound, canJumpHigh, canClimbTree) {
        super(color, energy, sound, canJumpHigh, canClimbTree);
        this.tigerSound = tigerSound;
    }
    makeSound(option){
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot  extends Bird{
    constructor(canTalk=false, color, energy, sound, canFly){
        super(color, energy, sound, canFly);
        this.canTalk = canTalk;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

// const parrot1 =  new Parrot(true);
// const parrot2 =  new Parrot(false);

// parrot1.makeSound();
// parrot1.makeSound(true);
// parrot2.makeSound();

// console.log(parrot1.color);
// console.log(parrot1.energy);
// console.log(parrot1.isActive());

// const peng = new Bird("Shrike", false, "white", 200);
// console.log(peng.energy);
// console.log(peng.isActive());


const leo = new HouseCat();
// leo.makeSound(false);
// leo.makeSound(true);
// console.log(leo.houseCatSound);


// var cuddles = new Tiger();
var cuddles = Object.create(Tiger);
// console.log(cuddles);
// console.log(cuddles.makeSound(true));


// console.log('****************************');
// for (const i of Object.keys(cuddles)) {
//     console.log(i,':', cuddles[i]);
// }

const arr = ['zeor','one','two','three'];

// for(i of arr){
//     console.log(i);
// }

// for(i in arr){
//     console.log(arr[i]);
// }
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

// for( key of Object.keys(clothingItem) ) {
//     console.log(key, ":", clothingItem[key])
// }

// const someKey = Math.random() > 0.5 ? 'price': 'color';
// console.log(someKey);

// console.log(clothingItem[someKey]);