const { AuthenticationError } = require('apollo-server-express');
const { User } = require("../models/");
const { signToken } = require('../utils/auth');

const resolvers = {

	Query: {
		users: async () => {
			return await User.find();
		},

		user: async (parent, { userId }) => {
			return await User.findOne({ _id: userId });
		}
	},

	Mutation: {
		addUser: async (
			parent,
			{ email, password, role, fullName, company }
		) => {
      const user = await User.create({ email, password, role, fullName, company });
      const token = signToken(user);

			return { token, user };
		},
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (
      parent, {userId, userData}
    ) => {
      console.log(userData)
      // if(username || email || fullName || profileImage || userDescription || sampleProjectName || sampleProjectURL || resumeURL || primaryFocus || skillSet || hourlyRate || linkedIn || gitHub || servicesOffered) {
      return await User.findByIdAndUpdate(userId ,{$set:userData}, {new: true})
    }
	},
};

module.exports = resolvers;