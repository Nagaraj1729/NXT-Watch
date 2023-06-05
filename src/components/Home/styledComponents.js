import styled from 'styled-components'

export const HomePage = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
`

export const HomeContent = styled.div`
  flex-grow: 1;
  color: #ffffff;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  overflow-y: auto;
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

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 30px;
  @media screen and (min-width: 768px) {
    padding: 35px;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Logo = styled.img`
  width: 130px;
`
export const CloseIcon = styled.button`
  color: #383838;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  padding: 0px;
  align-self: flex-start;
  background-color: transparent;
  border: none;
  margin-top: px;
`
export const BannerDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  line-height: 2;
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 35%;
    font-size: 20px;
  }
`
export const BannerButton = styled.button`
  background-color: transparent;
  border: 2px solid #475569;
  color: #475569;
  font-family: 'Roboto';
  font-weight: 500;
  padding: 10px 15px 10px 15px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
`
