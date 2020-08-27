# Farmer Demo Project

## About
This project is a full solution composed by:
- WebService: A node.js REST API responsible to search farmers at database.
- WebApp: The web site allows users to search Farmers by doc# or by the farmer name, it consumes the server.

### Project folder structure
- `/server`: a [Nest.js](https://nestjs.com/) webservice (express). 
- `/wepapp`: a SPA built-in [Angular 7](https://angular.io/) front-end app.


## Running
Both **web-app** and **server** are runnable via [Docker](docker.com). Please run from the root folder:

```
docker-compose up --build
```

After the full build process:
- The webapp should be reachable on `http://localhost:8081`.
- The webservice should be reachable on `http://localhost:3000/farmers/search`.

### Running web-app
If you want to run just the **webapp** please run:
```
docker-compose up --build webapp
```

### Running server
If you want to run just the **server** please run:
```
docker-compose up --build server
```

### Consuming web-service

Request:

```cmd
curl -X POST \
  http://localhost:3000/farmers/search \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
   "key": "Lucas"
}'
```

Response:

```json
[
    {
        "id": "224ne",
        "name": "Lucas Mendonca",
        "address": {
            "address": "Rua Paraguai",
            "country": "Brasil",
            "state": "MG",
            "street": "Rua Paraguai"
        },
        "document": {
            "documentNumber": "475.122.829-11",
            "documentType": "rg"
        }
    }
]
```

## Automated tests
In local enviroment install the dependencies, if you didn't it before:
- `cd server`
- `npm install`

and after you ca run:
- `npm run test`  (for unit-tests)
- `npm run test:e2e` (for e2e tests)

Also, you can run automated tests via Docker build, checking the outputs:

```
docker-compose up --build server
```


## Installing locally

### Web-app
If you want to install and run it locally, please do the steps:
- `cd webapp`
- `npm install`
- `npm run start`

The web-app will be listening on `http://localhost:3000`.


### Server
If you want to install and run it locally, please do the steps:
- `cd server`
- `npm install`
- `npm run start`

The web-service will be listening on `http://localhost:3000/farmers/search`.

## Copyright/Contact
Lucas Mendonça. (lucasnix@gmail.com)

