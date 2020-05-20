const { Router } = require('express');
const Base = require('./controllers/BaseController');

const routes = Router();

routes.post('/eventHandler', Base.emitEvent);
routes.post('/subscribe', Base.subscribe);
routes.post('/unsubscribe', Base.subscribe);

module.exports = routes;