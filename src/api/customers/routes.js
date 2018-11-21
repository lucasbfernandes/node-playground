import express from 'express';
import { customersController } from './controller';

const customersRouter = express.Router();

customersRouter.get('/', customersController.processGetCustomersRequest);
customersRouter.get('/:customerId', customersController.processGetCustomersByIdRequest);

customersRouter.post('/', customersController.processPostCustomersRequest);

export { customersRouter };
