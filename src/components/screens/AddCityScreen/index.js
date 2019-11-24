import React, { useState, useContext } from 'react'
import { AddCityContainer, City, CityButton } from '../../../styles'
import { data, moreData } from '../../../data'

export const AddCityScreen = ({ navigation }) => {
  const getParams = param => {
    return navigation.getParam(param, 'data')
  }
  const handlePress = item => {
    console.log(item)
    const hardData = getParams('hardData')
    const setHardData = getParams('setHardData')
    console.log(hardData)
    setHardData([...hardData, item])
  }

  const renderData = () => {
    return moreData.map(item => {
      return (
        <CityButton key={item.id} onPress={() => handlePress(item)}>
          <City>{item.city}</City>
        </CityButton>
      )
    })
  }

  return (
    <>
      <AddCityContainer>{renderData()}</AddCityContainer>
    </>
  )
}
