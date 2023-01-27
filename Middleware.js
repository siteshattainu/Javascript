function my_middlware(req, res, next){
    console.log("This is a middleware");
    //to continue the flow of middleware
    next();
}

module.exports = my_middlware;