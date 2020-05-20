const WebHooks = require('node-webhooks');

//Initialize webhooks module from on-disk databse
var webHooks = new WebHooks({
    db: './webHooksDB.json', //json file that store webhook URLs
    httpSuccessCodes: [200, 201, 202, 203, 204] //optional success http status code
});

var emitter = webHooks.getEmitter();

emitter.on('*.success', function (shortname, statusCode, body) {
    console.log('Success on trigger webHook ' + shortname + ' with status code', statusCode, 'and body', body)
});

emitter.on('*.failure', function (shortname, statusCode, body) {
    console.error('Error on trigger webHook ' + shortname + ' with status code', statusCode, 'and body', body)
});


module.exports = {

    async emitEvent(request, response) {
        console.log(request.body);
        webHooks.trigger('shortname1', request.body);
        return response.send('event sent');
    },

    subscribe(request, response) {
        console.log(request.body);
        webHooks.add('shortname1', request.body.url).then(function () {
            return response.status(200).send('ok');
        }).catch(function (err) {
            console.log(err);
            return response.status(500).send('error');
        });
    },

    unsubscribe(request, response) {
        console.log(request.body);
        webHooks.remove('shortname1', request.body.url).then(function () {
            return response.status(200).send('ok');
        }).catch(function (err) {
            console.log(err);
            return response.status(500).send('error');
        });
    }
}