//Fresh from chatGPT. MUST continue editing!

import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test("When user hasn't specified a number, 32 events are shown by default", ({ given, when, then }) => {

        let AppComponent;
        given('user is on the events app', () => {
            AppComponent = render(<App />);
        });

        when("user doesn't specify a number of events", () => {
            // Assuming the app loads with events automatically, no action needed here
        });

        then('32 events should be displayed by default', async () => {
            const eventItems = await screen.findAllByTestId('event-item'); // Assuming each event has a test ID 'event-item'
            expect(eventItems).toHaveLength(32);
        });
    });

    test('User can change the number of events displayed', ({ given, when, then }) => {
        given('the default 32 events were displayed', async () => {
            render(<App />);
            const eventItems = await screen.findAllByTestId('event-item'); // Assuming each event has a test ID 'event-item'
            expect(eventItems).toHaveLength(32);
        });

        when('user changes the default number of events displayed', () => {
            const numberInput = screen.getByPlaceholderText('Number of events'); // Adjust the placeholder text accordingly
            userEvent.change(numberInput, { target: { value: '10' } });
        });

        then('the number of events displayed will change', async () => {
            const eventItems = await screen.findAllByTestId('event-item'); // Assuming each event has a test ID 'event-item'
            expect(eventItems).toHaveLength(10);
        });
    });
});