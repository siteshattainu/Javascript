function foo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("fullfilled");
        }, 2000);
    })
}

const promise_variable = new Promise(resolve => {
    setTimeout(() => {
        resolve("fullfilled");
    }, 2000);
}).then((data) => {
    console.log(data);
})


promise_variable.then((data) => {
    console.log(data);
})

// foo();


// MCQ 1

function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}


let promise = job(true);

promise
.then(function(data) {
    console.log(data);  //success
    return job(false);
})
.catch(function(error) {
    console.log(error); //error
    return 'Error caught';
})
.then(function(data) {
    console.log(data);  //Error caught
    return job(true);
})

 
// .catch(function(error) {

//     console.log(error);

// });