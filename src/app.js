import { expressConfig, expressFactory } from './common/express';
import { serverConfig, projectConfig } from './common/config';
import { mongoConnection, mongoConfig } from './common/mongoose';
import { router } from './api';
import http from 'http';

const connectMongo = (uri, options) => {
    mongoConnection.setUp();
    mongoConnection.connect(uri, options);
};

const startServer = () => {
    const expressInstance = expressFactory.getExpressInstance(expressConfig.apiRoot, router);
    const server = http.createServer(expressInstance);

    server.listen(
        serverConfig.port,
        serverConfig.ip,
        () => console.info(
            'Express server listening on http://%s:%s, in %s mode',
            serverConfig.ip,
            serverConfig.port,
            projectConfig.environment
        )
    );
};

connectMongo(`mongodb://s2m:banana01@localhost/node_playground?authSource=admin`, { useMongoClient: true });
startServer();
