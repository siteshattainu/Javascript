//Object

let x = "this is a string";
let y = new String("this is another string");

let a = true;
let b = new Boolean(true);

let p = new Number(12);
let q = 12

// console.log(p)
// console.log(q)

// console.log(p == q)


let g = {};
g.name = "sdf";
// console.log(g)

//Factory Functions

function createCircle(radius) {
    let obj = {
        radius: radius,
        draw: function (){
            console.log("draw");
        }
    }
    return obj;
}

let obj1 = createCircle(5);
// console.log(obj1.draw());

//Constructor Function

function Circle(r, s, t) {
    this.radius = r;
    this.draw = function () {
        console.log("draw");
    }
}

let obj2 = new Circle(1);   // new creates an empty object { radius: radius, draw: ()}
// let obj3 = Circle(3);   // object which would be used here will be window variable

// In JS every function is an object

// Every object has a constructor property 
// which references the function that was used to create that object

// console.log(obj2);

let obj4 = new Circle(1);

// let obj5 = {};
Circle.call(undefined, 2);

Circle.apply({}, [54])

// Enumerating keys in an object

for(let i in obj4){
    console.log(i, obj4[i]);
}

class CreateCircle {
    constructor(radius){
        this.radius = radius
    }

    draw() {
        console.log("draw");
    }
}
