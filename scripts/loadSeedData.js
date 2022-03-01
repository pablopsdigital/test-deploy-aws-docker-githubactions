'use strict';

// Conection database
const dbConnection = require('../services/connectionBD_Mongo');

//Import models
const advertisementModel = require('../models/Advertisement');
const userModel = require('../models/user');

//Import data
const advertisementSeedData = require('./seedData/advertisementSeedData');
const userSeedData = require('./seedData/usersAdminSeedData');

main().catch((err) => console.log('There was an error', err));

async function main() {
  await initUsers();
  await initAdvertisement();
  dbConnection.close();
}

//================================================================
//Create mock users in database
//================================================================
async function initUsers() {
  // Delete possible users
  const deletedUsers = await userModel.deleteMany();
  console.log(`Deleted ${deletedUsers.deletedCount} users.`);

  // Create mockData users
  const users = await userModel.insertMany(userSeedData.users);

  // Create mockData users
  console.log(`Create ${users.length} users.`);
}

//================================================================
//Create mock advertisements in database
//================================================================
async function initAdvertisement() {
  // Delete possible advertisements
  const deletedAdvertisements = await advertisementModel.deleteMany();
  console.log(`Deleted ${deletedAdvertisements.deletedCount} advertisements.`);

  //Search user id for asociate advertisement with user admin
  const userAdmin = await userModel.findOne({email: 'admin@wallaclone.com'});

  //Asociate advertisement with user hosted id
  const advertisementsWithAuthor = advertisementSeedData.advertisements.map((advertisement) => {
    advertisement.author = userAdmin._id;
    return advertisement;
  });

  // Create mockData advertisements
  const advertisementsInsert = await advertisementModel.insertMany(advertisementsWithAuthor);
  console.log(`Create ${advertisementsInsert.length} advertisements.`);
}
