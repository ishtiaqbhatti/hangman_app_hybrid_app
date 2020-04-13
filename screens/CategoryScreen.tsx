import { useNavigation } from '@react-navigation/native'
import get from 'lodash.get'
import React from 'react'
import { useQuery } from 'react-apollo'
import { ScrollView, StyleSheet, View } from 'react-native'
import { GET_CATEGORIES } from '../apollo/queries'
import BackButton from '../components/BackButton'
import BackgroundContainer from '../components/BackgroundContainer'
import CategoryListItem from '../components/CategoryListItem'
import LegoLoader from '../components/LegoLoader'
import { Category } from '../interfaces/Category'

const CategoryScreen = () => {
  const { data, loading } = useQuery(GET_CATEGORIES)
  const navigation = useNavigation()

  const categories: Category[] = [
    {
      _id: undefined,
      name: 'Todas',
      color: '#e91e63',
    },
  ].concat(get(data, 'categories', []))

  const handlePressCategory = categoryId => () => {
    navigation.replace('Game', { categoryId })
  }

  return (
    <BackgroundContainer>
      <BackButton onPress={() => navigation.goBack()} />
      {loading ? (
        <LegoLoader />
      ) : (
        <ScrollView style={styles.container}>
          {categories.map((category, index) => (
            <View key={index} style={styles.buttonContainer}>
              <CategoryListItem category={category} onPress={handlePressCategory(category._id)} />
            </View>
          ))}
        </ScrollView>
      )}
    </BackgroundContainer>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
})

export default CategoryScreen
