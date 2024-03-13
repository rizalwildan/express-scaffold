const moment = require('moment-timezone');

class UserDto {
  id;
  name;
  email;
  username;
  created_at;
  updated_at;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.username = data.username;
    this.created_at = moment.tz(data.created_at, 'YYYY-MM-DD HH:mm:ss', 'Asia/Jakarta').format();
    this.updated_at = data.updated_at;
  }
}

module.exports = UserDto;