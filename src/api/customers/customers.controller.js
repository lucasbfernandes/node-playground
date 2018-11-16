import { customersService } from './customers.service';

const customersController = {
    processGetRequest: (req, res) => {
        return res.json({ status: 'ok' });
    }
}

export { customersController };
