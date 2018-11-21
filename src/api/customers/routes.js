import express from 'express';
import { customersController } from './controller';

const customersRouter = express.Router();

customersRouter.get('/', customersController.processGetCustomersRequest);

export { customersRouter };
