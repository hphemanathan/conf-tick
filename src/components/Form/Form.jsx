import React from 'react';
import { useForm } from 'react-hook-form';


function Form({image, setImage, setFullName, setEmail,setUserName, isSubmit, setIsSubmit}) {

  // const [image, setImage] = React.useState(null)

  const {register, handleSubmit, getValues, formState: {errors}} = useForm()

   const id = React.useId();

   const ID_FullName = `${id} Full Name`
    const ID_Avatar = `${id} Avatar `;
   const ID_Email = `${id} Email`
   const ID_GitHubUserName = `${id} GitHub Username`;

   const handleDragEnter = (event) => {
    event.preventDefault();
   }

     const handleDragOver = (event) => {
       event.preventDefault();
     };

      //  const handleDragEnter = (event) => {
      //    event.preventDefault();
      //  };

         const handleDrop = (event) => {
           event.preventDefault();
           const files = event.dataTransfer.files
           console.log(files)

         };

         const handleImageUpload = (event) => {
          setImage (URL.createObjectURL(event.target.files[0]))
          // console.log(setImage)
         }

         console.log(image)
  //  console.log(errors)

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          // event.preventDefault();
          console.log()
          console.log(JSON.stringify(data.emailAddress));
          // console.log(JSON.stringify(data));
          setFullName(data.fullName)
          setEmail(data.emailAddress);
          setUserName(data.gitHubUserName)
          setIsSubmit(!isSubmit)
          
          // console.log(setFullName)
        })}>
        <div>
          <div className=''>
            {image ? (
              <div className=''>
                <img src={image} alt='preview' />
                <button onClick={() => setImage(null)}>Remove Image</button>
                
                <label htmlFor={ID_Avatar}>Change Image</label>
                <input
                  className='opacity-0'
                  type='file'
                  id={ID_Avatar}
                  accept='image/png, image/jpeg'
                  onChange={handleImageUpload} />
              </div>
            ) : (
              <div className=''>
                <label
                  htmlFor={ID_Avatar}
                  onDragEnter={handleDragEnter}
                  onDragOver={handleDragOver}
                  // onDrageLeave={handleDragLeave}
                  onDrop={handleDrop}>
                  upload Avatar
                  <img src='src/assets/icon-upload.svg' alt='' />
                  <p>Drag and drop or click to upload</p>
                </label>

                <input
                  className='opacity-0'
                  type='file'
                  id={ID_Avatar}
                  {...register("avatar", {
                    required: "Please upload your image",
                  })}
                  accept='image/png, image/jpeg'
                  onChange={handleImageUpload}
                />
              </div>
            )}
          </div>
          {/* <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" multiple></input> */}
          <div className='flex'>
            {errors.avatar ? (
              <p>Upload you image</p>
            ) : (
              <div className=''>
                <img src='src/assets/icon-info.svg' alt='info' />
                <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
              </div>
            )}
          </div>
        </div>
        <label htmlFor={ID_FullName}>Full Name</label>
        <input
          type='text'
          id={ID_FullName}
          {...register("fullName", { required: "Please enter your full name" })}
        />
        <p>{errors.fullName?.message}</p>

        <label htmlFor={ID_Email}>Email Address</label>
        <input
          // pattern='.+@example\.com'
          id={ID_Email}
          type='email'
          placeholder='example@email.com'
          {...register("emailAddress", {
            required: "Please enter your email address",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter valid address",
            },
          })}
        />
        <p>{errors.emailAddress?.message} </p>
        <label htmlFor={ID_GitHubUserName}>GitHub Username</label>
        <input
          id={ID_GitHubUserName}
          type='text'
          placeholder='@yourusername'
          {...register("gitHubUserName", {
            required: "Please enter your GitHub user name",
          })}
        />
        <p>{errors.gitHubUserName?.message}</p>
        <button role='submit'>Generate My Ticket</button>
      </form>
    </div>
  );
}

export default Form;
