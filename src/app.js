import { expressConfig, expressFactory } from './common/config/express';
import { serverConfig, projectConfig } from './common/config/project';
import { mongoConnection } from './common/config/mongoose';
import { awsProvider } from "./common/providers";
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

const onGetMongoCredentialsSuccess = (secret) => {
    const { username, password, host, database } = secret;
    connectMongo(`mongodb://${username}:${password}@${host}/${database}?authSource=admin`, { useMongoClient: true });
    startServer();
};

const onGetMongoCredentialsError = (error) => {
    console.info(`There was an error fetching mongo credentials: ${error}`);
};

awsProvider.getAwsSecret('mongo_local')
    .then(secret => onGetMongoCredentialsSuccess(secret))
    .catch(error => onGetMongoCredentialsError(error));
