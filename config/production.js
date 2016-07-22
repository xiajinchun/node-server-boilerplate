export default {
    db: {
        database: 'demo',
        user: 'demo',
        password: 'demo',
        port: 5432,
        max: 15, //set pool max size to 20
        min: 5, //set min pool size to 4
        idleTimeoutMillis: 15000 //close idle clients after 15 second
    }
}
