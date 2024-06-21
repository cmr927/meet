/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */

import { useState } from "react";

import { Container, Col, Row } from "react-bootstrap"

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const [numberInput, setNumberInput] = useState(32);

    const handleInputChange = (e) => {
        setNumberInput(e.target.value);
        if (setCurrentNOE) {
            setCurrentNOE(e.target.value);
        }
        let numberText;
        if (isNaN(e.target.value) || e.target.value <= 0) {
            numberText = "Only positive numbers are allowed"
        }

        else {
            numberText = ""
        }
        setErrorAlert(numberText);
    };

    return (
        <Container>
            <Row id="number-of-events">
                <Col>
                    <label htmlFor="event-number-input">Number of Events:</label>
                </Col>
                <Col>
                    <div className="cityDiv">
                        <input role="textbox"
                            type="number"
                            id="event-number-input"
                            name="eventNumberInput"
                            value={numberInput}
                            onChange={handleInputChange}
                            data-testid="event-number-input"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NumberOfEvents;