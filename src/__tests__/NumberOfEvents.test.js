/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents.js';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    let getByTestId;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
        getByTestId = NumberOfEventsComponent.getByTestId
    });

    test('renders text input', () => {
        const eventNumberInput = getByTestId('event-number-input');
        expect(eventNumberInput).toBeInTheDocument();
    });

    test("default number in text box is 32", () => {
        // Assuming you have a text input field for the user to specify the number of events with testID 'event-number-input'
        const eventNumberInput = getByTestId('event-number-input');

        // Expect the default value of the input field to be '32'
        expect(eventNumberInput).toHaveValue(32);
    });


    test('should allow the user to change the number of events displayed', async () => {
        // Assuming you have an input field for the user to specify the number of events with testID 'event-number-input'
        const eventNumberInput = getByTestId('event-number-input');

        // Simulate user input to change the number of events to be displayed
        const user = userEvent.setup();
        await user.type(eventNumberInput, '{backspace}{backspace}10');

        // Expect the number of events to be equal to the user-specified number (10 in this case)
        expect(eventNumberInput).toHaveValue(10);
    });
});
