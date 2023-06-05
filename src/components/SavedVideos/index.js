import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'
import VideoListItem from '../VideoListItem'

import {
  SavedVideosPage,
  SavedVideosContent,
  SidebarContainer,
  SectionLogoContainer,
  SectionHeader,
  SectionTitle,
  VideosList,
  NoVideosView,
  NoVideosImg,
  Heading,
  Description,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value

      const renderSavedVideosList = () => (
        <>
          <SectionHeader isDarkTheme={isDarkTheme}>
            <SectionLogoContainer isDarkTheme={isDarkTheme}>
              <HiFire />
            </SectionLogoContainer>
            <SectionTitle isDarkTheme={isDarkTheme}>Saved Videos</SectionTitle>
          </SectionHeader>
          <VideosList>
            {savedVideos.map(video => (
              <VideoListItem
                key={video.id}
                videoDetails={video}
                isDarkTheme={isDarkTheme}
              />
            ))}
          </VideosList>
        </>
      )
      const renderNoVideosView = () => (
        <NoVideosView>
          <NoVideosImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <Heading isDarkTheme={isDarkTheme}>No saved videos found</Heading>
          <Description isDarkTheme={isDarkTheme}>
            You can save your videos while watching them
          </Description>
        </NoVideosView>
      )
      return (
        <>
          <Header />
          <SavedVideosPage>
            <SidebarContainer>
              <SideBar />
            </SidebarContainer>
            <SavedVideosContent
              isDarkTheme={isDarkTheme}
              data-testid="savedVideos"
            >
              {savedVideos.length !== 0
                ? renderSavedVideosList()
                : renderNoVideosView()}
            </SavedVideosContent>
          </SavedVideosPage>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
