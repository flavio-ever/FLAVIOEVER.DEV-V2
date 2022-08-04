import { gql } from 'graphql-request'

export const GET_AUTHOR = gql`
  query getAuthor($first: Int) {
    authors(first: $first) {
      id
      title
      bio {
        html
      }
    }
  }
`
