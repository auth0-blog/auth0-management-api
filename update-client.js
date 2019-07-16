require('dotenv').config();
const Auth0Manager = require('./Auth0Manager');
var fs = require('file-system');

// the new data we want to set
let newData = fs.readFileSync('./client-data.json', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    return data;
});
newData = JSON.parse(newData)
const updatedData = { name: `${newData.name}` };

Auth0Manager.init()
    .then(() => {
        return Auth0Manager.updateClient(updatedData)
    })
    .then(updatedClient => {
        console.log(updatedClient)
        return updatedClient;
    })
    .catch(err => ({ message: 'There was an error!', ...err }));