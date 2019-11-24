import React, { useState } from 'react'
import { data } from '../../../data'
import { Button, SafeAreaView } from 'react-native'
import { HomeContainer } from '../../../styles'
import { CityList } from './CityList'

export const HomeScreen = ({ navigation }) => {
  const [hardData, setHardData] = useState(data)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeContainer>
        <CityList data={hardData} />
      </HomeContainer>
      <Button
        title='Add a city'
        onPress={() =>
          navigation.navigate('AddCityScreen', {
            hardData,
            setHardData
          })
        }
      />
    </SafeAreaView>
  )
}

HomeScreen.navigationOptions = {
  title: 'Home'
}
