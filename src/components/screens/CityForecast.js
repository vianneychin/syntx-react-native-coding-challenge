import React from 'react'
import { View, Text } from 'react-native'
import {
  CityForecastContainer,
  DayContainer,
  ForecastColumn,
  ForecastRow,
  Temperature,
  Day,
  Icon
} from '../../styles'

export const CityForecast = ({ navigation }) => {
  const getParams = param => {
    return navigation.getParam(param, 'data')
  }
  const data = getParams('data')

  console.log(data)

  // const renderData = (data, defaultValue) =>
  //   JSON.stringify(navigation.getParam(data, defaultValue))
  return (
    <CityForecastContainer>
      <DayContainer>
        <ForecastColumn>
          <Day>monday</Day>
        </ForecastColumn>
        <ForecastColumn>
          <ForecastRow>
            <Icon source={require('../../assets/icons/fog.png')} />
          </ForecastRow>
          <ForecastRow alignLeft>
            <Temperature>71</Temperature>
          </ForecastRow>
        </ForecastColumn>
      </DayContainer>
      <DayContainer>
        <ForecastColumn>
          <Day>monday</Day>
        </ForecastColumn>
        <ForecastColumn>
          <ForecastRow>
            <Icon source={require('../../assets/icons/fog.png')} />
          </ForecastRow>
          <ForecastRow alignLeft>
            <Temperature>71</Temperature>
          </ForecastRow>
        </ForecastColumn>
      </DayContainer>
      <DayContainer>
        <ForecastColumn>
          <Day>monday</Day>
        </ForecastColumn>
        <ForecastColumn>
          <ForecastRow>
            <Icon source={require('../../assets/icons/fog.png')} />
          </ForecastRow>
          <ForecastRow alignLeft>
            <Temperature>71</Temperature>
          </ForecastRow>
        </ForecastColumn>
      </DayContainer>
    </CityForecastContainer>
  )
}
