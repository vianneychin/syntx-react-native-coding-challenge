import styled from 'styled-components'

export const HomeContainer = styled.View`
  background-color: red;
  flex: 1;
  display: flex;
  align-items: center;
  margin: 2.5%;
`
export const CityBox = styled.View`
  height: 145px;
  background-color: pink;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  margin: 1%;
`
export const Column = styled.View`
  flex: ${props => props.flex};
  background-color: ${props => props.bg};
  margin: 1%;
`

export const Row = styled.View`
  background-color: ${props => props.bg};
  flex: 1;
`
