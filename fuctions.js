function gets_something(){
    let user_name = "John";
    console.log(user_name);
}

gets_something();

//Functions with parameters
function get_values(name) {
    console.log(name);
}
get_values("Fiona");

function add(num1, num2){
    let sum = num1 + num2;
    return sum;
}
let ans = add(10,5);
console.log(ans);

function get_values(name) {
    console.log("Hello" +name);
}
get_values("Fiona");

//no arguments but return a value
function div(){
    let num1 = 35;
    console.log("the first number is" +num1);
    let num2 = 7;
    let my_div = num1/num2;
    return my_div;
}

let get_ans = div();
//console.log(num1);
console.log(get_ans);

//anon fuctions
function getSomething(){
    return "Hello world";
}
console.log(name());

//factorial
function factorial(num){
    if(num ==0){
        return 1;
    }else{
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));