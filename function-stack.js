// Stack

var Stack = function () {
    this.count = 0;
    this.storage = {};

    // Add a value to the end of the stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end of the stack
    this.pop = function (value) {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var results = this.storage[this.count];
        delete this.storage[this.count];
        return results;
    }

    this.size = function () {
        return this.count;
    }

    //Returns value at the end of the stack
    this.peek = function () {
        return this.storage[this.count - 1];
    }

}

var myStack = new Stack;

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());