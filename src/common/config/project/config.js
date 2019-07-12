const serverConfig = {
    ip: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 9000
};

const projectConfig = {
    environment: process.env.NODE_ENV
};

export { serverConfig, projectConfig };
