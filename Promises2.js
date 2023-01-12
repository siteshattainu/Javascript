function foo() {
    return new Promise(resolve => {
        resolve("this is data");
    })
}

foo().then((data) => {
    data = "changed the data";
    console.log(data);
})

foo().then((data) => {
    console.log(data);
})

//MCQ 2

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
    return job(true);
})
.then(function(data) {
    if (data !== 'victory') {
        throw 'Defeat';
    }
    return job(true);
})
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log(error); //Defeat
    return job(false);
})
.then(function(data) {
    console.log(data);
    return job(true);
})
.catch(function(error) {
    console.log(error); // reject
    return 'Error caught';
})
.then(function(data) {
    console.log(data);  //Error caught
    return new Error('test');
})
.then(function(data) {
    console.log('Success:', data.message);  // Success: test
})
.catch(function(data) {
    console.log('Error:', data.message);    
});


function addInCart() {
    //add items in cart
} 

function buy(){
    //enter all required details
}

function payment(){
    //do payment for the items
}

addInCart().then((data) => {
    //data
    return buy(data)
}).then(() => {
    if(balance < requiredBalance){
        throw "Not enough balance"
    }
    return payment()
}).then(() => {
    //data is loaded 
    //isloading = false
    console.log("Order placed");
}).catch((error) => {
    console.log("Order was not successful");
})
