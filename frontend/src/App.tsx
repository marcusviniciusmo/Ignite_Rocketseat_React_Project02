import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { CycleContextProvider } from './contexts/CycleContext';
import { Router } from './components/Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
