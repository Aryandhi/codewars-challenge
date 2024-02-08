/** Beginner - Reduce but Grow
 * https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript
 * Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
 * [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 */

/** Pseudo
 * 1. create function(param)
 * 2. declare result (as temporary variable)
 * 3. loop array and multiplying with value of result
 * 4. return result
 */

// trick 1
function grow(x) {
    let result = x[0];
    for(let i = 1; i < x.length; i++) {
        result = result * x[i];
    }
    return result;
}
// console.log(grow([1, 2, 3, 4]))

// trick 2
function multipleArray(x) {
    let res = x[0];
    for(let i = 1; i < x.length; i++) {
        res *= x[i];
    }
    return res;
}
// console.log(multipleArray([4, 5, 6]));

// trick 3 - function declaration
function multipleArray(num) {
    const result = num.reduce((acc, curr) => acc * curr, 1);
    return result;
}
// console.log(multipleArray([4, 3, 5]));

// trick 4 - function expression
const arrMultiplying = (param) => param.reduce((acc, curr) => acc * curr, 1);
console.log(arrMultiplying([4, 5, 6]));





