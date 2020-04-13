import { Text } from '@ui-kitten/components'
import color from 'color'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Category } from '../interfaces/Category'

type CategoryListItemProps = {
  category: Category
  onPress: () => void
}

const CategoryListItem = ({ category, onPress }: CategoryListItemProps) => {
  return (
    <TouchableOpacity
      style={
        [
          styles.button,
          {
            backgroundColor: category.color,
            borderColor: color(category.color).darken(0.2),
          },
        ] as any
      }
      onPress={onPress}
    >
      <Text style={styles.text}>{category.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 12,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
})

export default CategoryListItem
