import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { data } from '../../../data'
import { Button, SafeAreaView } from 'react-native'
import { HomeContainer } from '../../../styles'
import { CityList } from './CityList'

export const HomeScreen = ({ navigation }) => {
  const [hardData, setHardData] = useState(data)

  useEffect(() => {
    try {
      AsyncStorage.getItem('my-data').then(hardData => {
        if (hardData) {
          let data = JSON.parse(hardData)
          setHardData(data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    try {
      AsyncStorage.setItem('my-data', JSON.stringify(hardData))
    } catch (error) {
      console.log(error)
    }
  }, [hardData])

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
