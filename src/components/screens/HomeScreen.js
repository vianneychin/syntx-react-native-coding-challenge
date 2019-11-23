import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'

export const HomeScreen = ({ navigation, resource }) => {
  // useEffect(() => {
  //   fetch(
  //     'https://api.darksky.net/forecast/231063ebc5ecb280ea352c370e75450b/37.8267,-122.4233'
  //   )
  //     .then(res => res.json())
  //     .then(json => {
  //       console.log(json)
  //     })
  // }, [])

  const fetchWeather = async () => {
    const data = await fetch(
      'https://api.darksky.net/forecast/231063ebc5ecb280ea352c370e75450b/37.8267,-122.4233'
    )
    const response = await data.json()
    console.log(response)
  }
  useEffect(() => {
    // fetchWeather()
  })

  return (
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
}

HomeScreen.navigationOptions = {
  title: 'Home'
}
