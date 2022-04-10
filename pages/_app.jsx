import React from "react";
import '../style/index.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';



const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  }))

  return (
    <>
    <QueryClientProvider client={queryClient}>
       <Hydrate state={pageProps.dehydratedState}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      </Hydrate>
     </QueryClientProvider>
    </>
  )
  // return <Component {...pageProps} />
}
