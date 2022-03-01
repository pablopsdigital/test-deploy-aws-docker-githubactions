'use strict';

//Import modules
const faker = require('faker/locale/es');
const fs = require('fs');
var util = require('util');

//Import models
const AdvertisementModel = require('../models/Advertisement.js');
const UserModel = require('../models/User.js');

//Execute general function script
seedLoadData().catch((err) => console.log('There was an error', err));

async function seedLoadData() {
  await generateSeedUsersData();
  await createSeedAdvertisementData();
}

//================================================================
//Create mock users in database
//================================================================
async function generateSeedUsersData() {
  console.log('Success: Users control role create manual in UsersAdminSeedData file.');
  // console.log('Success: users seed data file generated in seedData directory.');
}

//================================================================
//Create mock experiences in database
//================================================================
async function createSeedAdvertisementData() {
  var advertisement = [];

  for (let id = 1; id <= 100; id++) {
    advertisement.push({
      name: faker.commerce.unique().productName(),
      description: faker.lorem.paragraph(),
      featuredImage: faker.image.imageUrl(),
      galleryImgs: [
        faker.image.sports(1500, 1500),
        faker.image.sports(1500, 1500),
        faker.image.sports(1500, 1500),
        faker.image.sports(1500, 1500)
      ]
    });
  }

  fs.writeFileSync(
    './scripts/seedData/advertisementSeedData.js',
    `const data = { advertisements: 
      ${util.inspect(advertisement)}
    }; module.exports=data;`,
    'utf-8'
  );

  console.log('Success: advertisements seed data file generated in seedData directory.');
}
