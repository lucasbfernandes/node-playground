import { getCustomersQuery } from "../providers";

const getSerializedObject = (customer) => {
    return {
        name: customer.name ? customer.name : ''
    };
};

const serializeGetCustomers = (customers) => {
    return customers.map((customer) => getSerializedObject(customer));
};

const getCustomers = () => {
    return getCustomersQuery()
        .then(customers => serializeGetCustomers(customers));
};

export { getCustomers };
