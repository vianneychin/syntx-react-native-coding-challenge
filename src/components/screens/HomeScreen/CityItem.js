import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import {
  CityBox,
  Column,
  Row,
  Temperature,
  Location,
  Icon
} from '../../../styles'
import { icons } from './icons'

export const CityItem = ({ lat, lng }) => {
  const [data, setData] = useState([])

  const fetchWeather = async () => {
    const data = await fetch(
      `https://api.darksky.net/forecast/231063ebc5ecb280ea352c370e75450b/${lat}, ${lng}`
    )
    const response = await data.json()
    setData(response)
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  const renderIcon = () => {
    if (data.currently) {
      const icon = icons[data.currently.icon]
      return <Icon width='50px' source={icon} />
    } else {
      return <Text>Loading...</Text>
    }
  }

  return (
    <CityBox>
      <Column flex={() => '0.5'}>
        <Row>{renderIcon()}</Row>
        <Row>
          <Temperature>
            {data.currently ? data.currently.apparentTemperature : 'Loading...'}
            °
          </Temperature>
        </Row>
      </Column>
      <Column flex={() => '1'}>
        <Location>{data ? data.timezone : 'Loading...'}</Location>
      </Column>
    </CityBox>
  )
}
