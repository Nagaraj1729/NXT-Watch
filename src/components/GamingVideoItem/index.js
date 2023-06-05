import {
  VideoLinkItem,
  VideoDetailsContainer,
  Thumbnail,
  VideoTitle,
  ViewsAndPublished,
} from './styledComponents'

const GameVideoItem = props => {
  const {videoDetails, isDarkTheme} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <VideoLinkItem to={`/videos/${id}`}>
      <div>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <div>
            <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
            <ViewsAndPublished>
              {viewCount} Watching Worldwide
            </ViewsAndPublished>
          </div>
        </VideoDetailsContainer>
      </div>
    </VideoLinkItem>
  )
}

export default GameVideoItem
