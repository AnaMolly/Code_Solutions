const { Developer, Buyer} = require('../models/')

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
    addDeveloper: async (parent, { username, email, password, fullName, company }) => {
      return await Developer.create({username, email, password, fullName, company });
    },
    
    addBuyer: async (parent, { username, email, password, fullName, company }) => {
      return await Buyer.create({ username, email, password, fullName, company });
      },
    }
};
  
module.exports = resolvers;
  