const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000, () => console.log('Webhook is listening on port 3000'));