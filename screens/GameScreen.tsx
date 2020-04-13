import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import BackgroundContainer from '../components/BackgroundContainer'
import Keyboard from '../components/Keyboard'
import Man from '../components/Man'
import { useWordManager } from '../hooks/useWordManager'
import { Text } from '@ui-kitten/components'
import Filler from '../components/Filler'
import { fillWithLetter, areEqualsLowercase } from '../utils/word'
import { usePressedLetters } from '../hooks/usePressedLetters'
import ResultGame from '../components/ResultGame'
import { useNavigation, useRoute } from '@react-navigation/native'
import CategoryGame from '../components/CategoryGame'
import LegoLoader from '../components/LegoLoader'
import BackButton from '../components/BackButton'

const NUMBER_OF_LIVES = 7

const GameScreen = () => {
  const [wordToFill, setWordToFill] = useState<string>('')
  const navigation = useNavigation()
  const route = useRoute()

  const { categoryId } = route.params as any

  const [resultVisible, setResultVisible] = useState(false)
  const [lives, setLives] = useState(NUMBER_OF_LIVES)
  console.log('Dante: lives', lives)
  const {
    correct,
    incorrect,
    addCorrectLetter,
    addIncorrectLetter,
    restartLetters,
  } = usePressedLetters()

  const { word, nextWord, loading } = useWordManager({ categoryId })
  console.log('Dante: GameScreen -> word', word)

  const handlePressKey = (letter: string) => {
    if (!resultVisible) {
      const existsLetter = word.name.split('').some(c => areEqualsLowercase(c, letter))
      if (existsLetter) {
        addCorrectLetter(letter)
        setWordToFill(w => fillWithLetter(word.name, w, letter))
      } else {
        setLives(prev => prev - 1)
        addIncorrectLetter(letter)
        // Restar vidas
      }
    }
  }

  const handleClickNext = () => {
    setResultVisible(false)
    nextWord()
    console.log('Dante aca ejecutar la siguiente')
  }

  const goToHome = () => {
    setResultVisible(false)
    navigation.replace('Root', {})
  }

  useEffect(() => {
    if (word && areEqualsLowercase(word.name, wordToFill)) {
      setResultVisible(true)
    } else if (lives === 0) {
      setResultVisible(true)
    }
  }, [wordToFill, lives])

  useEffect(() => {
    if (word) {
      restartLetters()
      setLives(NUMBER_OF_LIVES)
      setWordToFill(word.name.replace(/[^\s]/gi, '_'))
    }
  }, [word])

  return (
    <View style={styles.container}>
      <ResultGame
        win={word && areEqualsLowercase(word.name, wordToFill)}
        visible={resultVisible}
        onClickBack={goToHome}
        onClickNext={handleClickNext}
      />
      <BackgroundContainer>
        <BackButton onPress={() => navigation.goBack()} />
        {loading || !word ? (
          <LegoLoader />
        ) : (
          <React.Fragment>
            <CategoryGame word={word} />
            <Man lives={lives} />
            <Filler wordToFill={wordToFill} />
            <Keyboard
              onPressKey={handlePressKey}
              correctLetters={correct}
              incorrectLetters={incorrect}
            />
          </React.Fragment>
        )}
      </BackgroundContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default GameScreen
