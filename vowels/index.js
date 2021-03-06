// Problem Domain :

// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.


// Visual :

//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// Iterative Solution :

function vowels(str) {
    let counter = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];
    

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            counter++
        }
    }

    return counter;
}

export default vowels;


// Regex Solution :

// function vowels(str) {
//     const matches = str.toLowerCase().match(/[aeiou]/gi);
//     return matches ? matches.length : 0
// }

// export default vowels;