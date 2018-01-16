/**
 * Created by Stefano Demurtas on 16/01/2018.
 */

const connect = require('connect');
const serveStatic = require('serve-static');

const port = process.env.PORT || 8080;

connect().use(serveStatic(`${__dirname}/public`)).listen(port, () => {
  console.log(`Server running on ${port}...`);
});
