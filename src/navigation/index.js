import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { HomeScreen } from '../components/screens/HomeScreen'
import { AddCityScreen } from '../components/screens/AddCityScreen'
import { CityForecast } from '../components/screens/CityForecast'

const AppNavigator = createStackNavigator(
  {
    HomeScreen,
    AddCityScreen,
    CityForecast
  },
  {
    initialRouteName: 'HomeScreen'
  }
)

export default createAppContainer(AppNavigator)
