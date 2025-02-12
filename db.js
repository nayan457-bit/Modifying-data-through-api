const {connect} = require('mongoose');

const connectDB = async (url) => {
    try {
        await connect(url)
        console.log('Connected to DataBase');
        }
    catch (error) {
        console.error('Error connecting to DataBase');
        console.error(error);
    } 
}
module.exports = { connectDB };