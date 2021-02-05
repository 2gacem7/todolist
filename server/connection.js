const mongoose = require('mongoose');
const uri = "mongodb+srv://gacem:gacem@cluster0.a5vvm.mongodb.net/todolist?retryWrites=true&w=majority";

/**
 * @function connectDatabase
 * @description This is an async function that allows you to connect to the database
 */
const connectDatabase = async ()=> {
    try {
        await mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false});
        console.log('MongoDb connected ...');
    } catch(err) {
        console.error(err.message);
        //Exit the process with a failure if it cannot connect to the database
        process.exit(1);
    }
}
module.exports = connectDatabase;
