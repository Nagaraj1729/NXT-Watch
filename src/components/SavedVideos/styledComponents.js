import styled from 'styled-components'

export const SavedVideosPage = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
`
export const SavedVideosContent = styled.div`
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
export const VideosList = styled.ul`
  list-style-type: none;
  padding-left: 0px;

  @media screen and (min-width: 576px) {
    padding-left: 20px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 50px;
  }
`

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;
  padding-top: 60px;
  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
`

export const NoVideosImg = styled.img`
  width: 90%;
  max-width: 500px;
  margin-bottom: 25px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#7e858e' : '#475569')};
  font-weight: 400;
  text-align: center;
  margin-top: 0px;
  line-height: 27px;
  max-width: 250px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 400px;
  }
`
