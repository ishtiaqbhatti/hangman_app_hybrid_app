import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

type BackButtonProps = {
  onPress: () => void
}

const BackButton = ({ onPress }: BackButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons name='ios-arrow-back' size={28} color='#523a32' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    borderWidth: 2,
    width: 42,
    height: 42,
    paddingRight: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    borderColor: '#523a32',
  },
})

export default BackButton
