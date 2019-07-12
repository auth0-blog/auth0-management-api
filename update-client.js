require('dotenv').config();
const Auth0Manager = require('./Auth0Manager');

// the new data we want to set
// we should get this from a different source like a development client
const random = Math.floor(Math.random() * -1000) + 1000;
const newData = { name: `management-api-test ${random}` };

Auth0Manager.init()
    .then(() => Auth0Manager.updateClient(newData))
    .then(updatedClient => {
        console.log(updatedClient);
        return updatedClient;
    })
    .catch(err => ({ message: 'There was an error!', ...err }));