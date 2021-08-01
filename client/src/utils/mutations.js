import { gql } from '@apollo/client';

export const LOGIN_DEVELOPER = gql`
  mutation {
    loginDeveloper(username: $username, password: $password) {
      token
      developer {
        _id
        username
      }
    }
  }
`;

export const LOGIN_BUYER = gql`
  mutation {
    loginBuyer(username: $username, password: $password) {
      token
      buyer {
        _id
        username
      }
    }
  }
`;

export const ADD_DEVELOPER = gql`
  mutation {
    addDeveloper(username: $username, email: $email, password: $password, fullName: $fullName) {
      token
      developer {
        _id
        username
        email
        password
        fullName
      }
    }
  }
`;

export const ADD_BUYER = gql`
  mutation {
    addBuyer(username: $username, email: $email, password: $password, fullName: $fullName) {
      token
      buyer {
        _id
        username
        email
        password
        fullName
      }
    }
  }
`;

export const UPDATE_DEVELOPER = gql`
  mutation {
    updateDeveloper(developerId:$developerId,developerData:$developerData){
      username
      email
      company
      resumeURL
    }
  }
`;