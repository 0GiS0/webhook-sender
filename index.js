const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

var server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Webhook sender is listening at https://${server.address().address}:${server.address().port}`);
});