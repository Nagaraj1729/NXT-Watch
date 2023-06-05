import {Component} from 'react'

import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd, CgPlayListCheck} from 'react-icons/cg'
import {formatDistanceToNowStrict} from 'date-fns'
import './index.css'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoDetailedPage,
  SidebarContainer,
  VideoContentSection,
  LoaderContainer,
  VideoPlayerContainer,
  VideoDetailsContainer,
  VideoInfoAndReactionsContainer,
  VideoTitle,
  ViewsAndPublished,
  ReactionButtons,
  CustomButton,
  ChannelInfoContainer,
  ChannelProfile,
  ChannelName,
  SubscriberCount,
  Description,
} from './styledComponents'

const apiStatusResult = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetailsRoute extends Component {
  state = {
    apiStatus: apiStatusResult.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusResult.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const responseVideoData = await response.json()
      const videoDetails = responseVideoData.video_details
      const formattedData = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
      }
      this.setState({
        videoDetails: formattedData,
        apiStatus: apiStatusResult.success,
      })
    } else {
      this.setState({apiStatus: apiStatusResult.failure})
    }
  }

  onToggleLikeButton = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onToggleDislikeButton = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  onClickSaveButton = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos, saveOrRemoveVideo} = value

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
          const renderFailureView = () => <FailureView cause="requestFailed" />

          const renderVideoContent = () => {
            const {videoDetails, isLiked, isDisliked} = this.state
            const {
              id,
              title,
              videoUrl,
              viewCount,
              publishedAt,
              channel,
              description,
            } = videoDetails
            const published = formatDistanceToNowStrict(new Date(publishedAt))

            const isSaved = savedVideos.some(video => video.id === id)

            const onClickSave = () => {
              saveOrRemoveVideo(videoDetails)
              this.render()
            }

            return (
              <>
                <VideoPlayerContainer>
                  <ReactPlayer
                    url={videoUrl}
                    controls
                    width="100%"
                    height="100%"
                  />
                </VideoPlayerContainer>

                <VideoDetailsContainer>
                  <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                  <VideoInfoAndReactionsContainer isDarkTheme={isDarkTheme}>
                    <ViewsAndPublished>
                      {viewCount} views <BsDot /> {published} ago
                    </ViewsAndPublished>
                    <ReactionButtons>
                      <CustomButton
                        isActive={isLiked}
                        type="button"
                        onClick={this.onToggleLikeButton}
                      >
                        <BiLike className="LikeDislikeIcon" />
                        Like
                      </CustomButton>
                      <CustomButton
                        isActive={isDisliked}
                        type="button"
                        onClick={this.onToggleDislikeButton}
                      >
                        <BiDislike className="LikeDislikeIcon" />
                        Dislike
                      </CustomButton>
                      <CustomButton
                        isActive={isSaved}
                        type="button"
                        onClick={onClickSave}
                      >
                        {isSaved ? (
                          <CgPlayListCheck className="LikeDislikeIcon" />
                        ) : (
                          <CgPlayListAdd className="LikeDislikeIcon" />
                        )}
                        {isSaved ? 'Saved' : 'Save'}
                      </CustomButton>
                    </ReactionButtons>
                  </VideoInfoAndReactionsContainer>
                  <ChannelInfoContainer>
                    <ChannelProfile src={channel.profileImageUrl} alt="" />
                    <div>
                      <ChannelName isDarkTheme={isDarkTheme}>
                        {channel.name}
                      </ChannelName>
                      <SubscriberCount>
                        {channel.subscriberCount} subscribers
                      </SubscriberCount>
                    </div>
                  </ChannelInfoContainer>
                  <Description isDarkTheme={isDarkTheme}>
                    {description}
                  </Description>
                </VideoDetailsContainer>
              </>
            )
          }

          const renderAppropriateContent = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case apiStatusResult.inProgress:
                return renderLoader()
              case apiStatusResult.success:
                return renderVideoContent()
              case apiStatusResult.failure:
                return renderFailureView()
              default:
                return null
            }
          }

          return (
            <>
              <Header />
              <VideoDetailedPage>
                <SidebarContainer>
                  <SideBar />
                </SidebarContainer>
                <VideoContentSection
                  isDarkTheme={isDarkTheme}
                  data-testis="videoItemDetails"
                >
                  {renderAppropriateContent()}
                </VideoContentSection>
              </VideoDetailedPage>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
