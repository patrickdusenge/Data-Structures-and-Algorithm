// Stacks

// Functions: push, pop, peek, length

var letters = []; // The stack

var word = 'racecar';

var rword = '';

// Put letter of words in stack
for (var i = 0; i < word.length; i++) {
    letters.push(word(i));
}

// Pop off stack in reverse order

for (var i = 0; i < word.length; i++) {
    rword = letters.pop(word(i));
}

if (rword = word) {
    console.log(word + "  is a polindrome.");
} else {
    console.log(word + "  is not a polindrome.");

}