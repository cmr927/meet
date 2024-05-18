import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };
    return (
        <div>
            <h2>{event.summary}</h2>
            <p>Start Time: {event.created}</p>
            <p>Location: {event.location}</p>
            <button onClick={toggleDetails}>
                {showDetails ? 'hide details' : 'show details'}
            </button>
            <div hidden={!showDetails} data-testid="event-details">
                {/* Render event details here */}
                <p>Description: {event.description}</p>
                {/* Add more details as needed */}
            </div>
        </div>
    );
};

export default Event;