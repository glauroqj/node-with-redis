import React from 'react'
import { hydrate, render } from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'
import { BrowserRouter } from 'react-router-dom'
// import { createHttpLink } from 'apollo-link-http'
// import fetch from 'node-fetch'
/** apollo */
import { ApolloProvider } from '@apollo/react-common'
/** layout */
import Layout from '../routes/Layout'
/** style */
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { GlobalStyle, Theme } from 'assets/style'
/** provider */
import { SessionProvider } from 'providers/Session'
import { LanguageProvider } from 'providers/Language'

const client = new ApolloClient({
  link: new RestLink({
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8'
    },
    credentials: 'same-origin',
    uri: `${process.env.API_URL}`,
  }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  // link: createHttpLink({
  //   // uri: `${process.env.BASE_URL}`,
  //   credentials: 'same-origin',
  //   // headers: {
  //   //   authorization: `${process.env.AUTH}`,
  //   // },
  //   fetch: fetch
  // }),
  ssrForceFetchDelay: 100
})

const userSession = JSON.parse(client?.cache?.data?.data?.session?.payload || '{"token":false,"refreshToken":false,"userName":false,"userEmail":false,"userID":false}')

const rootElement = document.getElementById('root')

console.log('< ROOT ELEMENT > ', rootElement, rootElement.hasChildNodes)

const appTree = (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Reset />

        <SessionProvider session={userSession}>
          <LanguageProvider>
            <Layout />
          </LanguageProvider>
        </SessionProvider>

      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
)

if (rootElement.hasChildNodes) {
  hydrate(appTree, rootElement)
} else {
  render(appTree, rootElement)
}