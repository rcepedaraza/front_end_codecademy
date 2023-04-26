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
      var commonality = 0;
      for (let i = 0; i < pAequor.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          commonality++;
        }
      }
      commonality = (commonality / pAequor.dna.length) * 100;
      console.log(`Specimen #${this.specimenNum}:\n${this.dna}`);
      console.log(`\nSpecimen #${this.specimenNum}:\n${pAequor.dna}`);
      console.log(`\nSpecimen #${this.specimenNum} and Specimen #${pAequor.specimenNum} have ${commonality.toFixed(2)}% DNA in common.`)
    },
    willLikelySurvive () {
      var countBases = 0
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          countBases++;
        }
      }
      if ((countBases / this.dna.length) * 100 >= 60) {
        return true;
      } else {
        return false;
      }
    }
  
  }
}

obj = pAequorFactory(1, mockUpStrand());
// console.log(obj.dna);
// obj.mutate();
// console.log(obj.dna);

obj.compareDNA(pAequorFactory(2, mockUpStrand()));
// console.log(obj.willLikelySurvive());

var pAequorSurvive = [];
var specimenNum = 1;
while (pAequorSurvive.length < 30) {
  pAequorObj = pAequorFactory(specimenNum, mockUpStrand());
  if (pAequorObj.willLikelySurvive()) {
    pAequorSurvive.push(pAequorObj);
    specimenNum++;
  }
}
// console.log(pAequorSurvive.length);
console.log(pAequorSurvive);

