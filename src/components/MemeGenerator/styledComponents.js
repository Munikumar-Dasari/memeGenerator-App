// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 85%;
    align-items: flex-start;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    text-align: left;
    align-items: flex-start;
  }
`

export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-direction: row-reverse;
  }
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    margin-top: 5px;
    margin-bottom: 20px;
    width: 40%;
  }
`
export const TextContent = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: ${props => props.selectedFontSize}px;
  font-family: 'Open Sans';
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const Label = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 0px;
`

export const Input = styled.input`
  color: #5a7184;
  font-family: 'Open Sans';
  background-color: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  outline: none;
  height: 40px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
`
export const Select = styled.select`
  color: #1e293b;
  font-family: 'Open Sans';
  background-color: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  height: 40px;
  outline: none;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
`
export const Options = styled.option`
  font-size: 16px;
  padding: 12px 14px;
`

export const Button = styled.button`
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  background-color: #0b69ff;
  height: 40px;
  width: 120px;
  outline: none;
  cursor: pointer;
`
