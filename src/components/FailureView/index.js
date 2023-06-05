import {
  FailureViewContainer,
  FailureImg,
  Heading,
  Description,
  CustomButton,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const failureViewContent = {
  darkThemeImg:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png',
  lightThemeImg:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png',
  altText: 'failure view',
  heading: 'Oops! Something Went Wrong',
  description:
    'We are having some trouble to complete your request. Please try again.',
}

const NoResultsContent = {
  darkThemeImg:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png',
  lightThemeImg:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png',
  altText: 'no videos',
  heading: 'No Search results found',
  description: 'Try different key words or remove search filter',
}
const FailureView = props => {
  const {cause, retryRequest} = props
  const content =
    cause === 'requestFailed' ? failureViewContent : NoResultsContent
  const {heading, description, darkThemeImg, lightThemeImg, altText} = content
  const onClickRetryButton = () => {
    retryRequest()
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <FailureViewContainer>
            <FailureImg
              src={isDarkTheme ? darkThemeImg : lightThemeImg}
              alt={altText}
            />
            <Heading isDarkTheme={isDarkTheme}>{heading}</Heading>
            <Description isDarkTheme={isDarkTheme}>{description}</Description>
            <CustomButton type="button" onClick={onClickRetryButton}>
              Retry
            </CustomButton>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
