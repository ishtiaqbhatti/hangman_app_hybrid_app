import { Text } from '@ui-kitten/components'
import color from 'color'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

enum LetterColors {
  NORMAL = '#f5fdff',
  CORRECT = '#a3f8a6',
  INCORRECT = '#ff9393',
}

type LetterProps = {
  disabled?: boolean
  isCorrect?: boolean
  children: string
  [key: string]: any
}

const Letter = ({ children, disabled = false, isCorrect = false, ...props }: LetterProps) => (
  <TouchableOpacity
    {...props}
    disabled={disabled}
    style={[
      styles.button,
      disabled && isCorrect && styles.correctButton,
      disabled && !isCorrect && styles.incorrectButton,
    ]}
  >
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create<any>({
  button: {
    backgroundColor: LetterColors.NORMAL,
    minHeight: 42,
    height: 42,
    minWidth: 36,
    width: 36,
    marginHorizontal: 2,
    marginVertical: 4,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#5c5c5c52',
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 6,
  },
  correctButton: {
    backgroundColor: LetterColors.CORRECT,
    borderColor: color(LetterColors.CORRECT).darken(0.2),
  },
  incorrectButton: {
    backgroundColor: LetterColors.INCORRECT,
    borderColor: color(LetterColors.INCORRECT).darken(0.2),
  },
  text: {
    fontSize: 22,
    color: '#6b7073',
    lineHeight: 26,
    fontWeight: 'bold',
    marginHorizontal: 0,
  },
})

export default Letter
