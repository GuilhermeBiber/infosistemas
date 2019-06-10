// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './mydb.sqlite3'
    },
    useNullAsDefault: true
  },
};
