import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const VideoItemLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 25px;
  @media screen and (min-width: 576px) {
    width: 44%;
    max-width: 360px;
    margin: 15px;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  @media screen and (min-width: 576px) {
    padding: 0px;
    margin-top: 15px;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
`

export const VideoTitle = styled.p`
  margin-top: 0px;
  margin-bottom: 5px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#00306e')};
  line-height: 22px;
`

export const ChannelProfile = styled.img`
  width: 45px;
  margin-right: 10px;
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
