import React from 'react'
import {
  renderToString,
  renderToStaticMarkup
} from 'react-dom/server'
/** styles */
import { ServerStyleSheet } from 'styled-components'
/** layout */
import Html from '../views/Html'

export default async ( req, res ) => {
  console.log('< DASHBOARD PAGE CONTROLLER >')
  /* We are ready to render for real */
  const content = renderToString(res.App)
  /* prepare style on server */
  const sheet = new ServerStyleSheet()
  const styleTags = sheet.getStyleTags()

  const initialState = res.apolloClient.extract()

  const html = <Html
                styles={styleTags}
                content={content}
                state={initialState}
              />

  // Render page
  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0')
  res.status(200)
  res.send(`<!DOCTYPE html>\n${renderToStaticMarkup(html)}`)
  res.end()

}