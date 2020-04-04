const bunyan = require('bunyan')

let log = bunyan.createLogger({
    name: 'api',
    serializers: {
        req: bunyan.stdSerializers.req,
    },
    streams: [
        {
            level: 'debug',
            stream: process.stdout // log INFO and above to stdout
        },
        {
            level: 'info',
             path: __dirname + '/logs/appInfo.log' // log ERROR and above to a file
        }
    ]
});
module.exports = log;