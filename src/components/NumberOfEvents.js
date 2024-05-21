/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */

import { useState } from "react";

const NumberOfEvents = () => {
    const [numberInput, setNumberInput] = useState(32);

    const handleInputChange = (e) => {
        setNumberInput(e.target.value);
    };

    return (
        <div id="number-of-events">
            <label htmlFor="event-number-input">Number of Events:</label>
            <input role="textbox"
                type="number"
                id="event-number-input"
                name="eventNumberInput"
                value={numberInput}
                onChange={handleInputChange}
                data-testid="event-number-input"
            />
        </div>
    );
};

export default NumberOfEvents;