require('dotenv').config();
const Auth0Manager = require('./Auth0Manager');
var fs = require('file-system');

Auth0Manager.init()
    .then(() => Auth0Manager.getClient())
    .then(client => {

        var data = fs.writeFileSync('./client-data.json', JSON.stringify(client), { encoding: 'utf8' });
        console.log(client);
        return client;
    })
    .catch(console.error);