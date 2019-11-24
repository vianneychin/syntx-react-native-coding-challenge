import styled from 'styled-components'
import { Text } from 'react-native'

export const HomeContainer = styled.ScrollView`
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
  display: ${props => props.d};
  margin: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Row = styled.View`
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
export const CityForecastContainer = styled.ScrollView`
  flex: 1;
  padding: 5%;
`
export const DayContainer = styled.View`
  background-color: rgb(240, 240, 240);
  height: 120px;
  border-left-width: 5px;
  border-left-color: rgb(100, 100, 100);
  display: flex;
  flex-direction: row;
  margin: 2.5% 0;
`
export const ForecastColumn = styled(Column)`
  display: flex;
  flex-direction: row;
  flex: 1;
`
export const ForecastRow = styled(Row)`
  height: 100%;
  display: flex;
  align-items: ${props => (props.alignLeft ? 'flex-start' : 'center')};
`
export const Day = styled.Text`
  font-size: 35px;
`
