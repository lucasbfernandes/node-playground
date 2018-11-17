import { customersGetService } from './services/customers.get';
import { customersGetSerializer } from './serializers/customers.get';

const customersController = {
    processGetRequest: (req, res) => {
        return customersGetService.getCustomers()
            .then(customers => res.json(customersGetSerializer.serializeGetCustomers(customers)))
            .catch(err => res.json({ error: err.message }));
    }
}

export { customersController };
