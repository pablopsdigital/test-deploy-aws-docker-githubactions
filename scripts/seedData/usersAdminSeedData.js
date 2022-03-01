const bcrypt = require('bcryptjs');

const data = {
  users: [
    {
      name: 'WallacloneAdmin',
      email: 'admin@wallaclone.com',
      password: bcrypt.hashSync('123456'),
      imageAvatar: 'https://i.pravatar.cc/500',
      isAdmin: true
    },
    {
      name: 'WallacloneAdvertiser',
      email: 'advertiser@wallaclone.com',
      password: bcrypt.hashSync('123456'),
      imageAvatar: 'https://i.pravatar.cc/500',
      isAdmin: true
    },
    {
      name: 'WallacloneUser',
      email: 'user@wallaclone.com',
      password: bcrypt.hashSync('123456'),
      imageAvatar: 'https://i.pravatar.cc/500',
      isAdmin: true
    }
  ]
};
module.exports = data;
