import {BsDot} from 'react-icons/bs'
import {formatDistanceToNowStrict} from 'date-fns'

import {
  VideoItemLink,
  VideoItem,
  VideoDetailsContainer,
  Thumbnail,
  VideoTitle,
  ChannelProfile,
  VideoInfoMobileView,
  VideoInfoDesktopView,
  InfoDetail,
} from './styledComponents'

const VideoListItem = props => {
  const {videoDetails, isDarkTheme} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails

  const publishedTime = formatDistanceToNowStrict(new Date(publishedAt))

  return (
    <VideoItemLink to={`/videos/${id}`}>
      <VideoItem>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <ChannelProfile src={channel.profileImageUrl} alt="channel logo" />
          <div>
            <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
            <VideoInfoMobileView>
              <InfoDetail>{channel.name}</InfoDetail>
              <InfoDetail>
                <BsDot /> {viewCount} views <BsDot /> {publishedTime} ago
              </InfoDetail>
            </VideoInfoMobileView>
            <VideoInfoDesktopView>
              <InfoDetail>{channel.name}</InfoDetail>
              <InfoDetail>
                {viewCount} views <BsDot /> {publishedTime} ago
              </InfoDetail>
            </VideoInfoDesktopView>
          </div>
        </VideoDetailsContainer>
      </VideoItem>
    </VideoItemLink>
  )
}

export default VideoListItem
