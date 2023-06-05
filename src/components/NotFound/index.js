import Header from '../Header'
import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundPage,
  SidebarContainer,
  NotFoundContent,
  NotfoundViewContainer,
  NotFoundImg,
  Heading,
  Description,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const renderPageNotFound = () => (
        <NotfoundViewContainer>
          <NotFoundImg
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            }
            alt="not found"
          />
          <Heading isDarkTheme={isDarkTheme}>Page Not Found</Heading>
          <Description isDarkTheme={isDarkTheme}>
            we are sorry, the page you requested could not be found.
          </Description>
        </NotfoundViewContainer>
      )
      return (
        <>
          <Header />
          <NotFoundPage>
            <SidebarContainer>
              <SideBar />
            </SidebarContainer>
            <NotFoundContent isDarkTheme={isDarkTheme}>
              {renderPageNotFound()}
            </NotFoundContent>
          </NotFoundPage>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
