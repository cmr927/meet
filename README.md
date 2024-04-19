# Meet 

## Description
Meet is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Features
- Feature 1: Filter Events By City
- Feature 2: Show/Hide Event Details
- Feature 3: Specify Number of Events
- Feature 4: Use the App When Offline
- Feature 5: Add an App Shortcut to the Home Screen
- Feature 6: Display Charts Visualizing Event Details

## User Stories
- Feature 1:
  - As a user, I should be able to filter events by city, so that I can see a list of events taking place in that city.
- Feature 2:
  - As a user, I should be able to show/hide event details, so that I can read more about the event if I am interested.
- Feature 3:
  - As a user, I should be able to specify the number of events, so that I can customize my search results.
- Feature 4:
  - As a user, I should be able to use the app when offline, so that I can use the app without worrying about the internet connection.
- Feature 5:
  - As a user, I should be able to add an app shortcut to the home screen, so that I can find and open the app with fewer steps.
- Feature 6:
  - As a user, I should be able to display charts visualizing event details, so that I can better understand the data.
 
## Gherkin Scenarios
- Feature 2; Scenario 1: An event element is collapsed by default.
  - **Given** user opened the app;
  - **When** user searches for an event;
  - **Then** an event element should be collapsed by default.
- Feature 2; Scenario 2: User can expand an event to see details.
  - **Given** user searched for an event;
  - **When** user clicks on “show details”;
  - **Then** the event details should expand.
- Feature 2; Scenario 3: User can collapse an event to hide details.
  - **Given** user clicked on “show details” of an event;
  - **When** details are displayed and user clicks on “hide details”;
  - **Then** user could collapse the whole event to hide the details.
- Feature 3; Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
  - **Given** the user is on the events app;
  - **When** the user doesn’t specity a number of events;
  - **Then** 32 events should be displayed by default.
- Feature 3; Scenario 2: User can change the number of events displayed.
  - **Given** user searched for events and the default 32 events were displayed;
  - **When** user changes the default number of events displayed
  - **Then** the number of events displayed will change.
- Feature 4; Scenario 1: Show cached data when there’s no internet connection.
  - **Given** the user opened the app;
  - **When** the app tries to connect to the internet and fails;
  - **Then** the app will show cached data
- Feature 4; Scenario 2: Show error when user changes search settings (city, number of events).
  - **Given** the app is showing cached data due to lack of internet;
  - **When** user tries to change the search settings (city, number of events);
  - **Then** the app will throw an error because it cannot search without the internet.
- Feature 5; Scenario 1: User can install the meet app as a shortcut on their device home screen.
  - **Given** user navigates to the meet app’s settings;
  - **When** the user clicks “create shortcut on home screen”;
  - **Then** the meet app is a shortcut on their device home.
- Feature 6; Scenario 1: Show a chart with the number of upcoming events in each city
  - **Given** user opened the app;
  - **When** user clicks, “show data” button;
  - **Then** show a chart with the number of upcoming events in each city.






 



## Link to Project

## Installation

## Usage

## Components

## Dependencies
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- react
- web-vitals
- workbox-background-sync
- workbox-broadcast-update
- workbox-cacheable-response
- workbox-core
- workbox-expiration
- workbox-google-analytics
- workbox-navigation-preload
- workbox-precaching
- workbox-range-requests
- workbox-routing
- workbox-strategies
- workbox-streams

## Server-Side (backend) API

## Authentication
OAuth2 authentication flow.

## License
This project is licensed under the terms of the [ISC License](https://opensource.org/licenses/ISC).
