const { teardown } = require('./globalTeardown')

module.exports = async () => {
  await teardown();
};