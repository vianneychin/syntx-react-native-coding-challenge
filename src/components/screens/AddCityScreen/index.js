import React, { useState } from 'react'
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
    /* save here? */
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

  return (
    <>
      <AddCityContainer>{renderData()}</AddCityContainer>
    </>
  )
}

AddCityScreen.navigationOptions = {
  title: 'More Cities'
}
