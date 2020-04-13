import { Text } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'

type FillerProps = {
  wordToFill: string
}

const Filler = ({ wordToFill }: FillerProps) => (
  <View>
    <Text style={styles.text}>{wordToFill}</Text>
  </View>
)

const styles = StyleSheet.create({
  text: {
    color: '#545454',
    textTransform: 'uppercase',
    fontSize: 22,
    letterSpacing: 4,
    fontWeight: 'bold',
    lineHeight: 28,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
})

export default Filler
