import express from 'express';
import { customersController } from './controller';

const customersRouter = express.Router();

customersRouter.get('/', customersController.processGetCustomersRequest);

customersRouter.post('/', customersController.processPostCustomersRequest);

export { customersRouter };
