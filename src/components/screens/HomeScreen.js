import React, { useEffect } from 'react'
import { View, Text, Button, Image, SafeAreaView } from 'react-native'
import { data } from '../../data'
import { HomeContainer, CityBox, Column, Row } from '../../styles'

export const HomeScreen = ({ navigation, resource }) => {
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
    <SafeAreaView style={{ flex: 1 }}>
      <HomeContainer>
        <CityBox>
          <Column flex={() => '0.5'} bg='orange'>
            <Row bg='green'></Row>
            <Row bg='yellow'></Row>
          </Column>
          <Column flex={() => '1'} bg='blue'></Column>
        </CityBox>
      </HomeContainer>
      <Button
        title='Add a city'
        onPress={() => navigation.navigate('AddCityScreen')}
      />
    </SafeAreaView>
  )
}

HomeScreen.navigationOptions = {
  title: 'Home'
}
