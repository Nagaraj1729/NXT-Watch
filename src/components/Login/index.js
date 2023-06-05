import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  AppContainer,
  LoginCard,
  WebsiteLogo,
  Form,
  InputContainer,
  InputLabel,
  CustomInputField,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMessage: '',
  }

  onLoginSuccessful = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 10})
    const {history} = this.props
    this.setState({username: '', password: ''})
    history.replace('/')
  }

  onLoginFailed = errorMsg => {
    this.setState({showErrorMsg: true, errorMessage: errorMsg})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccessful(data.jwt_token)
    } else {
      this.onLoginFailed(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {showErrorMsg, errorMessage} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const renderUsernameInputField = () => {
            const {username} = this.state
            return (
              <InputContainer>
                <InputLabel htmlFor="username" isDarkTheme={isDarkTheme}>
                  USERNAME
                </InputLabel>
                <CustomInputField
                  type="text"
                  placeholder="Username"
                  id="username"
                  value={username}
                  onChange={this.onChangeUsername}
                  isDarkTheme={isDarkTheme}
                />
              </InputContainer>
            )
          }
          const renderPasswordInputField = () => {
            const {password, showPassword} = this.state
            return (
              <InputContainer>
                <InputLabel htmlFor="password" isDarkTheme={isDarkTheme}>
                  PASSWORD
                </InputLabel>
                <CustomInputField
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={this.onChangePassword}
                  isDarkTheme={isDarkTheme}
                />
              </InputContainer>
            )
          }

          const renderShowPasswordCheckbox = () => (
            <CheckboxContainer>
              <CheckboxInput
                type="checkbox"
                id="showPassword"
                onChange={this.onToggleShowPassword}
              />
              <CheckboxLabel htmlFor="showPassword" isDarkTheme={isDarkTheme}>
                Show Password
              </CheckboxLabel>
            </CheckboxContainer>
          )
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <AppContainer isDarkTheme={isDarkTheme}>
              <LoginCard isDarkTheme={isDarkTheme}>
                <WebsiteLogo src={logoUrl} alt="website logo" />
                <Form onSubmit={this.onSubmitLoginForm}>
                  {renderUsernameInputField()}
                  {renderPasswordInputField()}
                  {renderShowPasswordCheckbox()}
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMsg && <ErrorMessage>*{errorMessage}</ErrorMessage>}
                </Form>
              </LoginCard>
            </AppContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
