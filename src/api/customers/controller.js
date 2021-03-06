import { getCustomers, getCustomersById, insertCustomers } from './use-cases';

const customersController = {
    processGetCustomersRequest: (req, res) => {
        return getCustomers()
            .then(customers => res.json(customers))
            .catch(error => res.json({ error }));
    },

    processGetCustomersByIdRequest: (req, res) => {
        const { customerId } = req.params;
        return getCustomersById(customerId)
            .then(customers => res.json(customers))
            .catch(error => res.json({ error }));
    },

    processPostCustomersRequest: (req, res) => {
        const customers  = req.body;
        return insertCustomers(customers)
            .then(message => res.json({ message }))
            .catch(error => res.json({ error }));
    }
};

export { customersController };
