import React from 'react';
import TicketCongrats from '../TicketCongrats/TicketCongrats';
import TicketEmail from '../TicketEmail/TicketEmail';
import TicketStub from '../TicketStub/TicketStub';

function TicketPage({fullName, email, image, userName}) {
  return <div>
    {/* <p>{email}</p> */}
    <TicketCongrats fullName={fullName}/>
    <TicketEmail email={email}/>
    <TicketStub image={image} fullName={fullName} userName={userName}/>
  </div>;
}

export default TicketPage;
