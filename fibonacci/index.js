// Problem Domain :

// Print out the n-th entry in the fibonacci series. The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two. For example, the sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series.


// Example :

// fib(4) === 3


// Algorithm :

// - Write a program which accepts a number (this will be the index we stop on)
// - Create a collection which holds the first two entries of the fibonacci sequence
// - Iterate through the collection beginning at the third entry and stop at the passed in number (index)
// - Create variables to keep track of the indexes needed to add and make sure they correspond to the next two indexes with each iteration
// - Push the sum of the two variables into the collection
// - Return the index of the sequence which was passed into the function

// O(n) Linear Solution :

function fib(n) {
    const sequence = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = sequence[i - 1] // index 1
        const b = sequence[i - 2] // index 0

        sequence.push(a + b);
    }

    return sequence[n]; // or return sequence[sequence.length - 1] which is the last index

}


// O(2^n) Exponential Recursive Solution :

function slowFib(n) {
    if (n < 2) {
        return n; // Obviously the 0 index and first index will be 0 and 1
    }

    return fib(n - 1) + fib(n - 2); // These are each function calls so follow the chain of operations and add the remainders
}


// Memoize Solution :

function memoize(fn) {
    const cache = {};
    function(...args) { // ES6 making sure that any and every argument is considered
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

module.exports = fib;