import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { AddCityContainer, City, CityButton } from '../../../styles'
import { moreData } from '../../../data'

export const AddCityScreen = ({ navigation }) => {
  const [extraData, setExtraData] = useState(moreData)

  const getParams = param => {
    return navigation.getParam(param, 'data')
  }
  const handlePress = (item, index) => {
    const hardData = getParams('hardData')
    const setHardData = getParams('setHardData')
    setHardData([...hardData, item])
    setExtraData(extraData => extraData.filter(value => item !== value))
    navigation.navigate('HomeScreen')
  }

  const renderData = () => {
    return extraData.map((item, index) => {
      return (
        <CityButton key={item.id} onPress={() => handlePress(item, index)}>
          <City adjustsFontSizeToFit numberOfLines={1}>
            {item.location}
          </City>
        </CityButton>
      )
    })
  }

  useEffect(() => {
    try {
      AsyncStorage.getItem('my-extra-data').then(extraData => {
        if (extraData) {
          let data = JSON.parse(extraData)
          setExtraData(data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    try {
      AsyncStorage.setItem('my-extra-data', JSON.stringify(extraData))
    } catch (error) {
      console.log(error)
    }
  }, [extraData])

  return (
    <>
      <AddCityContainer>{renderData()}</AddCityContainer>
    </>
  )
}

AddCityScreen.navigationOptions = {
  title: 'More Cities'
}
