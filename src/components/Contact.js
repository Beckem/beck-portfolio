import React, { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact() {
  const form = useRef();
  const control = useAnimation();
  const [ref, inView] = useInView();
  const variant = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0, y: 160 },
  };
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

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
    <div className="bg-gradient md:h-screen w-screen">
      <div ref={ref} className="w-[70%] mx-auto py-[20px] md:py-[100px]">
        <motion.h2
          variants={variant}
          initial="hidden"
          animate={control}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="text-3xl md:text-5xl text-center font-semibold text-[#ff7675]"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          variants={variant}
          initial="hidden"
          animate={control}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
          className="text-center mt-4 md:text-lg text-sm text-white drop-shadow"
        >
          My inbox is always open. Whether you have a question or just want to
          say hi, I'll try my best to get back to you!
        </motion.p>

        <div className="flex flex-col md:flex-row md:mt-12 mt-6 gap-4">
          <motion.div
            variants={variant}
            initial="hidden"
            animate={control}
            transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
            className="flex flex-col md:space-y-16 space-y-4 text-white flex-[2]"
          >
            <div className="flex items-center space-x-6">
              <div className="contact-icon-container">
                <LocationMarkerIcon className="contact-icon" />
              </div>
              <div className="md:text-lg text-sm">Bac Ninh, Viet Nam</div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="contact-icon-container">
                <MailIcon className="contact-icon" />
              </div>
              <div className="md:text-lg text-sm">quyhaphu01@gmail.com</div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="contact-icon-container">
                <PhoneIcon className="contact-icon" />
              </div>
              <div className="md:text-lg text-sm">+84-889912777</div>
            </div>
          </motion.div>

          <motion.form
            variants={variant}
            initial="hidden"
            animate={control}
            transition={{ ease: "easeOut", duration: 0.5, delay: 1.5 }}
            ref={form}
            className="flex flex-col flex-[3] md:space-y-8 space-y-4"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="input-contact"
              required
            />

            <div className="flex flex-col md:flex-row justify-between gap-4">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input-contact flex-1"
                required
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
              rows={7}
              placeholder="Message"
              name="message"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="bg-green-400 w-max px-10 py-3 text-lg rounded-full text-white cursor-pointer hover:bg-green-600 md:mx-0 mx-auto"
            />
          </motion.form>
        </div>
      </div>
      <ToastContainer />

      <Footer />
    </div>
  );
}

export default Contact;
