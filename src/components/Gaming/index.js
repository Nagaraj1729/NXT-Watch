import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'
import FailureView from '../FailureView'
import GamingVideoItem from '../GamingVideoItem'

import {
  GamingPage,
  HomeContent,
  SidebarContainer,
  SectionLogoContainer,
  SectionHeader,
  SectionTitle,
  LoaderContainer,
  GamingVideosList,
} from './styledComponents'

const apiStatusResult = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusResult.initial,
    gamingVideos: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusResult.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const responseData = await response.json()
      const gamingVideos = responseData.videos
      const formattedData = gamingVideos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
      }))

      this.setState({
        gamingVideos: formattedData,
        apiStatus: apiStatusResult.success,
      })
    } else {
      this.setState({apiStatus: apiStatusResult.failure})
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const renderLoader = () => (
            <LoaderContainer data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDarkTheme ? '#ffffff' : '#475569'}
                height="50"
                width="50"
              />
            </LoaderContainer>
          )
          const renderGamingVideosList = () => {
            const {gamingVideos} = this.state
            return (
              <>
                <SectionHeader isDarkTheme={isDarkTheme}>
                  <SectionLogoContainer isDarkTheme={isDarkTheme}>
                    <SiYoutubegaming />
                  </SectionLogoContainer>
                  <SectionTitle isDarkTheme={isDarkTheme}>Gaming</SectionTitle>
                </SectionHeader>
                <GamingVideosList>
                  {gamingVideos.map(video => (
                    <GamingVideoItem
                      key={video.id}
                      videoDetails={video}
                      isDarkTheme={isDarkTheme}
                    />
                  ))}
                </GamingVideosList>
              </>
            )
          }

          const renderAppropriateContent = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case apiStatusResult.inProgress:
                return renderLoader()
              case apiStatusResult.success:
                return renderGamingVideosList()
              case apiStatusResult.failure:
                return (
                  <FailureView
                    cause="requestFailed"
                    retryRequest={this.getGamingVideos}
                  />
                )
              default:
                return null
            }
          }
          return (
            <>
              <Header />
              <GamingPage>
                <SidebarContainer>
                  <SideBar />
                </SidebarContainer>
                <HomeContent isDarkTheme={isDarkTheme} data-testid="gaming">
                  {renderAppropriateContent()}
                </HomeContent>
              </GamingPage>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
