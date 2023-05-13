# toolbox-file-app

This is a fullstack project built with Express.js, Webpack and React.

## Getting Started

#### API Dev server

:lion: Run the development server:

```bash
# Move to the backend folder
cd backend

# Run the app
npm install
npm run start
# or
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Frontend Dev server

:lion: Run the development server:

```bash
# Move to the frontend folder
cd frontend

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

:newspaper: It retrieves all the available file information from the custom API

:newspaper: It shows a responsive card list using the available files

:mag: It displays a link to see the card detail.

:ticket: It allows to see the full content of the file on a separated page

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
