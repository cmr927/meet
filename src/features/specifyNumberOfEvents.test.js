/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */

import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test("When user hasn't specified a number, 32 events are shown by default", ({ given, when, then }) => {

        given('user opens the events app', () => {

        });

        let AppComponent;
        when('the app loads', () => {
            AppComponent = render(<App />);

        });

        then('32 events should be displayed by default', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
    });

    test('User can change the number of events displayed', ({ given, when, then }) => {

        let AppComponent;
        let AppDOM;
        given('the default 32 events were displayed', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        when('user changes the default number of events displayed', async () => {
            const NumberOfEventsDOM = (AppDOM).querySelector('#event-number-input');
            const user = userEvent.setup();
            await user.type(NumberOfEventsDOM, '{backspace}{backspace}10')
        });

        then('the number of events displayed will change', async () => {
            AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(10);
            });
        });
    });
});