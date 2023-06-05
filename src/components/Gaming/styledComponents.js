import styled from 'styled-components'

export const GamingPage = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
`

export const HomeContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  color: #ffffff;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const SidebarContainer = styled.div`
  height: 100%;
  width: 20%;
  flex-shrink: 0;
  display: flex;
  align-items: stretch;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f4f4f4')};
  padding: 15px;
  padding-left: 20px;
  @media screen and (min-width: 768px) {
    padding: 20px;
    padding-left: 50px;
  }
`

export const SectionLogoContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#d7dfe9')};
  margin-right: 15px;
  font-size: 30px;
  width: 50px;
  height: 50px;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff0000;
  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

export const SectionTitle = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#181818')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    font-weight: 600;
  }
`
export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
`

export const GamingVideosList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    padding-left: 50px;
    padding-top: 35px;
    padding-right: 25px;
  }
`
