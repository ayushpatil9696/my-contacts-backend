const mongoose = require('mongoose');
//Moongose-object model design schema like contacts or user 
// Helps us communicat with our database like mongoDB (npm i mongoose)

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING); // CONNECTION_STRING is taking from .env file
        console.log(
            "Database connected: ",
            connect.connection.host,
            connect.connection.name
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;