// Problem Domain : 

// Given a string, return true if the string is a palindrome or false if it is not. Palindromes are strings that form the same word if they are reversed - Do include spaces and punctuation when determining if the string is a palindrome.

// Visuals :

// palindrome("abba") === true
// palindrome("abcdefg") === false

// Algorithm :





// Code :

function palindrome(str) {
    const reversed = str.split('').reverse().join('');

    return str === reversed;
}