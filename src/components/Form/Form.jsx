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
    <div className='w-(--width-form) mx-auto mb-28'>
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
        <div role='input' className='form_input'>
          <div className='mb-6'>
            <div>
              <div>
                <div>
                  <label
                    className='inline-block w-full'
                    htmlFor={ID_Avatar}
                    onDragEnter={handleDragEnter}
                    onDragOver={handleDragOver}
                    // onDrageLeave={handleDragLeave}
                    onDrop={handleDrop}>
                    <p className='mb-3'>upload Avatar</p>
                    <div className='border-dashed border-neutral-700 border-2 rounded-xl  bg-white/8 w-full'>
                      {!image ? (
                        <div>
                          <img
                            className='mt-5 mx-auto mb-4 border-solid border-neutral-700 border-2 p-3 rounded-xl bg-neutral-700'
                            src='src/assets/icon-upload.svg'
                            alt=''
                          />
                          <p className='mx-auto text-center mb-5 text-(length:--text-preset-600)'>
                            Drag and drop or click to upload
                          </p>
                        </div>
                      ) : (
                        <div className='flex flex-col items-center just'>
                          <img
                            src={image}
                            alt='preview'
                            className='w-(88px) h-[88px] mt-5 mx-auto mb-4 border-solid border-neutral-700 border-2 rounded-xl bg-neutral-700'
                          />

                          <div className='flex items-center gap-x-2 mb-5 '>
                            <button
                              className='flex-1/1 bg-white/10 bg-white/10 py-1 px-2 rounded-md underline decoration-solid'
                              onClick={() => setImage(null)}>
                              Remove Image
                            </button>
                            <div className='flex-1/1 self-center bg-white/10 py-1 px-2 rounded-md'>
                              <labe className='mb-0 ' htmlFor={ID_Avatar}>
                                Change Image
                              </labe>
                              <input
                                className='opacity-0 absolute -z-10'
                                type='file'
                                id={ID_Avatar}
                                accept='image/png, image/jpeg'
                                onChange={handleImageUpload}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </label>
                </div>

                <input
                  className='opacity-0 absolute -z-10 p-0'
                  type='file'
                  id={ID_Avatar}
                  {...register("avatar", {
                    required: "please upload the image",
                  })}
                  accept='image/png, image/jpeg'
                  onChange={handleImageUpload}
                />
              </div>
            </div>
            {/* <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" multiple></input> */}
            <div className='flex'>
              {file?.size > 500000 ? (
                <div className='flex w-full'>
                  <img
                    src='src\assets\icon-info.svg'
                    alt='info'
                    className='mr-2 info'
                  />
                  <p className='error'>
                    File too large. Please upload a photo under 500KB.
                  </p>
                </div>
              ) : (
                <div className='flex w-full'>
                  <img
                    className='mr-2'
                    src='src/assets/icon-info.svg'
                    alt='info'
                  />
                  <p className='text-(length:--text-preset-700)'>
                    Upload your photo (JPG or PNG, max size: 500KB).
                  </p>
                </div>
              )}

              {/* {errors.avatar && <p>{errors.avatar.message}</p>} */}
            </div>
          </div>
          <div className='form_input'>
            <label className='input' htmlFor={ID_FullName}>
              Full Name
            </label>
            <br />
            <input
              className={errors.fullName && "error"}
              type='text'
              id={ID_FullName}
              {...register("fullName", {
                required: "Please enter your full name",
              })}
            />
            <p className='error'>{errors.fullName?.message}</p>
          </div>
          <div className='form_input'>
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
            <p className='error'>{errors.emailAddress?.message} </p>
          </div>
          <div className='form_input'>
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
            {errors.gitHubUserName && (
              <p className='error'>{errors.gitHubUserName?.message}</p>
            )}
          </div>
          <button className='button' role='submit'>
            Generate My Ticket
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
