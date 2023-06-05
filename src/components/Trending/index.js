import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'
import FailureView from '../FailureView'
import VideoListItem from '../VideoListItem'

import {
  TrendingPage,
  TrendingPageContent,
  SidebarContainer,
  SectionLogoContainer,
  SectionHeader,
  SectionTitle,
  LoaderContainer,
  VideosList,
} from './styledComponents'

const apiStatusResult = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusResult.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusResult.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
      const trendingVideos = responseData.videos
      const formattedData = trendingVideos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))

      this.setState({
        trendingVideos: formattedData,
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
          const renderTrendingVideosList = () => {
            const {trendingVideos} = this.state
            return (
              <>
                <SectionHeader isDarkTheme={isDarkTheme}>
                  <SectionLogoContainer isDarkTheme={isDarkTheme}>
                    <HiFire />
                  </SectionLogoContainer>
                  <SectionTitle isDarkTheme={isDarkTheme}>
                    Trending
                  </SectionTitle>
                </SectionHeader>
                <VideosList>
                  {trendingVideos.map(video => (
                    <VideoListItem
                      key={video.id}
                      videoDetails={video}
                      isDarkTheme={isDarkTheme}
                    />
                  ))}
                </VideosList>
              </>
            )
          }

          const renderAppropriateContent = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case apiStatusResult.inProgress:
                return renderLoader()
              case apiStatusResult.success:
                return renderTrendingVideosList()
              case apiStatusResult.failure:
                return (
                  <FailureView
                    cause="requestFailed"
                    retryRequest={this.getTrendingVideos}
                  />
                )
              default:
                return null
            }
          }
          return (
            <>
              <Header />
              <TrendingPage>
                <SidebarContainer>
                  <SideBar />
                </SidebarContainer>
                <TrendingPageContent
                  isDarkTheme={isDarkTheme}
                  data-testid="trending"
                >
                  {renderAppropriateContent()}
                </TrendingPageContent>
              </TrendingPage>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
