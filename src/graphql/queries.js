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
    $contactPhone: String!,
    $category: String!
  ) {
    createGig(
      title: $title,
      contactName: $contactName,
      contactEmail: $contactEmail,
      contactPhone: $contactPhone,
      price: $price,
      description: $description,
      location: $location,
      category: $category
    ) {
      gig {
        title
        location
        category
        contactName
        contactPhone
        description
        price
      }
    }
  }
`;