import React from 'react'
import { Image } from 'react-native'
import { CityBox, Column, Row, Temperature, Location } from '../../../styles'

export const CityItem = () => {
  return (
    <CityBox>
      <Column flex={() => '0.5'} bg='orange'>
        <Row bg='green'>
          <Image source={require('../../../assets/icons/rain.png')} />
        </Row>
        <Row bg='yellow'>
          <Temperature>89°</Temperature>
        </Row>
      </Column>
      <Column flex={() => '1'} bg='blue'>
        <Location>Los Angeles,</Location>
        <Location>California</Location>
      </Column>
    </CityBox>
  )
}
