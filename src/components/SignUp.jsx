import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { Header } from '../components/index';
import { GoEye, GoEyeClosed } from "react-icons/go";
import google from "../assets/google.svg";
import { Link } from 'react-router-dom';
import { auth } from '../firebase/config';

const SignUp = () => {
     const [PhoneNumber, setPhoneNumber] = useState("");
     const [valid, setValid] = useState(true);
     const [password, setPassword] = useState(''); //password
     const [confirmPassword, setConfirmPassword] = useState('');
     const [showPassword, setShowPassword] = useState(false); //password
     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
     const [passwordsMatch, setPasswordsMatch] = useState(true);

     console.log(auth);

     // phone validation
     const handleChange = (value) => {
          setPhoneNumber(value);
          setValid(validatePhoneNumber(value));
     };
     const validatePhoneNumber = (phoneNumber) => {
          const phoneNumberPattern = /^\d{1,15}$/;
          return phoneNumberPattern.test(phoneNumber);
     }
     // password
     const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
     };
     const toggleConfirmPasswordVisibility = () => {
          setShowConfirmPassword(!showConfirmPassword);
     };
     // Check if passwords match while typing
     const handlePasswordChange = (e) => {
          const newPassword = e.target.value;
          setPassword(newPassword);
     };
     const handleConfirmPasswordChange = (e) => {
          const newConfirmPassword = e.target.value;
          setConfirmPassword(newConfirmPassword);
          setPasswordsMatch(password === newConfirmPassword || newConfirmPassword === '');
     };
     return (
          <>
               <Header />
               <div className="w-full h-[800px] lg:h-[100dvh] flex flex-col justify-center bg-blue-900">
                    <div className="w-4/5 md:w-3/5 mx-auto p-5 md:px-[10%] md:py-10 flex flex-col gap-3 md:gap-5 bg-white border-black">

                         <form action="" className="flex flex-col gap-5">
                              <label className="flex flex-col">First name
                                   <input type="text" name="first_name" required autoComplete="none" placeholder="Enter first name"
                                        className="bg-transparent rounded-[4px] border border-black outline-none placeholder:text-xs px-2 py-2"
                                        onInvalid={(e) => e.target.setCustomValidity('Please input first name here')}
                                        onInput={(e) => e.target.setCustomValidity('')} />
                              </label>
                              <label className="flex flex-col">Last name
                                   <input type="text" name="first_name" required autoComplete="none" placeholder="Enter last name"
                                        className="bg-transparent rounded-[4px] border border-black outline-none placeholder:text-xs px-2 py-2"
                                        onInvalid={(e) => e.target.setCustomValidity('Please input first name here')}
                                        onInput={(e) => e.target.setCustomValidity('')} />
                              </label>
                              <label className="flex flex-col">Email address
                                   <input type="email" name="first_name" required autoComplete="none" placeholder="Enter email address"
                                        className="bg-transparent rounded-[4px] border border-black outline-none placeholder:text-xs px-2 py-2"
                                        onInvalid={(e) => e.target.setCustomValidity('Please input first name here')}
                                        onInput={(e) => e.target.setCustomValidity('')} />
                              </label>
                              <label className="flex flex-col">Phone number
                                   <PhoneInput country={'ng'} inputProps={{ required: true, name: 'contact_number' }}
                                        value={PhoneNumber} onChange={handleChange} id="country"
                                        className="w-full rounded-[4px] border border-black outline-none placeholder:text-xs "
                                        placeholder="Enter phone number" autoComplete="none"
                                        onInvalid={(e) => e.target.setCustomValidity('Please input phone number')}
                                        onInput={(e) => e.target.setCustomValidity('')} />
                                   {!valid && <p className="text-xs text-red-500">Please enter a valid phone number!</p>}
                              </label>
                              <label className="flex flex-col">Password
                                   <div className="relative">
                                        <input type={showPassword ? 'text' : 'password'}
                                             name="password" required autoComplete="none" placeholder="Enter password here"
                                             className="w-full bg-transparent rounded-[4px] border border-black outline-none placeholder:text-xs px-2 py-2"
                                             value={password} onChange={handlePasswordChange} />
                                        <span className="absolute top-3 right-3  transform translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
                                             {showPassword ? <GoEye /> : <GoEyeClosed />}
                                        </span>
                                   </div>
                              </label>
                              <label className="flex flex-col">Confirm password
                                   <div className="relative">
                                        <input type={showConfirmPassword ? 'text' : 'password'} name="confirm_password" required autoComplete="none" placeholder="Retype password"
                                             className={`w-full bg-transparent rounded-[4px] border border-black outline-none placeholder:text-xs px-2 py-2 ${passwordsMatch ? '' : 'border-red-500'}`}
                                             value={confirmPassword} onChange={handleConfirmPasswordChange} />
                                        <span className="absolute top-3 right-3  cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
                                             {showConfirmPassword ? <GoEye /> : <GoEyeClosed />}
                                        </span>
                                        {!passwordsMatch && (<p className="text-xs text-red-500">Passwords do not match</p>)}
                                   </div>
                              </label>

                              <button type="submit" className="w-1/2 ms-auto bg-blue-900 text-white font-semibold py-2 rounded-[4px] font-roboto leading-normal">Create Account</button>
                         </form>


                         <div className="flex flex-col gap-4 items-center">
                              <p className="font-inter leading-none text-black">Or Signup with</p>
                              <div className="w-full flex flex-row justify-center gap-3 py-2 rounded-md border border-black cursor-pointer">
                                   <img src={google} alt="google" />
                                   <p className="text-2xl font-outfit font-medium">Google</p>
                              </div>
                              <p className="font-roboto font-normal">Have an account? <span className="text-violet-950 cursor-pointer">
                                   <Link to="/signIn">Sign In</Link>
                              </span>
                              </p>
                         </div>
                    </div>
               </div>

          </>
     );
}

export default SignUp;