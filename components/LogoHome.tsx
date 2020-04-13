import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, Easing, Platform } from 'react-native'
import Letter from './Letter'
import { Animated } from 'react-native'

const LogoHome = () => {
  const [rotation] = useState(new Animated.Value(-1))
  const [translationY] = useState(new Animated.Value(0))
  const width = 100
  const height = 195

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotation, {
          toValue: 1,
          duration: 2000,
          // easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(rotation, {
          toValue: -1,
          // easing: Easing.inOut(Easing.ease),
          duration: 2000,
        }),
      ])
    ).start()
  }, [])

  // const angle = JSON.parse(JSON.stringify())
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [
            {
              translateX: rotation.interpolate({
                inputRange: [-1, 1],
                outputRange: [width / 2 - 5, -width / 2 + 5],
              }),
            },
            {
              translateY: rotation.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [-4, 0, -4],
              }),
            },
            {
              rotate: rotation.interpolate({
                inputRange: [-1, 1],
                outputRange: ['-26deg', '26deg'],
              }),
            },
          ],
        }}
      >
        <Image style={styles.logo} source={require('../assets/images/logo_1.png')} />
      </Animated.View>
      <View style={styles.wordsContainer}>
        <Letter>H</Letter>
        <Letter>A</Letter>
        <Letter>N</Letter>
        <Letter>G</Letter>
        <Letter>M</Letter>
        <Letter>A</Letter>
        <Letter>N</Letter>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordsContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 195,
  },
  text: {
    fontWeight: 'bold',
    color: '#795548',
    fontSize: 50,
  },
})

export default LogoHome
