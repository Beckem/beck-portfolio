import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
function Contact() {
  const form = useRef();

  const sendEmailSuccess = () =>
    toast("🦄 Message has been sent!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const sendEmailError = () =>
    toast("❗Oops! Something went wrong! Try again", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_EMAIL_ID,
        process.env.REACT_APP_TEMPLATE_EMAIL_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_EMAIL_KEY
      )
      .then(
        (result) => {
          sendEmailSuccess();
        },
        (error) => {
          sendEmailError();
        }
      );

    form.current.reset();
  };

  return (
    <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] h-screen w-screen">
      <div className="w-[70%] mx-auto py-[100px]">
        <h2 className="text-5xl text-center font-semibold text-[#ff7675]">
          Get In Touch
        </h2>
        <p className="text-center mt-4 text-lg text-white drop-shadow">
          My inbox is always open. Whether you have a question or just want to
          say hi, I'll try my best to get back to you!
        </p>

        <div className="flex mt-12">
          <div className="flex flex-col space-y-16 text-white flex-[2]">
            <div className="flex items-center space-x-6">
              <div className="h-16 w-16 rounded-full bg-green-400 relative">
                <LocationMarkerIcon className="h-8 w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="text-lg">Bac Ninh, Viet Nam</div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="h-16 w-16 rounded-full bg-green-400 relative">
                <MailIcon className="h-8 w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="text-lg">quyhaphu01@gmail.com</div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="h-16 w-16 rounded-full bg-green-400 relative">
                <PhoneIcon className="h-8 w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="text-lg ">+84-889912777</div>
            </div>
          </div>

          <form
            ref={form}
            className="flex flex-col flex-[3] space-y-8"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="input-contact"
            />

            <div className="flex justify-between space-x-6">
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="input-contact flex-1"
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                className="input-contact flex-1"
              />
            </div>

            <textarea
              className="input-contact rounded-xl"
              rows={8}
              placeholder="Message"
              name="message"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="bg-green-400 w-max px-10 py-3 text-lg rounded-full text-white cursor-pointer hover:bg-green-600"
            />
          </form>
        </div>
      </div>
      <ToastContainer />

      <Footer />
    </div>
  );
}

export default Contact;
