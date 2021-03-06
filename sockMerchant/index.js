// Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. For example, there are 'n' = 7 socks with colors 'socksArray' = [1, 2, 1, 2, 1, 3, 2]. There is one pair of color 1 socks and one of color 2 socks. There are three odd socks left, one of each color. The number of pairs is 2.

// sockMerchant() has the following parameter(s):
// 'n' - the number of socks in the pile
// 'socksArray' the colors of each sock


// * Input Format *
// The first line contains an integer 'n', the number of socks represented in 'socksArray'. 

// * Output Format *
// Return the total number of matching pairs of socks that Alex can sell.

// Example :
// Input - sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
// Output - 3

// * CODE *

function sockMerchant(n, socksArray) {
    const socksHashMap = {};
    let pairs = 0;

    if (!socksArray || socksArray.length !== n) return 0;

    socksArray.forEach((sockColor) => {
        if (!socksHashMap[sockColor]) {
            socksHashMap[sockColor] = 1;
            return;
        }
        pairs++;
        delete socksHashMap[sockColor];
    });
    return pairs;
}