# Challenge App

CRUD Resume App.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

Before starting this project make sure you have installed [node](https://nodejs.org/en/), [npm](https://www.npmjs.com), [yarn](https://yarnpkg.com) on your local environment.

- node >= 12.6.0
- npm >= 6.9.0
- yarn >= 1.17.3 (Optional)

## Installing

### Using npm:

Install global [json-server](https://www.npmjs.com/package/json-server) dependency for mock API REST.

```bash
$ npm install -g json-server
```

Install npm modules.

```bash
$ npm install
```

### Using yarn:

```bash
$ yarn install
```

## Usage

### Run project

1. Clone project on your local machine.
2. Install [npm]() dependencies from package.json file. Please guarantee you are located inside _cv-challenge_ folder.
3. Install [json-server]() module.
4. Run json-server https://next.json-generator.com/api/json/get/VJ1z-CysF to start json API REST server.
5. Run npm start to start React app.

Before run project make sure any port doesn't runs at 3000 and 4000 ports.

| localhost        | Port | Config File      |
| ---------------- | ---- | ---------------- |
| create-react-app | 4000 | .env             |
| json-server      | 3000 | json-server.json |

If you want to change this ports is recommended you change them in their config files.

Using npm:

```bash
$ npm start
```

Using yarn:

```bash
$ yarn start
```

### Run test

Using npm:

```bash
$ npm test
```

See create-react-app documentation [documentation](https://create-react-app.dev/docs/getting-started) for more information.
