import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { HomeScreen } from '../components/screens/HomeScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
})

export default createAppContainer(AppNavigator)
