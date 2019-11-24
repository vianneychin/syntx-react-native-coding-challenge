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

  const renderCurrentDay = (data, index) => {
    if (data.daily) {
      return data.daily.data[index].time
    } else {
      return 'Loading...'
    }
  }

  const renderDailyTemp = (data, index) => {
    if (data.daily) {
      return data.daily.data[index].temperatureMax
    } else {
      return 'Loading...'
    }
  }

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
        <DayContainer key={day.id}>
          <ForecastColumn>
            {/* data.daily.data[0].time */}
            <Day>{renderCurrentDay(data, day.id)}</Day>
          </ForecastColumn>
          <ForecastColumn>
            <ForecastRow>
              <Icon source={require('../../assets/icons/fog.png')} />
            </ForecastRow>
            <ForecastRow alignLeft>
              {/* data.daily.data[0].temperatureMax */}
              <Temperature>{renderDailyTemp(data, day.id)}</Temperature>
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
