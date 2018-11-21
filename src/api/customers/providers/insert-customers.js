import { customersModel } from '../model';

const insertCustomersProvider = (customers) => {
    return customersModel.insertMany(customers)
        .then(() => Promise.resolve('Customers were successfully inserted'))
        .catch(() => Promise.reject('There was an error while inserting customers'));
};

export { insertCustomersProvider };
