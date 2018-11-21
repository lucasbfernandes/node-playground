import { getCustomers, insertCustomers } from './use-cases';

const customersController = {
    processGetCustomersRequest: (req, res) => {
        return getCustomers()
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
