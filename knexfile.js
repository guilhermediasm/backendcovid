// Update with your config settings.

module.exports = {

    client: 'pg',
    version: '12',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'root',
        database: 'covid'
    },
    migrations: {
        directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
    acquireConnectionTimeout: 10000

};
