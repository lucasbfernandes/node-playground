import { getCustomersProvider } from "../providers";

const getSerializedObject = (customer) => {
    return customer;
};

const serializeGetCustomers = (customers) => {
    return customers.map((customer) => getSerializedObject(customer));
};

const getCustomers = () => {
    return getCustomersProvider()
        .then(customers => serializeGetCustomers(customers));
};

export { getCustomers };
