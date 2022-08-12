import './App.css'
import './Fundraise'
import Fundraise from './Fundraise';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000'

const theme = createTheme({
  typography: {
    fontFamily: '"Lato"',
  },
  palette:{
    primary:{
      main:"#57B182"
    },
    error:{
      main:"#FA755A"
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Fundraise />
      </ThemeProvider>
    </div>
  );
}

export default App;
