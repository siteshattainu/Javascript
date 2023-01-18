// Class declaration
class Circle {
    constructor(Radius){
        this.radius = Radius
        this.draw = function(){
            console.log(this);
        }
    }
}

// Class expression
const class1 = class {
    constructor(value){
        this.value = value
    }
}


// Typeof class in JS
// console.log(typeof Circle); 

// Object of a class
const c = new Circle(1);


// There are two types to define a function
// 1. Function Declaration  => are hoisted
// 2. Function Expression   => not hoisted

// foo()

// Declaration
function foo(){
    console.log("this is function declaration")
}


// Expression
const bar = function(){
    console.log("this is function expression")
};
// bar()

// Class are by default not hoisted hence we cant use them unless defined before


// This keyword in Classes

class NewCircle {
    constructor(radius){
        this.radius = radius
        this.draw = function(){
            console.log(this);
        }
    }
}

const CircleFunction = function () {
    this.draw = function(){
        console.log(this);
    }
}


const circle_object = new NewCircle(5);
const circle_function_object = new CircleFunction();


const draw = circle_object.draw;
//Method call
// circle_object.draw();
//Function call
// draw();

const draw1 = circle_function_object.draw;
// draw1();


// Getter Setter

class Shape {
    constructor(length){
        this.length_ = length;
        // this.breadth = breadth;
    }

    move(){
        console.log("move");
    }

    get length(){
        return this.length_;
    }

    set length(value){
        this.length_ = value;
    }
}

const shape1 = new Shape(1);
console.log(shape1)

shape1.length = 4;
console.log(shape1.length);

