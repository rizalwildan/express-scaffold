const User = require('../models/user.model');
const PaginationResponseDto = require('../dto/pagination-response.dto');
const UserDto = require('../dto/user.dto');

const findAll = async (query) => {
  const { count, rows} = await User.findAndCountAll({
    attributes: ['id', 'name', 'username', 'email', 'created_at'],
    limit: query.limit,
    offset: query.offset
  });

  const users = rows.map((user) => new UserDto(user));

  return new PaginationResponseDto(query.page, query.limit, count, users);
};

const detail = async (userId) => {
  const user = await User.findOne({
    where: {
      id: userId
    },
    attributes: ['id', 'name', 'username', 'email', 'created_at']
  });

  return new UserDto(user);
};

const create = async (data) => {
  return User.create(data);
};

const update = async (userId, data) => {
  return User.update(data, {
    where: {
      id: userId
    }
  });
};

module.exports = {
  findAll,
  create,
  detail,
  update
};
