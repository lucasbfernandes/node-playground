import { customersModel } from "../model";
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

const getCustomersProvider = (customerId) => {
    const query = getCustomersQuery(customerId);
    return customersModel.aggregate(query);
};

export { getCustomersProvider };
