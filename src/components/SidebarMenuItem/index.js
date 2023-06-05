import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeContext from '../../context/ThemeContext'

import {MenuItemLink, MenuItem, Icon} from './styledComponents'

const SidebarMenuItem = props => {
  const {item, isActive} = props
  const {id, displayText, path} = item
  const renderIcon = () => {
    switch (id) {
      case 'HOME':
        return (
          <Icon isActive={isActive}>
            <AiFillHome />
          </Icon>
        )
      case 'TRENDING':
        return (
          <Icon isActive={isActive}>
            <HiFire />
          </Icon>
        )
      case 'GAMING':
        return (
          <Icon isActive={isActive}>
            <SiYoutubegaming />
          </Icon>
        )
      case 'SAVED_VIDEOS':
        return (
          <Icon isActive={isActive}>
            <CgPlayListAdd />
          </Icon>
        )
      default:
        return null
    }
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <MenuItemLink to={path}>
            <MenuItem isActive={isActive} isDarkTheme={isDarkTheme}>
              {renderIcon()}
              {displayText}
            </MenuItem>
          </MenuItemLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SidebarMenuItem
