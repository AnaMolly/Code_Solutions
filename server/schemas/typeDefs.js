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

    type AuthDeveloper {
      token: ID!
      developer: Developer
    }
    
    type AuthBuyer {
      token: ID!
      buyer: Buyer
    }

    type Query {
      developers: [Developer]
      buyers: [Buyer]
      developer(developerId: ID!): Developer
      buyer(buyerId: ID!): Buyer
    }

    input DeveloperInput {
            username: String
            email: String
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

    type Mutation {
      addDeveloper(
            username: String!
            email: String!
            password: String!
            fullName: String
            company: String
        ): AuthDeveloper
        # TO DO: Likely need to create login mutation for buyer Auth type once created
        login(email: String!, password:String!): AuthDeveloper

        addBuyer(
            username: String!
            email: String!
            password: String!
            fullName: String
            company: String
        ): AuthBuyer
      
        updateDeveloper(
            developerId: ID!
            developerData:DeveloperInput
        ): Developer
    }
`;

module.exports = typeDefs;
