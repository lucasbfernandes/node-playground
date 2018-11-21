import express from 'express';
import bodyParser from 'body-parser';

const expressFactory = {
    getExpressInstance: (apiRoot, router) => {
        const instance = express();
        instance.use(bodyParser.json())
        instance.use(apiRoot, router);
        return instance;
    }
};

export { expressFactory };
