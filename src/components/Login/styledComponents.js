import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.isDarkTheme && '#181818'};
`
export const LoginCard = styled.div`
  width: 90%;
  max-width: 450px;
  padding: 17px;
  padding-top: 35px;
  padding-bottom: 50px;
  box-shadow: ${props => !props.isDarkTheme && '0px 4px 16px 0px #bfbfbf'};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.isDarkTheme && '#000000'};
`
export const WebsiteLogo = styled.img`
  width: 45%;
`

export const Form = styled.form`
  width: 100%;
  margin-top: 15px;
  @media screen and (min-width: 576px) {
    width: 85%;
    margin-top: 35px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`
export const InputLabel = styled.label`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#64748b')};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 7px;
`
export const CustomInputField = styled.input`
  padding: 10px;
  padding-left: 15px;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#475569')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 15px;
  outline: none;
  border: 1px solid #94a3b8;
  border-radius: 3px;
  background-color: ${props => props.isDarkTheme && '#000000'};
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`
export const CheckboxInput = styled.input`
  height: 17px;
  width: 17px;
  margin-right: 8px;
  cursor: pointer;
  outline: none;
`
export const CheckboxLabel = styled.label`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#64748b')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`
export const LoginButton = styled.button`
  width: 100%;
  margin-top: 25px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  background-color: #3b82f6;
  border: none;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  outline: none;
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 13px;
  margin-top: 15px;
  margin-bottom: 0px;
`
