const serverless = require('serverless-http');
const server = require('./app');
const handler = serverless(server);



module.exports.handler = async (event, context) => {
    
console.log("in Index");
 return await handler(event, context);

};
