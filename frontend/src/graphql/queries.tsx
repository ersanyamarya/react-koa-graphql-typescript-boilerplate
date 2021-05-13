import gql from 'graphql-tag'

const Person = gql`
  query GetPeople {
    personMany(sort: EMAIL_DESC) {
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
