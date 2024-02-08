/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2';
import { Footer, Header } from '.';

const facilitator = [
     "Bro Pelumi",
     "Bro Taiwo",
     "Bro Joshua",
     "Sister Dorcas"
];
const facilitatorEmails = {
     "Bro Pelumi": "bro_pelumi@email.com",
     "Bro Taiwo": "bro_taiwo@email.com",
     "Bro Joshua": "bro_joshua@email.com",
     "Sister Dorcas": "sister_dorcas@email.com",
};

const Appointment = () => {
     const [valid, setValid] = useState(true);
     const [isOpen, setIsOpen] = useState(false);
     const [haveText, setHaveText] = useState("");
     const [selectedFacilitator, setSelectedFacilitator] = useState("");
     const [PhoneNumber, setPhoneNumber] = useState("");

     const handleClick = () => {
          setIsOpen(!isOpen);
     };
     const handleText = (ev) => {
          const selectedFacilitatorEmail = facilitatorEmails[ev.currentTarget.textContent];
          setHaveText(ev.currentTarget.textContent);
          setSelectedFacilitator(selectedFacilitatorEmail);
          setIsOpen(false);
     };
     const itemList = () => {
          const list = facilitator.map((item) => (
               <div onClick={handleText} className="dropdown__item w-full" key={item.toString()} style={{ backgroundColor: "#c5c8fd" }}>
                    <span>{item}</span>
               </div>
          ));
          return <div className="dropdown__items">{list}</div>;
     };
     // form submittion
     const form = useRef(null);
     useEffect(() => {
          form.current = {
               facilitator: null,
          };
     }, []);
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
               const selectedFacilitator = haveText || "Facilitator";
               // Check if form.current is not null before accessing its properties
               if (form.current && form.current.facilitator) {
                    form.current.facilitator.value = selectedFacilitator;
                    emailjs
                         .sendForm('service_9u4crkc', 'template_tkue13f', form.current, '165ie_F12sE6SwqDd')
                         .then(
                              (result) => {
                                   console.log(result.text);
                                   console.log("message sent");
                                   setPhoneNumber("");
                                   // Reset the form using the form reference
                                   form.current.reset();
                              },
                              (error) => {
                                   console.log(error.text);
                              }
                         );
               } else {
                    console.log("Form reference is null");
               }
          } else {
               console.log("Form is not valid");
          }
     };
     // phone validation
     const handleChange = (value) => {
          setPhoneNumber(value);
          setValid(validatePhoneNumber(value));
     };
     const validatePhoneNumber = (phoneNumber) => {
          const phoneNumberPattern = /^\d{1,15}$/;
          return phoneNumberPattern.test(phoneNumber);
     }

     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     return (
          <>
               <Header />
               <div className="w-full md:h-[800px] flex justify-center items-center bg-gray-300">
                    <div id="appoint" className="w-full md:w-3/5 mx-auto flex flex-col shadow-2xl bg-opacity-60 backdrop-filter backdrop-blur-3xl p-3 md:p-5" style={{ border: "2px solid re" }}>
                         <h2 className="text-center font-roboto font-semibold text-black text-lg p-5">BOOK AN APPOINTMENT</h2>
                         <form ref={form} onSubmit={sendEmail}>

                              {/* section 1 */}
                              <div className="flex flex-row justify-between items-end mb-2">
                                   <div className="flex flex-col gap-1 w-fit">
                                        <label className="okay text-black font-roboto font-normal">Choose meeting time</label>
                                        <input type="date" name="date" required autoComplete="none"
                                             className="bg-indigo-200 text-black font-roboto font-normal rounded-[4px] placeholder:text-xs px-2 py-2 uppercase"
                                             onInvalid={(e) => e.target.setCustomValidity('Please choose a meeting date')}
                                             onInput={(e) => e.target.setCustomValidity('')} />
                                   </div>

                                   <div className={isOpen ? "dropdown active" : "flex flex-col font-roboto font-normal dropdown gap5 rounded-[4px] outline-none border-none text-[#0e1487] bg-indigo-200"} onClick={handleClick}>
                                        <div className="dropdown__text flex items-center" name="facilitator">
                                             {!haveText ? "Facilitator" : haveText}
                                             <i className="icon"></i>
                                        </div>
                                        {itemList()}
                                   </div>
                              </div>

                              {/* section 2 */}
                              <div className="flex flex-col md:flex-row gap-x-5 gap-y-2 md:gap-y-0 text-black" >

                                   <div className="flex flex-col w-full gap-5">
                                        <div className="flex flex-col gap-2">
                                             <label className="okay font-roboto font-normal">First name</label>
                                             <input type="text" name="first_name" required autoComplete="none" placeholder="Enter first name"
                                                  className="rounded-[4px] font-roboto font-normal border border-black outline-none placeholder:text-xs px-2 py-2 bg-transparent"
                                                  onInvalid={(e) => e.target.setCustomValidity('Please input first name here')}
                                                  onInput={(e) => e.target.setCustomValidity('')} />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                             <label className="okay font-roboto font-normal">Email address</label>
                                             <input type="email" name="email_address" required autoComplete="none" placeholder="Enter email address"
                                                  className="rounded-[4px] font-roboto font-normal border border-black outline-none placeholder:text-xs px-2 py-2 bg-transparent"
                                                  onInvalid={(e) => e.target.setCustomValidity('Please input email address')}
                                                  onInput={(e) => e.target.setCustomValidity('')} />
                                             <span className="text-xs font-roboto font-normal">Get a notification 30 minutes before meeting</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                             <label className="okay font-roboto font-normal">Phone number</label>
                                             <PhoneInput country={'ng'} inputProps={{ required: true, name: 'contact_number' }}
                                                  value={PhoneNumber} onChange={handleChange} id="country"
                                                  className="w-full rounded-[4px] font-roboto font-normal border border-black outline-none placeholder:text-xs "
                                                  placeholder="Enter phone number" autoComplete="none"
                                                  onInvalid={(e) => e.target.setCustomValidity('Please input phone number')}
                                                  onInput={(e) => e.target.setCustomValidity('')} />
                                             {!valid && <p className="text-xs text-red-500 font-roboto font-normal">Please enter a valid phone number!</p>}
                                             <span className="text-xs font-roboto font-normal">Get a notification 30 minutes before meeting</span>
                                        </div>

                                   </div>

                                   <div className="flex flex-col w-full gap-5">
                                        <div className="flex flex-col  gap-2">
                                             <label className=" flex flex-row okay text-black font-roboto font-normal">Purpose for appointment</label>
                                             <input type="text" name="subject" required autoComplete="none" placeholder="Text"
                                                  className="rounded-[4px] font-roboto font-normal border border-black outline-none placeholder:text-xs px-2 py-2 bg-transparent"
                                                  onInvalid={(e) => e.target.setCustomValidity('Please input purpose of your message')}
                                                  onInput={(e) => e.target.setCustomValidity('')} />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                             <label className="flex flex-row gap-1 font-roboto font-normal">Message/Prayer request (Optional)</label>
                                             <textarea rows="4" name="message" autoComplete="none" placeholder="Text"
                                                  className="rounded-[4px] border border-black outline-none placeholder:text-xs px-2 py-2 bg-transparent" />
                                        </div>
                                        <button type="submit" className="w-1/2 ms-auto bg-blue-900 font-semibold py-2 rounded-[4px] font-roboto leading-normal text-white">Submit</button>
                                   </div>

                              </div>

                         </form>
                    </div>
               </div>
               <Footer />
          </>
     );
}

export default Appointment;