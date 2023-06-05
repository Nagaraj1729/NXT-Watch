import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {AiOutlineSearch} from 'react-icons/ai'

import HomeVideosListItem from '../HomeVideosListItem'
import {
  SearchBarContainer,
  SearchBar,
  SearchIconButton,
  HomeVideosList,
  LoaderContainer,
} from './styledComponents'

import FailureView from '../../FailureView'

const apiStatusResult = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomeVideos extends Component {
  state = {
    apiStatus: apiStatusResult.initial,
    videosData: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusResult.inProgress})
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const jsonData = await response.json()
      const formattedData = jsonData.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: {
          name: video.channel.name,
          profileImgUrl: video.channel.profile_image_url,
        },
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({
        videosData: formattedData,
        apiStatus: apiStatusResult.success,
      })
    } else {
      this.setState({apiStatus: apiStatusResult.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchIcon = () => {
    this.getVideos()
  }

  onEnterSearch = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  renderLoader = () => {
    const {isDarkTheme} = this.props
    return (
      <LoaderContainer data-testid="loader">
        <Loader
          type="ThreeDots"
          color={isDarkTheme ? '#ffffff' : '#475569'}
          height="50"
          width="50"
        />
      </LoaderContainer>
    )
  }

  renderFailureView = () => (
    <FailureView cause="requestFailed" retryRequest={this.getVideos} />
  )

  renderVideosList = () => {
    const {videosData} = this.state
    const {isDarkTheme} = this.props

    if (videosData.length === 0) {
      return <FailureView retryRequest={this.getVideos} />
    }

    return (
      <HomeVideosList>
        {videosData.map(video => (
          <HomeVideosListItem
            key={video.id}
            videoDetails={video}
            isDarkTheme={isDarkTheme}
          />
        ))}
      </HomeVideosList>
    )
  }

  renderAppropriateContent = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusResult.inProgress:
        return this.renderLoader()
      case apiStatusResult.success:
        return this.renderVideosList()
      case apiStatusResult.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {isDarkTheme} = this.props
    const {searchInput} = this.state
    return (
      <>
        <SearchBarContainer isDarkTheme={isDarkTheme}>
          <SearchBar
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
            onKeyDown={this.onEnterSearch}
            isDarkTheme={isDarkTheme}
          />
          <SearchIconButton
            onClick={this.onClickSearchIcon}
            isDarkTheme={isDarkTheme}
            type="button"
            data-testid="searchButton"
          >
            <AiOutlineSearch />
          </SearchIconButton>
        </SearchBarContainer>
        {this.renderAppropriateContent()}
      </>
    )
  }
}

export default HomeVideos
