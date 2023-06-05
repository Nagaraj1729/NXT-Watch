import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MenuItemLink = styled(Link)`
  text-decoration: none;
`

export const MenuItem = styled.li`
  text-decoration: none;
  color: ${props => {
    if (props.isDarkTheme) {
      return props.isActive ? '#ffffff' : '#e2e8f0'
    }
    return props.isActive ? '#181818' : '#383838'
  }};
  background-color: ${props => {
    if (props.isDarkTheme === true) {
      return props.isActive && '#383838'
    }
    return props.isActive && '#f1f5f9'
  }};
  font-weight: ${props => (props.isActive ? 600 : 400)};
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding-left: 100px;
  }
`

export const Icon = styled.div`
  margin: 18px;
  color: ${props => props.isActive && '#ff0b37'};
`
