import React from 'react'
import { View, Text } from 'react-native'

export const CityForecast = ({ navigation }) => {
  const renderData = (data, defaultValue) =>
    JSON.stringify(navigation.getParam(data, defaultValue))
  return (
    <View>
      <Text>This is a future forecast of a city.</Text>
      <Text>{renderData('test', 'test-id')}</Text>
    </View>
  )
}
