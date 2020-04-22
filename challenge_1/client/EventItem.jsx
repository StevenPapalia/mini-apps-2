import React from 'react';

const EventItem = ({ event }) => {
  return (
    <div>
      <div>{event.date}</div>
      <div>{event.description}</div>
    </div>
  );
}

export default EventItem;