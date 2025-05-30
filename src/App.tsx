import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { CartContextProvider } from "./contexts/CartContext"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ToastContainer />
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
