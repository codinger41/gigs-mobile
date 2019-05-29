import gql from 'graphql-tag';

export const getGigsQuery = gql`
  query {
    getAllGigs(
      limit: 5,
      offset: 0
    ) {
      gigs {
        id
        contactName
        contactPhone
        price
        location
        hours
        title
        createdAt
        contactEmail
        description
      }
    }
  }
`;
