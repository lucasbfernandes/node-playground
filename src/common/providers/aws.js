import AWS from 'aws-sdk';

const client = new AWS.SecretsManager({
    region: 'sa-east-1'
});

const getAwsSecretCallback = (secretName) => {
    return (resolve, reject) => {
        client.getSecretValue({ SecretId: secretName }, async (err, data) => {
            if (err) {
                reject(err);
            } else {
                if ('SecretString' in data) {
                    return resolve(JSON.parse(data.SecretString));
                } else {
                    let buff = new Buffer(data.SecretBinary, 'base64');
                    return resolve(buff.toString('ascii'));
                }
            }
        });
    };
};

const awsProvider = {
    getAwsSecret: (secretName) => {
        try {
            return new Promise(getAwsSecretCallback(secretName))
        } catch (error) {
            return Promise.reject({ error });
        }
    }
};

export { awsProvider };
