import Promise from 'bluebird';
import mongoose from 'mongoose';

const mongoConnection = {
    setUp: () => {
        mongoose.Promise = Promise;
        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error: ', err)
            process.exit(-1)
        })
    },

    connect: (uri, options) => {
        return mongoose.connect(uri, options);
    }
};

export { mongoConnection };
