import React, { useEffect } from 'react'
import { View, Text, Button, Image } from 'react-native'
import { data } from '../../data'
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

  const fetchWeather = async (lat, lng) => {
    const data = await fetch(
      `https://api.darksky.net/forecast/231063ebc5ecb280ea352c370e75450b/${lat}, ${lng}`
    )
    const response = await data.json()
    console.log(response)
  }
  useEffect(() => {
    // fetchWeather(data.chicago.lat, data.chicago.lng)
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
      <Image
        style={{ height: 20, width: 20 }}
        source={require('../../assets/icons/clear-day.png')}
      />
    </View>
  )
}

HomeScreen.navigationOptions = {
  title: 'Home'
}
