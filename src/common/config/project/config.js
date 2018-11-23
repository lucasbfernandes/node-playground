const serverConfig = {
    ip: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 9000
};

const projectConfig = {
    environment: 'TODO'
};

export { serverConfig, projectConfig };
