const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Developer {
    _id: ID
    username: String!
    email: String!
    password: String!
    fullName: String!
    company: String
    userDescription: String
    sampleProjectName: String
    sampleProjectURL: String
    resumeURL: String
    primaryFocus: String
    skillSet: [String]
    hourlyRate: Number
    phoneNumber: String
    servicesOffered: String
  }

  type Buyer {
    _id: ID
    username: String!
    email: String!
    password: String!
    fullName: String!
    company: String
  }

  type Query {
    developers: [Developer]
    buyers: [Buyers]
    developer(developerId: ID!): Developer
    buyer(buyerId: ID!): Buyer
  }

  type Mutation {
    # NEED TO ADD DETAILS FOR addDeveloper
    addDeveloper(): Developer
    addBuyer(username: String!, email: String!, password: String!, fullName: String): Buyer
  }
`;

module.exports = typeDefs;
