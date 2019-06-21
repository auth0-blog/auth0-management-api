require('dotenv').config();
const express = require('express');
const Auth0Manager = require('./Auth0Manager');
const app = express();

/**
 * Main get route to show the information for the client
 * Which client is determined by your .env file
 * Maybe we can grab client_id from a url parameter in the future?
 */
app.get('/', (req, res) => {
    Auth0Manager.init()
        .then(() => Auth0Manager.getClient())
        .then(client => res.json(client))
        .catch(err => res.json({ message: 'There was an error!', ...err }));
});

/**
 * A sample update to change out some information on the client
 * In this example, we will update the name to have a random number
 */
app.get('/update', (req, res) => {
    const random = Math.floor(Math.random() * -1000) + 1000;

    // the new data we want to set
    // we should get this from a different source like a development client
    const newData = { name: `management-api-test ${random}` };

    Auth0Manager.init()
        .then(() => Auth0Manager.updateClient(newData))
        .then(updatedClient => res.json(updatedClient))
        .catch(err => res.json({ message: 'There was an error!', ...err }));
});

// start our server
app.listen(8080, () => {
    console.log('Started on 8080!');
});
