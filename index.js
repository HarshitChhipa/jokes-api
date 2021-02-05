const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleWare = jsonServer.defaults();

server.use(middleWare)
server.use(router)

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server is up and running at ${process.env.PORT || 3000}`)
});
