import { customersModel } from '../customers.model';

const getCustomersQuery = () => {
    return customersModel.find({});
};

const customersGetService = {
    getCustomers: () => {
        return getCustomersQuery();
    }
};

export { customersGetService };
