import express from 'express';

const expressFactory = {
    getExpressInstance: (apiRoot, router) => {
        return express(apiRoot, router);
    }
};

export { expressFactory };
