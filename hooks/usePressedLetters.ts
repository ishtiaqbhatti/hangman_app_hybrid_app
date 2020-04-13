import { useState } from 'react'

export function usePressedLetters() {
  const [pressed, setPressed] = useState({
    correct: [],
    incorrect: [],
  })

  const addCorrectLetter = (letter: string) => {
    setPressed(prev => ({
      ...prev,
      correct: prev.correct.concat(letter.toLowerCase()),
    }))
  }

  const addIncorrectLetter = (letter: string) => {
    setPressed(prev => ({
      ...prev,
      incorrect: prev.incorrect.concat(letter.toLowerCase()),
    }))
  }

  const restartLetters = () => {
    setPressed({
      correct: [],
      incorrect: [],
    })
  }

  return {
    correct: new Set(pressed.correct),
    incorrect: new Set(pressed.incorrect),
    addCorrectLetter,
    addIncorrectLetter,
    restartLetters,
  }
}
