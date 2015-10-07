"use strict";

module.exports = function () {
  return {
    "database": process.env.MYSQL_DATABASE_NAME,
    "username": process.env.MYSQL_USERNAME,
    "password": process.env.MYSQL_PASSWORD,
    "options": {
      "host": process.env.MYSQL_HOST,
      "port": process.env.MYSQL_PORT,
      "dialect": "mysql"
    }
  };
};