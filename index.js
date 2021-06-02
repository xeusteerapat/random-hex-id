const randomHexId = () => {
  let id = '';

  for (let i = 0; i < 4; i++) {
    const crypto = require('crypto');
    const randomB64String = crypto.randomBytes(4).toString('hex');
    id += `${randomB64String}-`;
  }

  return id.slice(0, -1);
};

module.exports = randomHexId;
