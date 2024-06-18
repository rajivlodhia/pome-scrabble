var points = {
  1: "AEIOULNSTR",
  2: "DG",
  3: "BCMP",
  4: "FHVWY",
  5: "K",
  8: "JX",
  10: "QZ",
};

export function getWordScore(word) {
  // - use the point definitions above to write a method that computes and returns the word score
  // - eg. 'juicy' = 17

  let score = 0;

  for (let i = 0; i < word.length; i++) {
    for (let key in points) {
      if (points[key].includes(word[i].toUpperCase())) {
        score += parseInt(key);
      }
    }
  }

  return score;
}

export function getLetterScore(letter) {
  for (let key in points) {
    if (points[key].includes(letter.toUpperCase())) {
      return parseInt(key);
    }
  }
}
