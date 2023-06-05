import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const Navbar = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 10vh;
  @media screen and (min-width: 768px) {
  }
`

export const NavContent = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 95%;
  }
`
export const LogoLink = styled(Link)`
  width: 30%;
  max-width: 120px;
`

export const WebsiteLogo = styled.img`
  width: 100%;
`

export const NavItemsList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: auto;
`

export const MobileNavItems = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopNavItems = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavItem = styled.button`
  padding: 0px;
  font-size: 22px;
  color: ${props => props.isDarkTheme && '#ffffff'};
  background-color: transparent;
  border: none;
  margin-left: 18px;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    font-size: 26px;
    margin-left: 35px;
  }
`

export const ProfileButton = styled(NavItem)`
  width: 32px;
  height: 25px;
`
export const ProfileImage = styled.img`
  width: 100%;
`

export const LogoutButton = styled.button`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  padding: 5px 15px 5px 15px;
  border: 1px solid;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-left: 35px;
  cursor: pointer;
  outline: none;
`

export const PopupContent = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const MenuContainer = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
`

export const PopupCloseButton = styled.button`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#181818')};
  background-color: transparent;
  border: none;
  align-self: flex-end;
  margin: 30px;
  font-size: 25px;
`
export const CustomButton = styled.button`
  color: ${props => (props.outline ? '#94a3b8' : '#ffffff')};
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  padding: 10px 15px 10px 15px;
  border: 1px solid;
  border-color: ${props => (props.outline ? '#94a3b8' : '#3b82f6')};
  border-radius: 3px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
  margin: 15px;
`

export const LogoutPopup = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  border-radius: 10px;
  padding: 20px 0px 20px 0px;
  text-align: center;
  width: 85%;
  max-width: 360px;
`

export const LogoutQuestion = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  font-family: 'Roboto';
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
`

export const LogoutPopupContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000080;
`
