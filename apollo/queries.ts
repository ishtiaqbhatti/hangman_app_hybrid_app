import gql from 'graphql-tag'

export const GET_RANDOM_WORDS = gql`
  query randomWords($categoryId: ID, $limit: Int) {
    randomWords(categoryId: $categoryId, limit: $limit) {
      _id
      name
      category {
        _id
        name
        color
        description
        __typename
      }
      __typename
    }
  }
`

export const GET_CATEGORIES = gql`
  query categories {
    categories {
      _id
      name
      color
      description
      __typename
    }
  }
`
