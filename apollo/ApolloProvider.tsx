import React from 'react'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import { ApolloProvider as ApolloProviderReact } from '@apollo/react-hooks'
import { persistCache } from 'apollo-cache-persist'
import { AsyncStorage } from 'react-native'

const cache = new InMemoryCache()

persistCache({
  cache,
  storage: AsyncStorage,
  trigger: 'background',
})

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://192.168.1.12:8087/graphql',
  }),
  cache,
})

const ApolloProvider = ({ children }) => {
  return <ApolloProviderReact client={client}>{children}</ApolloProviderReact>
}

export default ApolloProvider
