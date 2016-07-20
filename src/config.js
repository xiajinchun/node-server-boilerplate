const devConfig = {
    db: {
        database: 'demo',
        user: 'demo',
        password: 'demo',
        port: 5432,
        max: 10, //set pool max size to 20
        min: 2, //set min pool size to 4
        idleTimeoutMillis: 5000 //close idle clients after 5 second
    }
}

const prodConfig = {
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

export default process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
