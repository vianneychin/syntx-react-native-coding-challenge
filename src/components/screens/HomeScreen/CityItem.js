import React, { useEffect, useState } from 'react'
import { Image, Text } from 'react-native'
import { CityBox, Column, Row, Temperature, Location } from '../../../styles'

export const icons = {
  'clear-day': require('../../../assets/icons/clear-day.png'),
  'clear-night': require('../../../assets/icons/clear-night.png'),
  cloudy: require('../../../assets/icons/cloudy.png'),
  fog: require('../../../assets/icons/fog.png'),
  'partly-cloudy-day': require('../../../assets/icons/partly-cloudy-day.png'),
  'partly-cloudy-night': require('../../../assets/icons/partly-cloudy-night.png'),
  rain: "require('../../../assets/icons/rain.png')",
  snow: require('../../../assets/icons/snow.png'),
  wind: require('../../../assets/icons/wind.png')
}

export const CityItem = ({ temperature, city, lat, lng }) => {
  const [data, setData] = useState([])

  const fetchWeather = async () => {
    const data = await fetch(
      `https://api.darksky.net/forecast/231063ebc5ecb280ea352c370e75450b/${lat}, ${lng}`
    )
    const response = await data.json()
    console.log(response)
    setData(response)
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  const renderIcon = () => {
    if (data.currently) {
      const icon = icons[data.currently.icon]
      return <Image source={icon} />
    } else {
      return <Text>Loading...</Text>
    }
  }

  return (
    <CityBox>
      <Column flex={() => '0.5'} bg='orange'>
        <Row bg='green'>{renderIcon()}</Row>
        <Row bg='yellow'>
          <Temperature>
            {data.currently ? data.currently.apparentTemperature : 'Loading...'}
            °
          </Temperature>
        </Row>
      </Column>
      <Column flex={() => '1'} bg='blue'>
        <Location>{data ? data.timezone : 'Loading...'}</Location>
      </Column>
    </CityBox>
  )
}
