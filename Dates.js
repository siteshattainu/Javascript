let date = new Date();
// console.log(date);

//toLocaleTimeString()

//01.01.1970 

let date1 = new Date(24 * 60 * 60 * 1000);
// console.log(date1);

let d = Date.now();
// console.log(d);


//parameters => year, month index, day, hour, minutes, seconds and milliseconds
let date2 = Date.UTC(2022, 1, 1, 1, 0, 0, 0);
// console.log(date2);

let date3 = new Date(2022, 1, 2, 1, 0, 0, 0)
// console.log(date3.getDate());

//[Sun, Mon, Tue, Wed, Thur, Fri, Sat]
//[Jan, Feb, Mar, ....]
let date4 = new Date(2022, 1, 1, 1, 0, 0, 0)
// console.log(date4.getDay());


// MCQ 1

const d3 = new Date('Thu, 01 Jan 1970 00:00:00 GMT')
// console.log(d3)

let date5 = new Date(2021, 1, 1, 1, 0, 0, 0)
// console.log(date5.getFullYear());

// const the_start = Date.UTC(1970, 0, 1, 0, 0, 0, 0);
// console.log(the_start);

//year, month index, day, hour, minutes, seconds and milliseconds
let date6 = new Date(2021, 1, 1, 23, 0, 0, 0)    // 0-23
// console.log(date6.getHours());

let date7 = new Date(2021, 1, 1, 23, 0, 0, 900) // 0-999
// console.log(date7.getMilliseconds());

let date8 = new Date(2021, 1, 1, 23, 10, 0, 900)    // 0-59
// console.log(date8.getMinutes());

let months = ["Jan", "Feb", "March"];
let date9 = new Date(2021, 1, 1, 23, 10, 0, 900)
// console.log(date9.getMonth());
// console.log(months[date9.getMonth()]);

let date10 = new Date(2021, 1, 1, 23, 10, 19, 900)  // 0-59
// console.log(date10.getSeconds());

// MCQ 2

let date11 = new Date(2020, 1)
console.log(date11.getFullYear())