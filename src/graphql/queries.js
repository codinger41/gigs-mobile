import gql from 'graphql-tag';

export const getGigsQuery = gql`
  query getGigsMutation ($location: String!) {
    getAllGigs (location: $location) {
      gigs {
        id
        contactName
        contactPhone
        price
        location
        title
        createdAt
        contactEmail
        description
      }
    }
  }
`;


export const createGig = gql`
  mutation createGigMutation (
    $title: String!,
    $contactName: String!,
    $description: String!,
    $location: String!,
    $price: String!,
    $contactEmail: String!,
    $contactPhone: String!
  ) {
    createGig(
      title: $title,
      contactName: $contactName,
      contactEmail: $contactEmail,
      contactPhone: $contactPhone,
      price: $price,
      description: $description,
      location: $location
    ) {
      gig {
        title
        location
        contactName
        contactPhone
        description
        price
      }
    }
  }
`;