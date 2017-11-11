const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const IncomingRequestSchema = new Schema({
    type     : {type: String},
    param1      : { type: String },
    param2     : { type: String },
    date : { type: Date }
}, {versionKey: false});

const IncomingRequest = mongoose.model('IncomingRequest', IncomingRequestSchema);