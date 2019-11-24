import styled from 'styled-components'

export const HomeContainer = styled.View`
  background-color: red;
  flex: 1;
`
export const CityBox = styled.View`
  height: 145px;
  background-color: pink;
  display: flex;
  flex-direction: row;
`
export const Column = styled.View`
  flex: ${props => props.flex};
  background-color: ${props => props.bg};
`
