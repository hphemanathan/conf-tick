import React from 'react';
import { useForm } from 'react-hook-form';





function Form({image, setImage, setFullName, setEmail,setUserName, isSubmit, setIsSubmit}) {

  // const [image, setImage] = React.useState(null)
  const [file, setFile] = React.useState(null)

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
         
         setFile(event.target.files[0])  

         if (
           event.target.files[0].size <= 500000 &&
           event.target.files[0].type === "image/jpeg" ||
           event.target.files[0].type === "image/png"
         ) {
           setImage(URL.createObjectURL(event.target.files[0]));
         }

            
          
          
           
         }
         console.log(file)
         console.log(image)
  //  console.log(errors)

  return (
    <div className='w-(--width-form) mx-auto'>
      <form
        onSubmit={handleSubmit((data) => {
          // event.preventDefault();
          console.log();
          console.log(JSON.stringify(data.emailAddress));
          // console.log(JSON.stringify(data));
          setFullName(data.fullName);
          setEmail(data.emailAddress);
          setUserName(data.gitHubUserName);
          setIsSubmit(!isSubmit);

          // console.log(setFullName)
        })}>
        <div>
          <div>
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
                  onChange={handleImageUpload}
                />
              </div>
            ) : (
              <div>
                <div>
                  <label
                    htmlFor={ID_Avatar}
                    onDragEnter={handleDragEnter}
                    onDragOver={handleDragOver}
                    // onDrageLeave={handleDragLeave}
                    onDrop={handleDrop}>
                    <p className='mb-3'>upload Avatar</p>
                    <div className='border-dashed border-neutral-700 border-2 rounded-xl mb-3 bg-white/8'>
                      <img
                        className='mt-5 mx-auto mb-4 border-solid border-neutral-700 border-2 p-3 rounded-xl bg-neutral-700'
                        src='src/assets/icon-upload.svg'
                        alt=''
                      />
                      <p className='mx-auto text-center mb-5'>
                        Drag and drop or click to upload
                      </p>
                    </div>
                  </label>
                </div>
                <input
                  className='opacity-0 absolute'
                  type='file'
                  id={ID_Avatar}
                  {...register("avatar",{
                    required:"please upload the image"
                  })}
   
                  accept='image/png, image/jpeg'
                  onChange={handleImageUpload}
                />
              </div>
            )}
          </div>
          {/* <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" multiple></input> */}
          <div className='flex'>
            {file?.size > 500000 ? (
              <div className='flex'>
                <img src='src\assets\icon-info.svg' alt='info' />
                <p>File too large. Please upload a photo under 500KB.</p>
              </div>
            ) : (
              <div className='flex mb-6'>
                <img src='src/assets/icon-info.svg' alt='info' />
                <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
              </div>
            )}

            {/* {errors.avatar && <p>{errors.avatar.message}</p>} */}
          </div>
        </div>
        <label className='input' htmlFor={ID_FullName}>
          Full Name
        </label>
        <br />
        <input
          className={errors.fullName && "error"}
          type='text'
          id={ID_FullName}
          {...register("fullName", { required: "Please enter your full name" })}
        />
        <p>{errors.fullName?.message}</p>

        <label htmlFor={ID_Email}>Email Address</label>
        <br />
        <input
          // pattern='.+@example\.com'
          className={errors.emailAddress && "error"}
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
        <br />
        <input
          className={errors.gitHubUserName && "error"}
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
