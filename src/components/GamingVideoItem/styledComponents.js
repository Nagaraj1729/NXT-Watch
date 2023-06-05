import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const VideoLinkItem = styled(Link)`
  text-decoration: none;
  margin-bottom: 20px;
  width: 48%;

  @media screen and (min-width: 576px) {
    width: 30%;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    max-height: 600px;
  }
`

export const VideoDetailsContainer = styled.div`
  padding-right: 5px;
  @media screen and (min-width: 576px) {
  }
`
export const Thumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
  }
  @media screen and (min-width: 768px) {
  }
`

export const VideoTitle = styled.p`
  margin-top: 10px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#00306e')};
  line-height: 22px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ViewsAndPublished = styled.p`
  margin-top: 0px;
  line-height: 25px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #64748b;
  @media screen and (min-width: 768px) {
    font-size: 17px;
    margin-top: 5px;
  }
`
