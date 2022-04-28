# ![Logo](https://www.cajalosandes.cl/cla_cajalosandes_rrss-img.png)

## Description

Service that consumes the [ZeroQ SDK](https://www.npmjs.com/package/zeroq-sdk), developed using [Nest](https://github.com/nestjs/nest) framework.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`ZEROQ_TOKEN`

`ENV_SDK`

`ENV_URL_SDK`

## Installation

```bash
# clone the project
$  git clone https://link-to-project

# go to the project directory
$ cd my-project

# install dependencies
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

To deploy this project run the following commands:

```bash
# build Docker image
$ docker build -t cla-zeroq-api:latest .
# run Docker image
$ docker run -dp 80:80 --name cla-zeroq-api cla-zeroq-api:latest
```

## API Reference

### Hello World

```http
GET /api
```

### ZeroQ - Get all offices

```http
GET /api/zeroq/offices
```

## Stay in touch

- Author - [José Miguel Candia](mailto:jose.candia@cajalosandes.cl)
