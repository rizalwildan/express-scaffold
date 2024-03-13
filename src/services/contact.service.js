const Contact =  require('../models/contact.model');

const create = async (data) => {
  return Contact.create(data);
};

module.exports = {
  create
};