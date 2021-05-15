import { Button, CircularProgress, Fab, TextField, Typography, Divider } from '@material-ui/core'
import React, { Fragment, ReactElement } from 'react'
import { Navigation } from '@material-ui/icons'
export default function Components(): ReactElement {
  return (
    <Fragment>
      <Typography variant="h1" component="h1">
        Heading 1
      </Typography>
      <Typography variant="h2" component="h2">
        Heading 2
      </Typography>
      <Typography variant="h3" component="h3">
        Heading 3
      </Typography>
      <Typography variant="h4" component="h4">
        Heading 4
      </Typography>
      <Typography variant="h5" component="h5">
        Heading 5
      </Typography>
      <Typography variant="body1" component="p">
        Body 1
      </Typography>
      <Typography variant="body2" component="p">
        Body 2
      </Typography>
      <Typography variant="subtitle1" component="p">
        Subtitle 1
      </Typography>
      <Typography variant="subtitle2" component="p">
        Subtitle 2
      </Typography>
      <Button color="default">Default Button</Button>
      <Button>Primary Button</Button>
      <Button color="secondary">Secondary Button</Button>

      <CircularProgress />
      <CircularProgress color="secondary" />

      <Fab>
        <Navigation />
        Navigate
      </Fab>
      <br />
      <Divider />
      <br />
      <TextField id="outlined-basic" label="inputLabel" />
    </Fragment>
  )
}
