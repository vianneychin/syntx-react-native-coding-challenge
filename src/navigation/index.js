import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { HomeScreen } from '../components/screens/HomeScreen'
import { AddCityScreen } from '../components/screens/AddCityScreen'
import { CityForecastScreen } from '../components/screens/CityForecastScreen'

const AppNavigator = createStackNavigator(
  {
    HomeScreen,
    AddCityScreen,
    CityForecastScreen
  },
  {
    initialRouteName: 'HomeScreen'
  }
)

export default createAppContainer(AppNavigator)
