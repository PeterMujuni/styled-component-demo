import styled, { keyframes } from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${(props) => props.variant === 'outline' ? '#fff' : '#4caf50'};
  padding: 10px 25px;
  border: 1px solid #4caf50;
  cursor: pointer;
  color: ${(props) => props.variant === 'outline' ? '#4caf50' : '#fff'};
  display: inline-block;
  transition: 0.5s all ease-in-out;
  &:hover {
    background-color: ${(props) => props.variant !== 'outline' ? '#fff' : '#4caf50'};
    color: ${(props) => props.variant !== 'outline' ? '#4caf50' : '#fff'};
  }
`
export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`
// export const SubmitButtom = styled(StyledButton).attrs((props) => ({
  
// }))

export const SubmitButtom = styled(StyledButton).attrs({
  type: 'submit'
})`
  box-shadow: 0 9px #999;
  &:active {
    background-color: background-color: ${(props) => props.variant !== 'outline' ? '#fff' : '#4caf50'};
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`

const rotate = keyframes`
  from {
    tranform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`