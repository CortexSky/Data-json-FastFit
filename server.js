const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json')
const middlawares = jsonServer.defaults();
const port  = process.env.PORT || 3000;

server.use(middlawares);
server.use(router);
server.listen(port);
