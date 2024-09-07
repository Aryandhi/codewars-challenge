/**
 * n = 9
 * [9, 8, 7, 6, 5, 4, 3, 2, 1]
 */

function hitung(data: number): number[] {
    let resArr: number[] = [];
    for (let i = data; i >= 1; i--) {
        resArr.push(i);
    }
    return resArr;
}

console.log(hitung(9)); // Output: [9, 8, 7, 6, 5, 4, 3, 2, 1]
