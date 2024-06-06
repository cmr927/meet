/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {

        let AppComponent;
        given('user opened the app', () => {
            AppComponent = render(<App />);
        });

        let EventListDOM;
        when('an event loads', () => {
            const AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');
        });

        then('an event element should be collapsed by default', async () => {

            await waitFor(() => {
                const eventDetails = within(EventListDOM).queryByTestId('event-details');
                expect(eventDetails).not.toBeInTheDocument();
            });

        });
    });

    test('User can expand an event to see details', ({ given, when, then }) => {

        let AppComponent;
        let EventListDOM;
        given('an event is displayed', () => {
            AppComponent = render(<App />);

            const AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');

        });

        when('user clicks on “show details”', () => {
            const showDetailsButton = EventListDOM.querySelector('.details-btn');
            userEvent.click(showDetailsButton);
        });

        then('the event details should expand', async () => {
            await waitFor(() => {
                const eventDetails = within(EventListDOM).queryAllByTestId('event-details');
                expect(eventDetails.length).toBeGreaterThan(0);
            });
        });
    });

    test('User can collapse an event to hide details', ({ given, when, then }) => {

        let AppComponent;
        let EventListDOM;
        given('user clicked on “show details” of an event', () => {
            AppComponent = render(<App />);

            const AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');

            const showDetailsButton = EventListDOM.querySelector('.details-btn');
            userEvent.click(showDetailsButton);
        });

        when('details are displayed and user clicks on “hide details”', () => {
            const hideDetailsButton = EventListDOM.querySelector('.details-btn');
            userEvent.click(hideDetailsButton);
        });

        then('the event details should collapse', async () => {
            await waitFor(() => {
                const eventDetails = within(EventListDOM).queryByTestId('event-details');
                expect(eventDetails).not.toBeInTheDocument();
            });
        });
    });
});
