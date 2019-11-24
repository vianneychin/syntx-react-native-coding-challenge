import React, { useState, useContext } from 'react'
import { AddCityContainer, City, CityButton } from '../../../styles'
import { data, moreData } from '../../../data'

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
  }

  const renderData = () => {
    return extraData.map((item, index) => {
      return (
        <CityButton key={item.id} onPress={() => handlePress(item, index)}>
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
