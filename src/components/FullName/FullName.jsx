import React from 'react';

function FullName() {
  const [fullName, setFullName] = React.useState('')
  return <div>
    <label htmlFor="FullName">Full Name</label>
    <input value ={fullName} onChange ={(event) => {
      setFullName(event.target.value)
    }} type="text"  id='FullName'/>
  </div>;
}

export default FullName;
