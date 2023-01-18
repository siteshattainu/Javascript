
// Base/Super/Parent
class Shape {
    constructor(color, noofsides){
        this.color_ = color;
        this.noofsides_ = noofsides;
    }
    move(){
        console.log("move")
    }
}

// Derived/Sub/Child
class Circle extends Shape {
    constructor(radius){
        super("blue", "infinity");          // super is used to initialize the parent class
        this.radius_ = radius;
        // this.noofsides_ = sides;
    }
    draw(){
        console.log("draw");
    }
}

const circle = new Circle(3)
// console.log(circle)

// console.log(circle instanceof Circle);      // returns true
// console.log(circle instanceof Shape);       // returns true

class Rectangle extends Shape {
    constructor(length, breadth){
        super("green", 4)
        this.length_ = length;
        this.breadth_ = breadth;
    }
}

const rectangle = new Rectangle(1,2)
// console.log(rectangle);


// MCQ 2

var person = {
    age: 23,
    getAge: function(){
      return this.age;
    }
}

var person2 = {age:  54};
// console.log(person.getAge.call(person2));

// MCQ 3

var anotherPerson = {
    name: "Sherlock",
    getName: function(message) {
        return this.name + " is " + message;
    }
}

var person4 = {name:  "John"};
// console.log(anotherPerson.getName.apply(person4, ["awesome"]));