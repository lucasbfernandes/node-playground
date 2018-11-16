import { Router } from 'express';
import { customersRouter } from './customers';

const router = new Router();

router.use('customers', customersRouter);

export { router };
