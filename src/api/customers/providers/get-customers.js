import { customersModel } from "../model";

const getCustomersProvider = () => {
    return customersModel.aggregate([
        {
            $project: {
                _id: false,
                name: '$name',
                address: '$address',
                birthDate: '$birthDate'
            }
        }
    ]);
};

export { getCustomersProvider };
