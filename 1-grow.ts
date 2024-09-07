/**
 * [54, 23, 199]
 */

// function totalValue(data: any) {
//     let result = data[0];
//     for(let i = 1; i < data.length; i++) {
//         console.log(data[i]);
//         result *= data[i];
//     }
//     return result;
// }

const totalValue = (data: number[]): number => data.reduce((acc, curr) => acc * curr, 1)
console.log(totalValue([54, 23, 199]));