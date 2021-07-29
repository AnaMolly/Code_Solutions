const Developer = require('../models/Developer');

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
      // NEED TO FILL IN {} or just 'args'
      addDeveloper: async (parent, { }) => {
        return Developer.create({ });
      },
      // Check values in {}
      addBuyer: async (parent, { }) => {
        return Buyer.create({ username, email, password, fullName });
      },
    }
  
  
};
  
module.exports = resolvers;
  