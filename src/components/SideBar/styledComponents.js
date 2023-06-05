import styled from 'styled-components'

export const Sidebar = styled.div`
  background-color: ${props => props.isDarkTheme && '#212121'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const MenuList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  flex-grow: ;
`
export const ContactSection = styled.div`
  padding: 15px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const Heading = styled.p`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#00306e')};
  font-family: 'Roboto';
  font-weight: 600;
  line-height: 1.5;
  width: 70%;
`
export const ContactMedias = styled.div`
  display: flex;
  margin-top: 23px;
  margin-bottom: 23px;
`
export const MediaIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 15px;
`
