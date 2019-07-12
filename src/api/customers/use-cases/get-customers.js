import { getCustomersProvider } from "../providers";

const getSerializedObject = (customer) => {
    return customer;
};

const serializeData = (customers) => {
    return customers.map((customer) => getSerializedObject(customer));
};

const getCustomers = () => {
    return getCustomersProvider()
        .then(customers => serializeData(customers));
};

export { getCustomers };
