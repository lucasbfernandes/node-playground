import { getCustomers } from './use-cases';

const customersController = {
    processGetCustomersRequest: (req, res) => {
        return getCustomers()
            .then(customers => res.json(customers))
            .catch(error => res.json({ error }));
    }
};

export { customersController };
