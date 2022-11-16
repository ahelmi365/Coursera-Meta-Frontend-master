// const fruits = ['kiwi', 'mango', 'apple', 'pear'];
// function appendIndex(fruit, index) {
//     console.log(`${index}. ${fruit}`)
// }


// fruits.forEach((item, indx) => {
//     console.log(indx,'.',item);
// })

// const veggies = ['onion', 'garlic', 'potato'];
// veggies.forEach( function(veggie, index) {
//     console.log(`${index}. ${veggie}`);
// });

// veggies.forEach(item=>{
//     console.log(item);
// })

const nums = [0, 10, 20, 30, 40, 50];
const filtersNums = nums.filter(num => num > 20);

// console.log(filtersNums);

const doupleNums = nums.map(num => num * 2);

// console.log(doupleNums);



let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

// console.log(bestBoxers.get(1));
const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];

// const uniqueFruits = new Set(repetitiveFruits);
// console.log(uniqueFruits.get(1));

const [x1, x2, x3, ...others] = repetitiveFruits;
// console.log(x1, x2, x3);
// console.log(others);


const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
// console.log(fruitsAndBerries); // outputs a single array


const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = { flying, car }
// console.log(flyingCar) // {wings: 2, wheels: 4}


const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
// console.log(starter);


const filteredMeal = meal.filter((m) => m.startsWith('i'));

// console.log(filteredMeal);

const numsArr = [-1, 2, 3, 4, 5];
const numsArrDouple = numsArr.map(item => item * 2);
// console.log(numsArrDouple);

const numsArrReduced = numsArr.reduce(function (prevVal, currVal, i) {
    // console.log(`i------: ${i}`);
    // console.log(`prevVal: ${prevVal}`);
    // console.log(`currVal: ${currVal}`);
    // console.log('---------------------');
    return prevVal + currVal
},0);
// console.log(numsArrReduced);

const sumPositiveNums = numsArr.reduce((p,c)=>{
    console.log(p);
    if(p>0){
        console.log("c",c);
        console.log("p+c", p+c);
        return p+c;
    }
});

console.log(sumPositiveNums);

