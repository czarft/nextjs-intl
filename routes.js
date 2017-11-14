const routes = (module.exports = require('next-routes')())

// API
// routes.add(routeName, pattern = /routeName, path = routeName)

routes.add('home', '/', 'index').add('about', '/about')
