import { getCustomersProvider } from "../providers";

const getSerializedObject = (customer) => {
    return customer;
};

const serializeData = (customers) => {
    return customers.map((customer) => getSerializedObject(customer));
};

const getCustomersById = (customerId) => {
    return getCustomersProvider(customerId)
        .then(customers => serializeData(customers));
};

export { getCustomersById };
