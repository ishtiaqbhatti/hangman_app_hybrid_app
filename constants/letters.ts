const LETTERS = {
  en: [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U', 'V'],
    ['W', 'X', 'Y', 'Z'],
  ],
  es: [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    ['I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O'],
    ['P', 'Q', 'R', 'S', 'T', 'U', 'V'],
    ['W', 'X', 'Y', 'Z'],
  ],
}

export const getLettersByLanguage = (language = 'en') => {
  if (!(language in LETTERS)) {
    throw new Error(
      `Language letters doesn't exists. Try one of these: ${Object.keys(LETTERS).join(', ')}`
    )
  }
  return LETTERS[language]
}
