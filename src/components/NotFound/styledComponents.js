import styled from 'styled-components'

export const NotFoundPage = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
`
export const SidebarContainer = styled.div`
  width: 20%;
  flex-shrink: 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const NotFoundContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  color: #ffffff;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const NotfoundViewContainer = styled.div`
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

export const NotFoundImg = styled.img`
  width: 90%;
  max-width: 500px;
  margin-bottom: 15px;
`

export const Heading = styled.h1`
  margin-bottom: 15px;
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
