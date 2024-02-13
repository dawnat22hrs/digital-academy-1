import { ThemeProvider } from '@emotion/react'

import { THEME } from './theme'
import { Footer } from './section/Footer.tsx'
import { Header } from './section/Header.tsx';
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";
import styled from "@emotion/styled";

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <AppWrapper>
        <Header />
        <AppMain>
          <RouterProvider router={router} />
        </AppMain>
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  )
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bg_light};
`

const AppMain = styled.main`
  flex-grow: 1;
`