const common = {
    port: process.env.PORT || 8080
}

const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`).default;

export default Object.assign({}, common, config);
