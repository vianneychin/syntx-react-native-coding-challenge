import React from 'react'
import { View, Text, Button } from 'react-native'

export const HomeScreen = ({ navigation }) => (
  <View>
    <Button
      title='Add a city'
      onPress={() => navigation.navigate('AddCityScreen')}
    />
    <Button
      title='Test Profile Page'
      onPress={() =>
        navigation.navigate('CityForecast', {
          test: 'Cool weather data here'
        })
      }
    />
  </View>
)
