import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

export const HomeScreen = () => {
  return (
    <View>
      <Text>Hello world.</Text>
    </View>
  )
}

const App = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
})

export default createAppContainer(App)
