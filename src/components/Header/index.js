import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {Popup} from 'reactjs-popup'

import {FaMoon, FaBars} from 'react-icons/fa'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {CgClose} from 'react-icons/cg'

import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'

import {
  Navbar,
  NavContent,
  LogoLink,
  WebsiteLogo,
  NavItemsList,
  MobileNavItems,
  DesktopNavItems,
  NavItem,
  ProfileButton,
  ProfileImage,
  LogoutButton,
  PopupContent,
  MenuContainer,
  PopupCloseButton,
  LogoutPopup,
  LogoutQuestion,
  CustomButton,
  LogoutPopupContainer,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, onToggleTheme} = value
        const websiteLogoUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const onClickThemeIcon = () => {
          onToggleTheme()
        }

        const renderLogoutPopupContent = () => close => (
          <LogoutPopupContainer>
            <LogoutPopup isDarkTheme={isDarkTheme}>
              <LogoutQuestion isDarkTheme={isDarkTheme}>
                Are you sure, you want to logout?
              </LogoutQuestion>
              <CustomButton outline type="button" onClick={() => close()}>
                Cancel
              </CustomButton>
              <CustomButton type="button" onClick={onClickLogout}>
                Confirm
              </CustomButton>
            </LogoutPopup>
          </LogoutPopupContainer>
        )

        const renderMobileNavItems = () => (
          <MobileNavItems>
            <NavItem isDarkTheme={isDarkTheme} type="button">
              <Popup modal trigger={<FaBars />}>
                {close => (
                  <PopupContent isDarkTheme={isDarkTheme}>
                    <PopupCloseButton
                      isDarkTheme={isDarkTheme}
                      onClick={() => close()}
                    >
                      <CgClose />
                    </PopupCloseButton>
                    <MenuContainer>
                      <SideBar />
                    </MenuContainer>
                  </PopupContent>
                )}
              </Popup>
            </NavItem>
            <NavItem
              isDarkTheme={isDarkTheme}
              type="button"
              onClick={onClickLogout}
            >
              <Popup modal trigger={<FiLogOut />}>
                {renderLogoutPopupContent()}
              </Popup>
            </NavItem>
          </MobileNavItems>
        )

        const renderDesktopNavItems = () => (
          <DesktopNavItems>
            <ProfileButton type="button">
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ProfileButton>
            <Popup
              modal
              trigger={
                <LogoutButton isDarkTheme={isDarkTheme} type="button">
                  Logout
                </LogoutButton>
              }
            >
              {renderLogoutPopupContent()}
            </Popup>
          </DesktopNavItems>
        )
        return (
          <Navbar isDarkTheme={isDarkTheme}>
            <NavContent>
              <LogoLink to="/">
                <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
              </LogoLink>
              <NavItemsList>
                <NavItem
                  isDarkTheme={isDarkTheme}
                  type="button"
                  onClick={onClickThemeIcon}
                  data-testid="theme"
                >
                  {isDarkTheme ? <FiSun /> : <FaMoon />}
                </NavItem>
                {renderMobileNavItems()}
                {renderDesktopNavItems()}
              </NavItemsList>
            </NavContent>
          </Navbar>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
