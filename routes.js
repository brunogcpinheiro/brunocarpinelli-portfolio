const routes = require('next-routes');

module.exports = routes()
  .add('/', 'index')
  .add('/about', 'about');
