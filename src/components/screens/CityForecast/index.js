import React from 'react'
import dayjs from 'dayjs'
import { SafeAreaView, Text } from 'react-native'
import { icons } from './icons'
import {
  CityForecastContainer,
  DayContainer,
  ForecastColumn,
  ForecastRow,
  Temperature,
  Day,
  Icon
} from '../../../styles'

export const CityForecast = ({ navigation }) => {
  const getParams = param => {
    return navigation.getParam(param, 'data')
  }
  const data = getParams('data')

  console.log(data)

  const renderIcon = (data, index) => {
    if (data.daily) {
      const icon = icons[data.daily.data[index].icon]
      return <Icon width='50px' source={icon} />
    } else {
      return <Text>Loading...</Text>
    }
  }

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

  const formatToDay = num => {
    return dayjs.unix(num).format('dddd')
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
            <Day adjustsFontSizeToFit numberOfLines={1}>
              {formatToDay(renderCurrentDay(data, day.id))}
            </Day>
          </ForecastColumn>
          <ForecastColumn>
            <ForecastRow>{renderIcon(data, day.id)}</ForecastRow>
            <ForecastRow alignLeft>
              {/* data.daily.data[0].temperatureMax */}
              <Temperature smaller adjustsFontSizeToFit numberOfLines={1}>
                {renderDailyTemp(data, day.id)}°
              </Temperature>
            </ForecastRow>
          </ForecastColumn>
        </DayContainer>
      )
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CityForecastContainer>{renderDaysOfWeek()}</CityForecastContainer>
    </SafeAreaView>
  )
}

CityForecast.navigationOptions = {
  title: '7 Day Forecast'
}
