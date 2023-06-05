import styled from 'styled-components'

export const HomeVideosList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 100%;
  display: flex;
  justify-content: ;
  flex-wrap: wrap;
  @media screen and (min-width:576px){
      padding:10px;
  }
  }
`

export const SearchBarContainer = styled.div`
  border: 1px solid;
  border-color: ${props => (props.isDarkTheme ? '#606060' : '#cbd5e1')};
  display: flex;
  max-width: 500px;
  margin: 20px;
`

export const SearchBar = styled.input`
  padding: 9px;
  padding-left: 10px;
  outline: none;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => props.isDarkTheme && '#f1f1f1'};
  border: none;
  background-color: ${props => (props.isDarkTheme ? 'transparent' : '#ffffff')};
  border-right: 2px solid;
  border-color: ${props => (props.isDarkTheme ? '#606060' : '#cbd5e1')};
  flex-grow: 1;
`

export const SearchIconButton = styled.button`
  color: #7e858e;
  padding-right: 25px;
  padding-left: 25px;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ebebeb')};
  display: flex;
  align-items: center;
  font-size: 17px;
  cursor: pointer;
  outline: none;
  border: none;
`

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: ;
  padding-top: 90px;
`
