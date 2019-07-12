import { insertCustomersProvider } from "../providers";

const validateCustomers = (customers) => {
    return !!customers;
};

const insertCustomers = (customers) => {
    return validateCustomers(customers) ? insertCustomersProvider(customers) : Promise.reject('Invalid customers');
};

export { insertCustomers };
