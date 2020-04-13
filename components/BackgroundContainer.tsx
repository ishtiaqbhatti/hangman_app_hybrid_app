import React from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'

const BackgroundContainer = ({ children }) => (
  <ImageBackground
    source={require('../assets/images/background_1.png')}
    imageStyle={{ resizeMode: 'repeat' }}
    style={{
      width: '100%',
      height: '100%',
      paddingTop: 30,
    }}
  >
    <View style={styles.childrenContainer}>{children}</View>
  </ImageBackground>
)

const styles = StyleSheet.create({
  childrenContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
})

export default BackgroundContainer
