import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import SidebarMenuItem from '../SidebarMenuItem'

import ThemeContext from '../../context/ThemeContext'

import {
  Sidebar,
  MenuList,
  ContactSection,
  Heading,
  ContactMedias,
  MediaIcon,
} from './styledComponents'

const menuItemsList = [
  {
    id: 'HOME',
    displayText: 'Home',
    path: '/',
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
    path: '/trending',
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
    path: '/gaming',
  },
  {
    id: 'SAVED_VIDEOS',
    displayText: 'Saved Videos',
    path: '/saved-videos',
  },
]

class SideBar extends Component {
  render() {
    const {history} = this.props
    const {location} = history
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const renderMenuItems = () => (
            <MenuList>
              {menuItemsList.map(item => (
                <SidebarMenuItem
                  key={item.id}
                  item={item}
                  isActive={location.pathname === item.path}
                />
              ))}
            </MenuList>
          )

          const renderContactSection = () => (
            <ContactSection>
              <Heading isDarkTheme={isDarkTheme}>CONTACT US</Heading>
              <ContactMedias>
                <MediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <MediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <MediaIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactMedias>
              <Heading isDarkTheme={isDarkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </Heading>
            </ContactSection>
          )

          return (
            <Sidebar isDarkTheme={isDarkTheme}>
              {renderMenuItems()}
              {renderContactSection()}
            </Sidebar>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(SideBar)
