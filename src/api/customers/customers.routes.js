import express from 'express';
import { customersController } from './customers.controller';

const customersRouter = express.Router();

customersRouter.get('/', customersController.processGetRequest);

export { customersRouter };
