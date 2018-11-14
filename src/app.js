import { expressConfig, expressFactory } from './common/express';
import { serverConfig, projectConfig } from './common/config';
import { router } from './api';
import http from 'http';

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
