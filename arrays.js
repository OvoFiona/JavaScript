//Arrays - Store multiple values in a variable
const numbers = [1,2,3,4,5];
const fruits = ['apples','oranges','pears','grapes'];
console.log(numbers, fruits);

//Get one value- Arrays start at 0
console.log(fruits[0]);

//Add value
//Fruits[4]= 'blueberries';
//console.log(fruits);

//Add a value push
fruits.push('Straberries');
console.log(fruits);

//Add to beginning
fruits.unshift('mangoes');

//Remove last value
fruits.pop();
console.log(fruits);

//check if Array
console.log(Array.isArray(fruits));

console.log(fruits);
console.log(fruits.indexOf('grapes'));


