import { ThemeProvider } from '@emotion/react'

import { THEME } from './theme'
import { Footer } from './section/Footer.tsx'
import { Header } from './section/Header.tsx';
import {RouterProvider,} from "react-router-dom";
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
  background: ${({ theme }) => theme.colors.bg_light};
  overflow-x: hidden !important;
`

const AppMain = styled.main`
`