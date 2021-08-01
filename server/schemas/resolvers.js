const { AuthenticationError } = require('apollo-server-express');

// TO DO: What is argsToArgsCong? 
const { argsToArgsConfig } = require("graphql/type/definition");

const { Developer, Buyer } = require("../models/");
const { signToken } = require('../utils/auth');

const resolvers = {

	Query: {
		developers: async () => {
			return await Developer.find();
		},

		developer: async (parent, { developerId }) => {
			return await Developer.findOne({ _id: developerId });
		},

		buyers: async () => {
			return await Buyer.find();
		},

		buyer: async (parent, { buyerId }) => {
			return await Buyer.findOne({ _id: buyerId });
		},
	},

	Mutation: {
		addDeveloper: async (
			parent,
			{ username, email, password, fullName, company }
		) => {
      const developer = await Developer.create({ username, email, password, fullName, company });
      const token = signToken(developer);

			return { token, developer};
		},
    loginDeveloper: async (parent, { email, password }) => {
      const developer = await Developer.findOne({ email });

      if (!developer) {
        throw new AuthenticationError('No developer with this email found!');
      }

      const correctPw = await developer.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(developer);
      return { token, developer };
    },

		addBuyer: async (
			parent,
			{ username, email, password, fullName, company }
		) => {
      const buyer = await Buyer.create({ username, email, password, fullName, company });
      const token = signToken(buyer);

			return { token, buyer};
		},

    loginBuyer: async (parent, { email, password }) => {
      const buyer = await Buyer.findOne({ email });

      if (!buyer) {
        throw new AuthenticationError('No buyer with this email found!');
      }

      const correctPw = await buyer.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(buyer);
      return { token, buyer };
    },

    updateDeveloper: async (
      parent, {developerId,developerData}
    ) => {
      console.log(developerData)
      // if(username || email || fullName || profileImage || userDescription || sampleProjectName || sampleProjectURL || resumeURL || primaryFocus || skillSet || hourlyRate || linkedIn || gitHub || servicesOffered) {
        return await Developer.findByIdAndUpdate(developerId ,{$set:developerData}, {new: true})
      
    }
	},
};

module.exports = resolvers;
