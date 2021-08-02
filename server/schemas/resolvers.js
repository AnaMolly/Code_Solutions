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
		},
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
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
      parent, args
    ) => {
      console.log("success")
      console.log(args)
      // if(username || email || fullName || profileImage || userDescription || sampleProjectName || sampleProjectURL || resumeURL || primaryFocus || skillSet || hourlyRate || linkedIn || gitHub || servicesOffered) {
      return await User.findByIdAndUpdate(args.userId ,{$set:args.userData}, {new: true})
    }
	},
};

module.exports = resolvers;