const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    BASE_URL: process.env.API,
    API_KEY:process.env.API_KEY,
    port: process.env.PORT || 3001,
};