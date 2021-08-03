import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        role
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation {
    addUser(email: $email, password: $password, role: $role, fullName: $fullName, company: $company) {
      token
      user {
        _id
        email
        role
        fullName
        company
      }
    }
  }
`;

export const UPDATE_USER = gql`
mutation updateUser($userData: UserInput) {
  updateUser(userData:$userData) {
    email
    role
    fullName
    company
  } 
}
`;