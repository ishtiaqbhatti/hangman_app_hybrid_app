import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'
import { Text } from '@ui-kitten/components'

const LegoLoader = () => {
  if (Platform.OS === 'ios' || Platform.OS === 'android')
    return (
      <AnimatedLoader
        visible={true}
        overlayColor='rgba(255,255,255,0.00)'
        source={require('../assets/lottie-animations/cubes_loader.json')}
        animationStyle={styles.loader}
        speed={1}
      />
    )
  return <Text>Loading...</Text>
}
const styles = StyleSheet.create({
  loader: {
    width: 200,
    height: 200,
  },
})

export default LegoLoader
