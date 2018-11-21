import { customersGetService } from './services/get';
import { customersGetSerializer } from './serializers/get';

const customersController = {
    processGetRequest: (req, res) => {
        return customersGetService.getCustomers()
            .then(customers => res.json(customersGetSerializer.serializeGetCustomers(customers)))
            .catch(err => res.json({ error: err.message }));
    }
}

export { customersController };
