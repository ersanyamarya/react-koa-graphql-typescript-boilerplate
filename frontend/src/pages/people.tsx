import { Typography, Divider } from '@material-ui/core'
import React, { Fragment, ReactElement } from 'react'
import { useQuery } from '@apollo/client'
import { GetPeople } from '../graphql/GetPeople'
import { Person } from '../graphql/queries'
export default function People(): ReactElement {
  const { data, loading, error } = useQuery<GetPeople>(Person)

  if (loading || !data) return <div className="spin"></div>

  if (error) return <Typography variant="h1"></Typography>
  return (
    <Fragment>
      {data.personMany.map(one => (
        <Fragment key={one.email}>
          <Typography variant="h1">Full Name: {`${one.firstName} ${one.lastName}`}</Typography>
          <Typography variant="h2">Email: {one.email}</Typography>
          <Divider />
          <br />
        </Fragment>
      ))}
    </Fragment>
  )
}
