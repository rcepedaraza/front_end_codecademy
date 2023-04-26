// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, dnaArray) => {
  return {
    specimenNum : num,
    dna : dnaArray,

    mutate () {
      const randBaseIndex = Math.floor(Math.random() * this.dna.length);
      // console.log(`Random base: ${randBaseIndex}: ${this.dna[randBaseIndex]}`);
      do {
        newBase = returnRandBase();
      } while (this.dna[randBaseIndex] === newBase);
      this.dna[randBaseIndex] = newBase;
      // console.log(`New base: ${randBaseIndex}: ${this.dna[randBaseIndex]}`);    
      return this.dna;
    },
    compareDNA (pAequor) {
      
    }
  
  }
}

obj = pAequorFactory(1, mockUpStrand());
console.log(obj.dna);
obj.mutate();
console.log(obj.dna);
