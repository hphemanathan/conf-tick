import React from 'react';

function TicketStub({image, fullName, userName}) {
  return (
    <div>
      <img
        className='absolute'
        src='src\assets\pattern-ticket.svg'
        alt='Ticket Stub'
      />

      <img className='pt-6' src='src\assets\logo-full.svg' />
      <p>Jan 31, 2025 / Austin, TX</p>
      <img src={image} alt='Avatar' />
      <img src='src\assets\icon-github.svg' alt='Git Hub' />
      <p>{fullName}</p>
      <p>@{userName}</p>
    </div>
  );
}

export default TicketStub;
