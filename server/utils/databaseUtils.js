const mongoose = require('mongoose');
const config = require('../../config/config.json');

mongoose.Promise = require('bluebird');

require('../models/incomingRequest');

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {
    useMongoClient: true,
});

mongoose.connection.on('error', (err)=> {
    console.error("Database Connection Error: " + err);
    process.exit(2);
});

mongoose.connection.on('connected', ()=> {
    console.info("Succesfully connected to MongoDB Database");
});

const IncomingRequest = mongoose.model('IncomingRequest');


export function listIncomingRequests() {
    return IncomingRequest.find();
}

export function createIncomingRequest(data) {
    const request = new IncomingRequest({
        date: new Date(),
        type: data.type,
        param1: data.param1,
        param2: data.param2
    });

    return request.save();
}

export function deleteIncomingRequest(id) {
    return IncomingRequest.findById(id).remove();
}