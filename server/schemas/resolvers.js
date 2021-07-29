const { Developer, Buyer} = require('../models/')

const resolvers = {
    Query: {
      developers: async () => {
        return Developer.find();
      },
  
      developer: async (parent, { developerId }) => {
        return Developer.findOne({ _id: developerId });
      },
      
      buyers: async () => {
        return Buyer.find();
      },
  
      buyer: async (parent, { buyerId }) => {
        return Buyer.findOne({ _id: buyerId });
      },
    },

    Mutation: {
    addDeveloper: async (parent, { username, email, password, fullName, company }) => {
      return Developer.create({username, email, password, fullName, company });
    },
    
    addBuyer: async (parent, { username, email, password, fullName, company }) => {
      return Buyer.create({ username, email, password, fullName, company });
      },
    }
};
  
module.exports = resolvers;
  