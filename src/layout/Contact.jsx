import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Footer, Header, NewsLetter, Loading, ScrollTop } from "../components";

const Contact = () => {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);
  const [loading, setLoading] = useState(true);
  // form submittion
  const form = useRef();
  // form validation
  const isFormValid = () => {
    const inputs = form.current.querySelectorAll(
      "input[required], textarea[required]",
    );
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
      emailjs
        .sendForm(
          "service_xd1e2o5",
          "template_58uc044",
          form.current,
          "2lqDOVZNlk1IdjjhZ",
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            setPhoneNumber("");
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          },
        );
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
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full flex justify-center items-center bgImage">
            <div className="relative w-full md:w-4/5 mx-4 my-3 flex flex-col rounded-[10px] bg-white">
              {/* section */}
              <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-y-2 md:gap-y-0 items-center justify-between p-5">
                <p className="text-base font-roboto font-normal">
                  Our Contact:
                </p>
                <div className="flex flex-col text-base font-roboto font-normal">
                  <p className="mb-0">Email:</p>
                  <span className="text-sm">lorem@gmail.com</span>
                </div>
                <div className="flex flex-col text-base font-roboto font-normal">
                  <p className="mb-0">Phone Number:</p>
                  <span className="text-sm">+23491234567</span>
                </div>
                <div className="flex flex-col text-base font-roboto font-normal">
                  <p className="mb-0">Office Hours:</p>
                  <span className="text-sm">Mon - Sat, 9am - 6pm</span>
                </div>
              </div>
              {/* section first form */}
              <div className="bgImage">
                <div className="flex flex-col p-5 bg-opacity-60 backdrop-filter backdrop-blur-md">
                  <p className="text-xs md:text-base text-gray-300  font-roboto font-normal z-20 py-5">
                    Lorem ipsum dolor sit amet consectetur. Elementum pretium
                    blandit tellus massa quam aliquam ipsum. Fames diam euismod
                    maecenas pharetra iaculis volutpat tincidunt pretium nisl.{" "}
                  </p>

                  <form ref={form} onSubmit={sendEmail} className="flex flex-col md:flex-row gap-3 text-white z-50">
                    <div className="flex flex-col w-full gap-3">
                      <div className="flex flex-col gap-1">
                        <label className="okay font-roboto font-normal">First name</label>
                        <input type="text" name="first_name" required
                          autoComplete="none" placeholder="Enter first name"
                          className="bg-transparent rounded-[4px] border border-white outline-none placeholder:text-xs px-2 py-2"
                          onInvalid={(e) => e.target.setCustomValidity("Please input first name here",)}
                          onInput={(e) => e.target.setCustomValidity("")} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="okay font-roboto font-normal">Last name</label>
                        <input
                          type="text"
                          name="last_name"
                          required
                          autoComplete="none"
                          placeholder="Enter last name"
                          className="bg-transparent rounded-[4px] border border-white outline-none placeholder:text-xs px-2 py-2"
                          onInvalid={(e) =>
                            e.target.setCustomValidity(
                              "Please input last name here",
                            )
                          }
                          onInput={(e) => e.target.setCustomValidity("")}
                        />
                      </div>
                      <label className="flex flex-col gap-1 font-roboto font-normal">
                        Email address
                        <input
                          type="email"
                          name="email_address"
                          required
                          autoComplete="none"
                          className="bg-transparent rounded-[4px] border border-white outline-none placeholder:text-xs px-2 py-2"
                          placeholder="Enter email address"
                        />
                      </label>
                      <label className="flex flex-col gap-1 font-roboto font-normal">
                        Phone number
                        <PhoneInput
                          country={"ng"}
                          inputProps={{
                            required: true,
                            name: "contact_number",
                          }}
                          value={PhoneNumber}
                          onChange={handleChange}
                          id="country"
                          className="w-full bg-transparent rounded-[4px] font-roboto font-normal border border-white text-white outline-none placeholder:text-xs px2 py2"
                          placeholder="Enter phone number"
                          autoComplete="none"
                        />
                        {!valid && (
                          <p className="text-xs text-red-500 font-roboto font-normal">
                            Please enter a valid phone number!
                          </p>
                        )}
                      </label>
                    </div>

                    <div className="flex flex-col w-full gap-3">
                      <label className=" flex flex-col gap-1">
                        <p>
                          Subject{" "}
                          <span className="inline-flex text-xs mr-2 font-roboto font-normal">
                            (optional)
                          </span>
                        </p>
                        <input
                          type="text"
                          name="subject"
                          autoComplete="none"
                          className="bg-transparent rounded-[4px] font-roboto font-normal border border-white outline-none placeholder:text-xs px-2 py-2"
                          placeholder="Text"
                        />
                      </label>
                      <div className="flex flex-col gap-1">
                        <label
                          className="flex flex-row gap-1 okay font-roboto font-normal"
                          htmlFor="lastName"
                        >
                          Message
                        </label>
                        <textarea
                          rows="4"
                          required
                          name="message"
                          autoComplete="none"
                          className="bg-transparent rounded-[4px] border font-roboto font-normal border-white outline-none placeholder:text-xs px-2 py-2"
                          placeholder="Text"
                          onInvalid={(e) =>
                            e.target.setCustomValidity(
                              "Please input your message here",
                            )
                          }
                          onInput={(e) => e.target.setCustomValidity("")}
                        />
                      </div>
                      <label className="flex flex-row items-center gap-2">
                        <input type="checkbox" name="yes" className="" />
                        <p className="font-roboto font-normal">
                          Subscribe to news letter
                        </p>
                      </label>
                      <button
                        type="submit"
                        className="w-1/2 ms-auto bg-blue-900 font-semibold py-2 rounded-[4px] font-roboto leading-normal"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <NewsLetter />
            </div>
          </div>
          <Footer />
          <ScrollTop />
        </>
      )}
    </>
  );
};

export default Contact;
