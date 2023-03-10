import { useState, useEffect } from "react";
import EventCard from "./event";


function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/events")
          .then((response) => response.json())
          .then(events => {
            setEvents(events); 
            console.log('Events fetched...', events);
            });
          }, []);

  return (
    <div className="Events">
        <h2>Techtonica 2023 events</h2>
        <ul>
            {events.map(event =>
            <EventCard key={event.id} title={event.title} location={event.location}/>
            )}
        </ul>
      
    </div>
  );
}

export default Events;