import { gql } from '@apollo/client';

export const QUERY_DEVELOPERS = gql`
  query {
    developers {
      _id
      username
      email
      fullName
      company
      profileImage
      userDescription
      sampleProjectName
      sampleProjectURL
      resumeURL
      primaryFocus
      skillSet
      hourlyRate
      linkedIn
      gitHub
      servicesOffered
    }
  }
`;

export const QUERY_SINGLE_DEVELOPER = gql`
  query getSingleDeveloper($developerId: ID!) {
    developer(developerId: $developerId) {
      _id
      username
      email
      fullName
      company
      profileImage
      userDescription
      sampleProjectName
      sampleProjectURL
      resumeURL
      primaryFocus
      skillSet
      hourlyRate
      linkedIn
      gitHub
      servicesOffered
    }
  }
`;

export const QUERY_BUYERS = gql`
  query {
    buyers {
      username
      email
      fullName
      company
    }
  }
`;

export const QUERY_SINGLE_BUYER = gql`
  query {
    buyer(buyerId: ID) {
      username
      email
      fullName
      company
    }
  }
`;