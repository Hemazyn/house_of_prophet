import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const NewsLetter = () => {
     const form = useRef();
     // form validation
     const isFormValid = () => {
          const inputs = form.current.querySelectorAll('input[required], textarea[required]');
          for (const input of inputs) {
               if (!input.validity.valid) {
                    return false;
               }
          }
          return true;
     };
     const sendEmail = (e) => {
          e.preventDefault();
          if (isFormValid()) {
               emailjs.sendForm('service_xd1e2o5', 'template_58uc044', form.current, '2lqDOVZNlk1IdjjhZ')
                    .then((result) => {
                         console.log(result.text);
                         console.log("message sent");
                         form.current.reset();
                    }, (error) => {
                         console.log(error.text);
                    });
          } else {
               console.log("Form is not valid");
          }
     };

     return (
          <div className="flex flex-col items-center p-5 bg-yellow-500">
               <p className=" text-neutral-900 text-lg md:text-lg text-center font-normal font-roboto mb-3">Subscribe to our Newsletter to stay connected</p>
               <form ref={form} onSubmit={sendEmail} className="flex flex-col w-3/5 gap-3">
                    <label className="flex flex-col gap-1 font-roboto font-normal">First name
                         <input type="text" required placeholder="Enter first name" name="name"
                              className="bg-transparent font-roboto font-normal rounded-[4px] border border-black outline-none placeholder:text-gray-700 placeholder:text-xs px-2 py-2"
                              onInvalid={(e) => e.target.setCustomValidity('Please input first name')}
                              onInput={(e) => e.target.setCustomValidity('')} />
                    </label>

                    <label className="flex flex-col gap-1 font-roboto font-normal">Email address
                         <input type="email" required className="bg-transparent font-roboto font-normal rounded-[4px] border border-black outline-none placeholder:text-gray-700 placeholder:text-xs px-2 py-2" placeholder="Enter email address"
                              name="email" onInvalid={(e) => e.target.setCustomValidity('Please input email address')}
                              onInput={(e) => e.target.setCustomValidity('')}
                         />
                    </label>
                    <button type="submit" className="w-1/2 ms-auto text-white bg-blue-900 font-roboto font-semibold py-2 rounded-[4px] leading-normal">Submit</button>
               </form>
          </div>
     );
}

export default NewsLetter;