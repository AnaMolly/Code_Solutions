const db = require('../config/connection');
const { Developer, Buyer } = require('../models');
const developerSeeds = require('./developerSeeds.json');
const buyerSeeds = require('./buyerSeeds.json');

db.once('open', async () => {
  try {
    await Developer.deleteMany({});
    await Developer.create(developerSeeds);
    
    await Buyer.deleteMany({});
    await Buyer.create(buyerSeeds);

    console.log('all done!');
    process.exit(0);
    
  } catch (err) {
    throw err;
  }
});