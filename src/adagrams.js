// only use const and let variables
// use semi-colons where needed
// name variables and functions with camelCase


// No parameters
export const drawLetters = () => {
  // This letter pool should reflect the distribution of letters as described in the table below
  const letterPool = {
      A: 9,
      B: 2,
      C: 2,
      D: 4,
      E: 12,
      F: 2,
      G: 3,
      H: 2,
      I: 9,
      J: 1,
      K: 1,
      L: 4,
      M: 2,
      N: 6,
      O: 8,
      P: 2,
      Q: 1,
      R: 6,
      S: 4,
      T: 6,
      U: 4,
      V: 2,
      W: 2,
      X: 1,
      Y: 2,
      Z: 1
  };

  const hand = [];

  for (let i = 0; i < 10; i++) {
      let availableLetters = Object.keys(letterPool).filter(letter => letterPool[letter] > 0);

      let randomIndex = Math.floor(Math.random() * availableLetters.length);

      let chosenLetter = availableLetters[randomIndex];

      hand.push(chosenLetter);
      letterPool[chosenLetter]--;
  }

  
  return hand;


};



export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
