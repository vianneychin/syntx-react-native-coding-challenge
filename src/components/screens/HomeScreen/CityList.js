import React from 'react'
import CityItem from './CityItem'

export const CityList = ({ data }) => {
  return data.map(item => {
    return (
      <CityItem key={item.id} lat={item.lat} lng={item.lng} city={item.city} />
    )
  })
}
