function foo(){
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('data resolved');
        }, 1000);
    });
    return promise;
}

async function asyncFunction() {
    const result = await foo();
    console.log(result);
}

// foo().then((data) => {
//     console.log(data);
// })

// asyncFunction();
// console.log("this is after the function call");


/*

1. Await waits for the promise to get resolved => to get the fullfillment value
2. It can be called only inside an async function
3. It pauses the execution of the async function
4. If a value is not promise await converts it to a promise
5. Async always returns a promise
6. An async function can contain 0 or more await expressions
*/


// MCQ 1

async function foo() {
    console.log("this is the first line");          // 1st
    const result1 = await new Promise((resolve) => {
      setTimeout(() => resolve("1"))
      console.log("inside the promise");
    }
    );

    console.log(result1);       // 3rd
    console.log("after 1st promise");   // 4th
    const result2 = await new Promise((resolve) =>
      setTimeout(() => resolve("2"))
    );
    console.log(result2);       // 5th
}

// this is the first line, after async function, 1, after 1st promise, 2

// foo();
// console.log("after async function");
// setTimeout(() => {
//     console.log("after async function 2");
// }, 4000) 


// MCQ 2

async function f() {
    let result = 'first!';
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('done!'), 1000);
    });

    result = await promise;
    console.log(result);
}

f();
console.log("this is 1st line");
console.log("this is second line");