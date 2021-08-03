const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
     email: String
     password: String
     role: String
     fullName: String
     company: String
     profileImage: String
     userDescription: String
     sampleProjectName: String
     sampleProjectURL: String
     resumeURL: String
     primaryFocus: String
     skillSet: String
     hourlyRate: Int
     linkedIn: String
     gitHub: String
     servicesOffered: String
  }

  type Auth {
    token: ID!
    user: User
  }
    
  type Query {
    users: [User]
    user(userId: ID!): User
    me: User
  }

  input UserInput {
    email: String
    role: String
    fullName: String
    company: String
    profileImage: String
    userDescription: String
    sampleProjectName: String
    sampleProjectURL: String
    resumeURL: String
    primaryFocus: String
    skillSet: String
    hourlyRate: Int
    linkedIn: String
    gitHub: String
    servicesOffered: String
  }

  type Mutation {
    addUser(
      email: String!
      password: String!
      role: String
      fullName: String
      company: String
    ): Auth
        
    login(email: String!, password:String!): Auth
      
    updateUser(
      userData: UserInput
    ): User
  }
`;

module.exports = typeDefs;
