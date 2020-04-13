import React from 'react'
import { View, StyleSheet } from 'react-native'
import Letter from './Letter'
import { useLanguageLetters } from '../hooks/useLanguageLetters'
import { noop } from '../utils/miscellaneous'

type KeyboardProps = {
  onPressKey: (key: string) => void
  correctLetters: Set<string>
  incorrectLetters: Set<string>
}

const Keyboard = React.memo(
  ({ onPressKey = noop, correctLetters, incorrectLetters }: KeyboardProps) => {
    const letterColumns = useLanguageLetters()

    const handleClickKey = key => () => onPressKey(key)

    return (
      <View>
        {letterColumns.map((letters, index) => {
          return (
            <View key={index} style={styles.letterColumn}>
              {letters.map((letter: string) => {
                const isDisabled =
                  correctLetters.has(letter.toLowerCase()) ||
                  incorrectLetters.has(letter.toLowerCase())
                return (
                  <Letter
                    key={letter}
                    disabled={isDisabled}
                    isCorrect={correctLetters.has(letter.toLowerCase())}
                    onPress={handleClickKey(letter)}
                  >
                    {letter}
                  </Letter>
                )
              })}
            </View>
          )
        })}
      </View>
    )
  }
)

const styles = StyleSheet.create({
  letterColumn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

export default Keyboard
