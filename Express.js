const express = require('express')
const app = express()

//http methods
// DELETE, POST, PUT, GET

app.use(express.json())

const courses = [
    {id: 1, name: "DSA"},
    {id: 2, name: "Full Stack"},
    {id: 3, name: "Backend"}
]

//GET

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/courses', (req, res) => {
    res.send([{id: 1, name: "DSA"}, {id: 2, name: "FullStack"}])
})

app.get('/courses/:uniqID/:name', (req, res) => {
    let id = req.params.uniqID;
    let name = req.params.name;
    let course = courses.find((course) => {
        if(course.id == id){
            return true;
        }
        else{
            return false;
        }
    })
    // validation
    if(!course){
        res.status(404);
        res.send("Not Found");
        return;
    }
    res.send(course);
})

//POST
app.post('/insert', (req, res) => {
    let newCourse = {
        id: req.body.id,
        name:  req.body.name
    }
    courses.push(newCourse);
    res.send(courses);
})

//PUT
app.put('/update/:id', (req, res) => {
    let id = req.params.id;
    let course = courses.find((course) => {     //{id: 2, name: "Full Stack"},
        if(course.id == id){
            return true;
        }
        else{
            return false;
        }
    })

    //validation
    if(!course){
        res.status(404);
        res.send("Course not found");
        return;
    }

    let newName = req.body.name
    let index = courses.findIndex((course) => {
        if(course.id == id){
            return true;
        }
        else{
            return false;
        }
    })
    courses[index].name = newName;
    res.send(courses);
})


app.listen(5000, () => {
    console.log("Server is live on port 5000");
})


//www.facebook.com
// home, profile, settings, signup, login
//localhost:5000

// 200- Success
// 400- There was something wrong from our side
// 500- There was something wrong from server side