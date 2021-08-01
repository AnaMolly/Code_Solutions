import { gql } from '@apollo/client';

export const ADD_DEVELOPER = gql`
  mutation {
    addDeveloper(username: $username, email: $email, password: $password, fullName: $fullName) {
      _id
      username
      email
      password
      fullName
    }
  }
`;

export const ADD_BUYER = gql`
  mutation {
    addBuyer(username: $username, email: $email, password: $password, fullName: $fullName) {
      _id
      username
      email
      password
      fullName
    }
  }
`;

export const UPDATE_DEVELOPER = gql`
mutation updateDeveloper($developerId: ID!, $developerData: DeveloperInput) {
  updateDeveloper(developerId:$developerId,developerData:$developerData) {
    username
    email
    company
    resumeURL
  } 
}
`