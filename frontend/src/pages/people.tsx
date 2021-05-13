import { Button, CircularProgress, Fab, TextField, Typography, Divider } from '@material-ui/core'
import React, { Fragment, ReactElement } from 'react'
import { useQuery } from '@apollo/client'
import { GetPeople } from '../graphql/GetPeople'
import { Person } from '~/graphql/queries'
export default function People(): ReactElement {
  const { data, loading, error } = useQuery<GetPeople>(Person)

  if (loading || !data) return <CircularProgress />

  if (error) return <Typography variant="h1"></Typography>
  return (
    <Fragment>
      {data.personMany.map(one => (
        <Fragment key={one.email}>
          <Typography variant="h1">{`${one.firstName} ${one.lastName}`}</Typography>
          <Typography variant="h2">{one.email}</Typography>
          <Divider />
          <br />
        </Fragment>
      ))}
    </Fragment>
  )
}
