/**
 * DNA -> GCAT
 * RNA -> GCAU
 * Replace 'T' to 'U'
 */

// solusi 1
function DNAtoRNA(dna) {
    let rna = "";
    for(let i = 0; i < dna.length; i++) {
        if(dna[i] === 'T') {
            rna += 'U'
        } else {
            rna += dna[i];
        }
    }
    return rna;
}

// solusi 2
// const DNAtoRNA = (text) => text.replaceAll('T', 'U');

console.log(DNAtoRNA('GCAT'));