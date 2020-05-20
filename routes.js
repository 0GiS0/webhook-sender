const { Router } = require('express');
const Base = require('./controllers/WebHookController');

const routes = Router();

routes.post('/emitevent', Base.emitEvent);
routes.post('/subscribe', Base.subscribe);
routes.post('/unsubscribe', Base.subscribe);

module.exports = routes;