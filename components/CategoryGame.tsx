import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '@ui-kitten/components'
import { Word } from '../interfaces/Word'
import color from 'color'

interface CategoryGameProps {
  word: Word
}

const CategoryGame: React.FC<CategoryGameProps> = ({ word }) => (
  <View
    style={[
      styles.container,
      {
        backgroundColor: word.category.color,
        borderColor: color(word.category.color).darken(0.2) as any,
      },
    ]}
  >
    <Text style={styles.categoryName}>{word.category.name.toUpperCase()}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 40,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    alignSelf: 'flex-end',
    backgroundColor: '#4caf50',
    borderWidth: 2,
  },
  categoryName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default CategoryGame
