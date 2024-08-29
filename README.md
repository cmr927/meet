# Meet 

## Description
Meet is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The front-end is written with JavaScript/React. The server logic is written with Node/Express as Lambda functions (FaaS) and is hosted on AWS. The serverless functions connect to the Google Calendar API.

## Features
- Feature 1: Filter Events By City
- Feature 2: Show/Hide Event Details
- Feature 3: Specify Number of Events
- Feature 4: Use the App When Offline
- Feature 5: Add an App Shortcut to the Home Screen
- Feature 6: Display Charts Visualizing Event Details

## Link to Project
cmr927.github.io/meet

## Installation
Clone this repository into the meet directory and type ```npm install```

## Dependencies
- @testing-library
- atatus-spa
- bootstrap
- dayjs
- react
- recharts
- web-vitals
- workbox
  
## Server-Side (backend) API
https://e7f39l4mof.execute-api.us-east-1.amazonaws.com/dev/api/get-events connects to the Google Calendar API for the events

## Authentication
OAuth2 authentication flow.

## License
This project is licensed under the terms of the [ISC License](https://opensource.org/licenses/ISC).
