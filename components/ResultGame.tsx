import { Button, Layout, Modal, Text } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const ResultGame = ({
  visible = true,
  win = true,
  onClose = () => {},
  onClickNext = () => {},
  onClickBack = () => {},
}) => {
  return (
    <>
      <Modal backdropStyle={styles.backdrop} onBackdropPress={onClose} visible={visible}>
        <Layout level='3' style={styles.modalContainer}>
          <Text style={styles.resultText}>{win ? 'You Win' : 'You Loose'}</Text>
          <View style={styles.actionsContainer}>
            <View style={styles.buttonContainer}>
              <Button onPress={onClickBack} status='danger' appearance='outline'>
                Back To Menu
              </Button>
            </View>
            {win && (
              <View style={styles.buttonContainer}>
                <Button onPress={onClickNext}>Next Word</Button>
              </View>
            )}
          </View>
        </Layout>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 6,
    alignSelf: 'stretch',
    flexDirection: 'column',
    width: 300,
    padding: 16,
  },
  animationContainer: {
    width: 100,
    height: 100,
  },
  animation: {
    width: 100,
    height: 100,
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  resultText: {
    fontSize: 30,
    lineHeight: 40,
    color: '#44312a',
    marginVertical: 30,
    fontWeight: 'bold',
  },
  buttonContainer: {
    margin: 8,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
})

export default ResultGame
