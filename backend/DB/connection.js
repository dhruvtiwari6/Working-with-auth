const mongoose = require('mongoose')

const connectDb  = async() => {
    try {

        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/auth0_database`);
        console.log('connnection is established ...');
    } catch (error) {
        console.log('error in establishing a connection with mongodb');
    }
}

module.exports = {connectDb}