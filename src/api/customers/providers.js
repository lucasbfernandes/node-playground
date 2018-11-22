import { customersModel } from "./model";
import mongoose from 'mongoose';

const getCustomersQuery = (customerId) => {
    return [
        {
            $match: {
                ...(customerId && { _id: mongoose.Types.ObjectId(customerId) })
            }
        },
        {
            $project: {
                _id: false,
                name: '$name',
                address: '$address',
                birthDate: '$birthDate'
            }
        }
    ];
};

const insertCustomersProvider = (customers) => {
    return customersModel.insertMany(customers)
        .then(() => Promise.resolve('Customers were successfully inserted'))
        .catch(() => Promise.reject('There was an error while inserting customers'));
};

const getCustomersProvider = (customerId) => {
    const query = getCustomersQuery(customerId);
    return customersModel.aggregate(query);
};

export { getCustomersProvider, insertCustomersProvider };
