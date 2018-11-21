import { getCustomersQuery } from '../queries/get';

const customersGetService = {
    getCustomers: () => {
        return getCustomersQuery();
    }
};

export { customersGetService };
