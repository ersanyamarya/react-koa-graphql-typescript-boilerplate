import React, { Fragment, lazy, ReactElement, Suspense } from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/client'

import { Router, RouteComponentProps } from '@reach/router'
import { CssBaseline, ThemeProvider, Typography } from '@material-ui/core'
import theme from './theme'
import { client } from './config'

const Components = lazy(() => import('./pages/components'))
const People = lazy(() => import('./pages/people'))

const RouterPage = (props: { pageComponent: ReactElement } & RouteComponentProps) => props.pageComponent

const NotFound = () => (
  <Fragment>
    <Typography variant="h1"> 404 Not Found</Typography>
  </Fragment>
)

const Application = () => (
  <>
    <Suspense fallback={<h1>loading route …</h1>}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApolloProvider client={client}>
          <Router>
            <RouterPage path="/" pageComponent={<Components />} />
            <RouterPage path="/People" pageComponent={<People />} />
            <RouterPage default pageComponent={<NotFound />} />
          </Router>
        </ApolloProvider>
      </ThemeProvider>
    </Suspense>
  </>
)

render(<Application />, document.getElementById('root'))
