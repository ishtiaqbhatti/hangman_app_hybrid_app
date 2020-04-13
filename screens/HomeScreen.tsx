import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { Platform, StyleSheet, Text, View, Linking } from 'react-native'
import BackgroundContainer from '../components/BackgroundContainer'
import Button from '../components/GameButton'
import LogoHome from '../components/LogoHome'

export default function HomeScreen({ navigation }) {
  const handlePressPlay = () => {
    navigation.navigate('Categories')
  }

  return (
    <View style={styles.container}>
      <BackgroundContainer>
        <Text></Text>
        <LogoHome />
        <View>
          <Button onPress={handlePressPlay} color='#fd9712' size='giant'>
            PLAY NOW!
          </Button>
          <View style={styles.menuOptions}>
            <Text onPress={() => Linking.openURL('https://dantecalderon.dev')} style={styles.info}>
              by Dante Calderon
            </Text>
            <Text style={styles.info}>This Game is Open Source</Text>
            <Text
              onPress={() => Linking.openURL('https://github.com/dantehemerson/hangman-app')}
              style={[styles.info, { color: 'skyblue' }]}
            >
              Check in Github
            </Text>
          </View>
        </View>
      </BackgroundContainer>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuOptions: {
    marginBottom: 40,
    paddingVertical: 20,
    justifyContent: 'center',
  },
  info: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 15,
    color: 'gray',
  },
})
