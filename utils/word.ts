export function areEqualsLowercase(a: string, b: string): boolean {
  return a.toLowerCase() === b.toLowerCase()
}

export function fillWithLetter(word: string, wordToFill: string, letter: string): string {
  for (let i = 0; i < word.length; i++) {
    if (areEqualsLowercase(word[i], letter)) {
      wordToFill = replaceChar(wordToFill, i, letter)
    }
  }
  return wordToFill
}

export function replaceChar(word: string, index: number, letter: string): string {
  return word.slice(0, index) + letter + word.slice(index + 1)
}
