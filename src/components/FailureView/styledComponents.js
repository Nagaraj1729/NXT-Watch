import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;
  padding-top: 60px;
  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
`

export const FailureImg = styled.img`
  width: 60%;
  max-width: 400px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#7e858e' : '#475569')};
  font-weight: 400;
  text-align: center;
  margin-top: 0px;
  line-height: 27px;
  max-width: 350px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 400px;
  }
`

export const CustomButton = styled.button`
  color: #f4f4f4;
  font-family: 'Roboto';
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  padding: 10px 25px 10px 25px;
  cursor: pointer;
  outline: none;
`
