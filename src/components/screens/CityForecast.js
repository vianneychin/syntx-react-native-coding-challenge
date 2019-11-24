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

  const renderDaysOfWeek = () => {
    const daysOfWeek = [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 }
    ]
    return daysOfWeek.map(day => {
      return (
        <DayContainer>
          <ForecastColumn>
            {/* data.daily.data[0].time */}
            <Day>today</Day>
          </ForecastColumn>
          <ForecastColumn>
            <ForecastRow>
              <Icon source={require('../../assets/icons/fog.png')} />
            </ForecastRow>
            <ForecastRow alignLeft>
              {/* data.daily.data[0].temperatureMax */}
              <Temperature>71</Temperature>
            </ForecastRow>
          </ForecastColumn>
        </DayContainer>
      )
    })
  }

  // const renderData = (data, defaultValue) =>
  //   JSON.stringify(navigation.getParam(data, defaultValue))
  return <CityForecastContainer>{renderDaysOfWeek()}</CityForecastContainer>
}

// Loop through the next 7 days including today,
// render that stuff
