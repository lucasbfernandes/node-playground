import mongoose, { Schema } from 'mongoose';

const customersSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    creationDate: {type: Date, required: true}
}, {autoIndex: false});


const customersModel = mongoose.model('customers', customersSchema);

export { customersModel };
