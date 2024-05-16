/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
//Feature 2

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api';
import mockData from '../mock-data';

describe('<Event /> component', () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event key={mockData[0].id} event={mockData[0]} />);
    });
    test("by default, event's details section should be hidden", () => {
        const { getByTestId } = EventComponent

        // Assuming your component renders the event details with testID 'event-details' and initially it should be collapsed
        const eventDetails = getByTestId('event-details');

        // Expect the event details to be present but not visible initially
        expect(eventDetails).toBeInTheDocument();
        expect(eventDetails).not.toBeVisible();
    });

    test('renders event title', () => {
        expect(EventComponent.queryByText(mockData[0].summary)).toBeInTheDocument();
    });

    test('renders event start time', () => {
        expect(EventComponent.queryByText(mockData[0].created)).toBeInTheDocument();
    });


    test('renders event location', () => {
        expect(EventComponent.queryByText(mockData[0].location)).toBeInTheDocument();
    });

    // The event's show details button
    test('renders event details button with the title (show details)', () => {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

    test("shows the details section when the user clicks on the 'show details' button", async () => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.queryByText('show details');
        await user.click(showDetailsButton);
        const eventDetails = EventComponent.getByTestId('event-details');
        expect(eventDetails).toBeVisible();
    });

    test("hides the details section when the user click on the 'hide details' button", async () => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.queryByText('show details');
        await user.click(showDetailsButton);
        const eventDetails = EventComponent.getByTestId('event-details');
        const hideDetailsButton = EventComponent.queryByText('hide details');
        await user.click(hideDetailsButton);
        expect(eventDetails).not.toBeVisible();
    });

});