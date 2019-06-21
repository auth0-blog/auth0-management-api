The module to interact with the Auth0Management API

## To run this:

1. Clone the repo: `git@github.com:sarahjay55/auth0-management-api.git`
2. Add credentials to a new `.env` file
3. Install nodemon: `npm i -g nodemon`
4. Run the server: `node server.js` or `nodemon server.js`
5. Visit the app and see your client info: [http://localhost:8080](http://localhost:8080)

## Requirements:

- Have an Auth0 account and an account name.
- Have a management API: https://manage.auth0.com/dashboard/us/{CLIENT}/apis

## How this works:

1.  Requests an access token using client_id and client_secret
2.  Uses the access token to create a new ManagementClient
3.  Use the ManagementClient to interact with the API:
    https://auth0.github.io/node-auth0/module-management.ManagementClient.html

## Example usage to get a client:

```
const Auth0Manager = require('./Auth0Manager');
Auth0Manager
  .init()
  .then(() => Auth0Manager.getClient())
  .then(client => res.json(client))
  .catch(err => res.json({ message: 'There was an error!', ...err }));
```
