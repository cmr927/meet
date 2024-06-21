import { useState } from "react";

const dayjs = require('dayjs');

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const eventCreatedDate = dayjs(event.created);
    return (
        <div className="event">
            <h2>{event.summary}</h2>
            <p>Start Time: {eventCreatedDate.format('dddd, MMM DD, YYYY')}</p>
            <p>Location: {event.location}</p>
            <div hidden={!showDetails} data-testid="event-details">
                {/* Render event details here */}
                <p>Description: {event.description}</p>
                {/* Add more details as needed */}
            </div>
            <button className="details-btn" onClick={toggleDetails}>
                {showDetails ? 'hide details' : 'show details'}
            </button>

        </div>
    );
};

export default Event;