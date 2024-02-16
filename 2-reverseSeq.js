/**
 * Build a function that returns an array of integers from n to 1 where n>0.
 * Example : n=5 --> [5,4,3,2,1]
 */

/** Pseudo
 * 1. declare array empty
 * 2. loop i = n to 1
 * 3. push i to array 
 */

// trick 1
const reverseSeq = n => {
    const result = [];
    for (let i = n; i >= 1; i--) {
        result.push(i);
    }
    return result;
}
// console.log(reverseSeq(5));

// trick 2
const arrKebalik = n => {
    return Array(n).fill().map((element, i) => i + 1).reverse();
    return Array(n).fill().map((element, i) => n - i);
    return [...Array(n)].map((element, i) => n - i);
}
// console.log(arrKebalik(5));

