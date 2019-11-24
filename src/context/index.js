import { createContext } from 'react'

export const DataContext = createContext([
  {
    id: 1,
    state: 'Illinois',
    city: 'chicago',
    lat: '41.8781',
    lng: '-87.6298'
  },
  {
    id: 2,
    state: 'New York',
    city: 'new_york',
    lat: '40.7128',
    lng: '-74.0060'
  },
  {
    id: 3,
    state: 'California',
    city: 'los_angeles',
    lat: '37.8267',
    lng: '-122.4233'
  },
  {
    id: 4,
    state: 'Alaska',
    city: 'anchorage',
    lat: '61.2181',
    lng: '-149.9003'
  }
])
