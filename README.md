# Toolbox file app

This is a fullstack project built with Express.js, Webpack and React.

## Getting Started

#### Use docker Compose

:lion: Replace the `[insert-your-token-here]` with your token key for the https://echo-serv.tbxnet.com 3rd party API on the `docker-compose.yml` file.

:lion: Run the containers:

```bash
docker-compose up -d
```

or

#### Use npm to run the API Dev server

:lion: Run the development server:

```bash
# Move to the backend folder
cd backend

## Copy the .env.example file to .env and fill the EXTERNAL_ECHO_API_TOKEN var
cp .env.example .env

# Run the app
npm install
npm run start
# or
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Use npm to run Frontend Dev server

:lion: Run the development server:

```bash
# Move to the frontend folder
cd frontend

## Copy the .env.example file to .env
cp .env.example .env

# Run the app
npm install
npm run start
# or
yarn install
yarn start
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

## See in action

:rocket: Check it out on https://toolbox-file-app.netlify.app/

:round_pushpin: It renders a demo static front-end that shows the availables files from the 3rd party API.

:round_pushpin: The front-end is deployed on [Netlify](https://www.netlify.com/) and the API is deployed on [Render](https://render.com/)

## Features

:newspaper: The node server acts as a middleware to fetch data from a 3rd Party API and expose a custom API

:newspaper: The custom API exposes an endpoint to retrieve all available files. The data is formated.

:newspaper: Also, the API exposes an endpoint to retrieves a single file using a query param.

:newspaper: The UI retrieves the available files from the custom API and shows a responsive card list using Bootstrap and RTK slices

:newspaper: Each card displays a link to see the its detail

:newspaper: In addition, it allows to see the full content of the file on a separated page

## Stack

#### Backend

:heavy_check_mark: Express: "^4.18.2"

:heavy_check_mark: Mocha: "^10.2.0",

#### Frontend

:heavy_check_mark: Bootstrap "^5.0.1". Purging css at build stage.

:heavy_check_mark: React "^18.2.0",

:heavy_check_mark: Webpack "^5.82.1"

:heavy_check_mark: RTK (Redux) "^1.9.5"

:heavy_check_mark: Jest 27.1.1
