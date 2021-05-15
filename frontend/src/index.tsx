import React, { lazy, ReactElement, Suspense } from 'react'

import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/client'

import { Router, RouteComponentProps } from '@reach/router'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from './theme'
import client from './graphql/apollo'
import './main.css'
const Components = lazy(() => import('./pages/components'))
const People = lazy(() => import('./pages/people'))
const NotFound = lazy(() => import('./pages/404'))

const RouterPage = (props: { pageComponent: ReactElement } & RouteComponentProps) => props.pageComponent
import './main.css'
const Application = () => (
  <Suspense fallback={<div className="spin"></div>}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <Router>
          <RouterPage path="/" pageComponent={<Components />} />
          <RouterPage path="/people" pageComponent={<People />} />
          <RouterPage default pageComponent={<NotFound />} />
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  </Suspense>
)

render(<Application />, document.getElementById('root'))
