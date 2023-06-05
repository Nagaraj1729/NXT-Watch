import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemLink = styled(Link)`
  text-decoration: none;
`

export const VideoItem = styled.li`
  margin-bottom: 25px;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  @media screen and (min-width: 576px) {
    padding-top: 0px;
    width: 50%;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
    max-width: 400px;
  }
  @media screen and (min-width: 768px) {
    margin-right: 10px;
  }
`

export const VideoTitle = styled.p`
  margin-top: 0px;
  margin-bottom: 5px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#00306e')};
  line-height: 22px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ChannelProfile = styled.img`
  width: 45px;
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoInfoMobileView = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const VideoInfoDesktopView = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 575px) {
    display: none;
  }
`
export const InfoDetail = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  color: #64748b;
  margin-top: 5px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
`
