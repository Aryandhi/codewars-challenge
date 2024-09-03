/**
 * https://www.codewars.com/kata/53dc23c68a0c93699800041d
 * 
 * ["hello", "amazing", "world"]
 */

// function smash(words) {
//     let resultSentence = [];
//     for(let i = 0; i < words.length; i++) {
//         resultSentence += words[i];
//         if(i != words.length-1) {
//             resultSentence += " ";
//         }
//     }
//     return resultSentence;
// }

function smash (words) {
    return words.join(" ")
};

console.log(smash(["hello", "amazing", "world"]));