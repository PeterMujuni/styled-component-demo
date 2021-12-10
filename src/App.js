import { ThemeProvider, createGlobalStyle } from 'styled-components';
import logo from './logo.svg'
import './App.css';
import StyledButton, { FancyButton, SubmitButtom } from './components/Button/Button';
import { AnimatedLogo, DarkButton } from './components/Button/Button.styles';

const theme = {
  dark: {
    primary: 'black',
    text: 'white'
  },
  light: {
    primary: 'white',
    text: 'black'
  }
}

const GlobalStyle = createGlobalStyle`
  button {
    font-family: 'Roboto';
  }

`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {/* <img src={logo} alt="logo" className='App-logo' /> */}
        <AnimatedLogo src={logo}/>
        {/* <button>Button</button> */}
        <StyledButton>Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant='outline'>Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <FancyButton as='a'>Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButtom as='a'>Fancy Button</SubmitButtom>
        <div>
          <br />
        </div>
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
  
}

export default App;
