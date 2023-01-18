class Stack {
    constructor(){
        this.stack_ = [];
    }
    pop(){
        //if empty => return error
        if(this.stack_.length == 0){
            console.log("Stack is empty, try pushing elements");
        }
        return this.stack_.pop()
    }
    push(value) {
        this.stack_.push(value);
    }
    peek() {
        // check empty stack case
        if(this.stack_.length == 0){
            console.log("Stack is empty, try pushing elements");
        }
        return this.stack_[this.stack_.length - 1];
    }

    // return the length of the stack
    get count() {
        return this.stack_.length;
    }
}