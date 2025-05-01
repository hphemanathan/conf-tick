import React from 'react';
import ImageUpload from '../ImageUpload/ImageUpload';
import FullName from '../FullName/FullName';
import EmailAddress from '../EmailAddress/EmailAddress';

function Form() {
  const [fullName, setFullName] = React.useState('')
   const [emailAdress, setEmailAddress] = React.useState('')

   const id = React.useId();

   const ID_FullName = `${id} Full Name`
    const ID_Name = `${id} Name`;
   const ID_Email = `${id} Email`

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("working");
        }}>
        <div>
          <label htmlFor='Avatar'>upload Avatar</label>
          <input
            type='file'
            id='Avatar'
            name='Avatar'
            accept='image/png, image/jpeg'
          />
          <div className='flex'>
            <img src='src/assets/icon-info.svg' alt='info' />
            <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
          </div>
        </div>
        <label htmlFor={ID_FullName}>Full Name</label>
        <input
          value={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
          type='text'
          id={ID_FullName}
          required={true}
        />

        

        <label htmlFor={ID_Email}>Email Address</label>
        <input
          // pattern='.+@example\.com'
          id={ID_Email}
          type='email'
          placeholder='example@email.com'
          value={emailAdress}
          onChange={(event) => {
            setEmailAddress(event.target.value);
          }}
          required={true}
        />
        <button role='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
