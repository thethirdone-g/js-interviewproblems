// Problem Domain :

// Given a string, return the character that is most commonly used in the string.

// ** Common Questions **

// What is the most common character in the string?
// Does string A have the same characters as string B? (Is it an anagram?)
// Does the given string have any repeated characters in it?


// Visual :

// maxChar("abcccccccd") = "c"
// maxChar("apple 1231111") = "1"


// Algorithm 1 :

// Create a function which accepts a string.
// Create an empty character map.
// Create a variable to hold the maximum number of times a character is repeated.
// Create a variable to hold the letter that's associated with that max number.
// From that passed in string, build a character map representing the string and the amount of characters.
// If a character isn't yet present in the map, start it off at 1 but if that character is present add one to its existing amount.
// Iterate through the character map created from the passed in string and update the max number and its associated character.
// After the iteration is complete, return the character with the max number.


// Solution 1 :

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    
    return maxChar;
}

module.exports = maxChar;