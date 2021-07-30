const { argsToArgsConfig } = require("graphql/type/definition");
const { Developer, Buyer } = require("../models/");

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
			return await Developer.create({ username, email, password, fullName, company });
		},

		addBuyer: async (
			parent,
			{ username, email, password, fullName, company }
		) => {
			return await Buyer.create({ username, email, password, fullName, company });
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
