import gql from 'graphql-tag'

const Person = gql`
  query GetPeople {
    personMany {
      _id
      lastName
      firstName
      email
      updatedAt
      createdAt
    }
  }
`

export { Person }
