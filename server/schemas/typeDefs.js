const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Developer {
        _id: ID
        username: String
        email: String
        password: String
        fullName: String
        company: String
        profileImage: String
        userDescription: String
        sampleProjectName: String
        sampleProjectURL: String
        resumeURL: String
        primaryFocus: String
        skillSet: [String]
        hourlyRate: Int
        linkedIn: String
        gitHub: String
        servicesOffered: String
    }

    type Buyer {
        _id: ID
        username: String
        email: String
        password: String
        fullName: String
        company: String
    }

    type Query {
        developers: [Developer]
        buyers: [Buyer]
        developer(developerId: ID!): Developer
        buyer(buyerId: ID!): Buyer
    }

    type Mutation {
        addDeveloper(
            username: String!
            email: String!
            password: String!
            fullName: String
            company: String
        ): Developer
        addBuyer(
            username: String!
            email: String!
            password: String!
            fullName: String
            company: String
        ): Buyer
    }
`;

module.exports = typeDefs;
