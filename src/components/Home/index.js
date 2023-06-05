import {Component} from 'react'

import {CgClose} from 'react-icons/cg'

import Header from '../Header'
import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'
import HomeVideos from './HomeVideos'

import {
  HomePage,
  HomeContent,
  SidebarContainer,
  Banner,
  LogoContainer,
  Logo,
  CloseIcon,
  BannerDescription,
  BannerButton,
} from './styledComponents'

class Home extends Component {
  state = {isBannerNotClosed: true}

  onCloseBanner = () => {
    this.setState({isBannerNotClosed: false})
  }

  renderBanner = () => (
    <Banner data-testid="banner">
      <LogoContainer>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <CloseIcon onClick={this.onCloseBanner} data-testid="close">
          <CgClose />
        </CloseIcon>
      </LogoContainer>
      <BannerDescription>
        Buy Nxt Watch Premium prepaid plans with UPI
      </BannerDescription>
      <BannerButton>GET IT NOW</BannerButton>
    </Banner>
  )

  render() {
    const {isBannerNotClosed} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <HomePage>
                <SidebarContainer>
                  <SideBar />
                </SidebarContainer>

                <HomeContent isDarkTheme={isDarkTheme} data-testid="home">
                  {isBannerNotClosed && this.renderBanner()}
                  <HomeVideos isDarkTheme={isDarkTheme} />
                </HomeContent>
              </HomePage>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
