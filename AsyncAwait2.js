async function foo(){
    return 1;
}

function foo1(){
    return Promise.resolve(1);
} 

function awaitFoo(){
    return Promise.resolve(1).then(data => console.log(data));
}

async function awaitFoo1(){
    return await 1;
}

// foo1().then(data => console.log(data))
// awaitFoo1().then(data => console.log(data));


// MCQ 3

const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
  myPromise().then(res => console.log(res));
  console.log('second');
}

async function secondFunction() {
  console.log(await myPromise());
  console.log('await second');
}

firstFunction();
secondFunction();
