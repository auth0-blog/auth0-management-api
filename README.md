The module to interact with the Auth0Management API

## To run this:

1. Clone the repo: `git clone https://github.com/auth0-blog/auth0-management-api.git`
2. Add Auth0 credentials to a new `.env` file.
3. Run `npm install` to install the dependencies.
3. Run files with the command `node get-client.js` and `node update-client.js`.
4. See changes in newly created file, `client-data.json`.

## Requirements:

- Have an Auth0 account and an account name.
- Have a management API: https://manage.auth0.com/dashboard/us/{CLIENT}/apis

## How this works:

1.  Requests an access token using client_id and client_secret
2.  Uses the access token to create a new ManagementClient
3.  Use the ManagementClient to interact with the API:
    https://auth0.github.io/node-auth0/index.html

## Example usage to get a client:

```
const Auth0Manager = require('./Auth0Manager');
Auth0Manager
  .init()
  .then(() => Auth0Manager.getClient())
  .then(client => res.json(client))
  .catch(err => res.json({ message: 'There was an error!', ...err }));
```
