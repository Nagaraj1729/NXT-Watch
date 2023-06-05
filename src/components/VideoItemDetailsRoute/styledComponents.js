import styled from 'styled-components'

export const VideoDetailedPage = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
`
export const SidebarContainer = styled.div`
  height: 100%;
  width: 20%;
  flex-shrink: 0;
  display: flex;
  align-items: stretch;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const VideoContentSection = styled.div`
  flex-grow: 1;
  color: #ffffff;
  overflow-y: auto;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    padding: 25px;
  }
`

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
`
export const VideoDetailsContainer = styled.div`
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`
export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 230px;
  margin-top: 20px;
  @media screen and (min-width: 576px) {
    height: 500px;
    margin-top: 0px;
  }
`

export const VideoTitle = styled.p`
  margin-bottom: 10px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#00306e')};
  line-height: 25px;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 20px;
  }
`

export const ViewsAndPublished = styled.p`
  line-height: 25px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #64748b;
  display: flex;
  align-items: center;
  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`

export const VideoInfoAndReactionsContainer = styled.div`
  border-bottom: 2px solid;
  border-color: ${props => (props.isDarkTheme ? '#475569' : '#d7dfe9')};
  padding-bottom: 22px;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
  }
`

export const ReactionButtons = styled.div`
  display: flex;
`

export const CustomButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 0px;
  margin-right: 28px;
  background-color: transparent;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  border: none;
  outline: none;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const ChannelInfoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`

export const ChannelProfile = styled.img`
  width: 45px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    width: 50px;
  }
`
export const ChannelName = styled.p`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#00306e')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const SubscriberCount = styled.p`
  margin-top: 6px;
  font-size: 13px;
  font-family: 'Roboto';
  color: #64748b;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #cccccc;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#64748b')};
  @media screen and (min-width: 768px) {
    margin-left: 65px;
    font-size: 16px;
    line-height: 25px;
  }
`
