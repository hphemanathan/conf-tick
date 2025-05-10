import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import Heading from './components/Heading/Heading'
import Form from './components/Form/Form'
import TicketPage from './components/TicketPage/TicketPage'

function App() {

  const [fullName, setFullName] = React.useState('')
    const [image, setImage] = React.useState(null)
    const [email, setEmail] = React.useState('')
    const[userName, setUserName] = React.useState('')
    const [isSubmit, setIsSubmit] = React.useState(false)
  

  return (
    <>
      <Header />

      {!isSubmit ? (
        <div className=''>
          <Heading />
          <Form
            image={image}
            setImage={setImage}
            setFullName={setFullName}
            setEmail={setEmail}
            setUserName={setUserName}
            setIsSubmit={setIsSubmit}
            isSubmit={isSubmit}
          />
        </div>
      ) : (
        <TicketPage
          fullName={fullName}
          email={email}
          image={image}
          userName={userName}
        />
      )}
    </>
  );
}

export default App
