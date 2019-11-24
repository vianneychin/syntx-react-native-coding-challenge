import styled from 'styled-components'
import { Text } from 'react-native'

export const HomeContainer = styled.ScrollView`
  /* background-color: red; */
  flex: 1;
  display: flex;
  margin: 2.5%;
`
export const CityBox = styled.View`
  height: 145px;
  background-color: rgba(240, 240, 240, 0.8);
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  margin: 1%;
`
export const Column = styled.View`
  flex: ${props => props.flex};
  /* background-color: ${props => props.bg}; */
  margin: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Row = styled.View`
  /* background-color: ${props => props.bg}; */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Temperature = styled.Text`
  font-size: 35px;
`

export const Location = styled.Text`
  font-size: 35px;
`

export const Icon = styled.Image`
  width: 50px;
  height: 50px;
`

export const AddCityContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 5%;
`

export const City = styled(Text).attrs(props => ({
  adjustsFontSizeToFit: true,
  numberOfLines: 1
}))`
  font-size: 30px;
  text-align: center;
`
export const CityButton = styled.TouchableOpacity`
  width: 80%;
  margin-bottom: 20px;
`
