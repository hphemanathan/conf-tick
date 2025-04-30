import React from 'react';

function ImageUpload() {
  return (
    <div>
      <label htmlFor='Avatar'>upload Avatar</label>
      <input
        type='file'
        id='Avatar'
        name='Avatar'
        accept='image/png, image/jpeg'
      />
      <div className='flex'>
        <img src="src/assets/icon-info.svg" alt="info" />
        <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
      </div>
    </div>
  );
}

export default ImageUpload;
