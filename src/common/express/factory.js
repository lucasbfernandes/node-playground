import express from 'express';

const expressFactory = {
    getExpressInstance: (apiRoot, router) => {
        const instance = express();
        instance.use(apiRoot, router);
        return instance;
    }
};

export { expressFactory };
