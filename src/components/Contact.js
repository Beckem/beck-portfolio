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
    <div className="bg-gradient h-screen w-screen">
      <div ref={ref} className="w-[70%] mx-auto py-[100px]">
        <motion.h2
          variants={variant}
          initial="hidden"
          animate={control}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="text-5xl text-center font-semibold text-[#ff7675]"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          variants={variant}
          initial="hidden"
          animate={control}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
          className="text-center mt-4 text-lg text-white drop-shadow"
        >
          My inbox is always open. Whether you have a question or just want to
          say hi, I'll try my best to get back to you!
        </motion.p>

        <div className="flex mt-12">
          <motion.div
            variants={variant}
            initial="hidden"
            animate={control}
            transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
            className="flex flex-col space-y-16 text-white flex-[2]"
          >
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
          </motion.div>

          <motion.form
            variants={variant}
            initial="hidden"
            animate={control}
            transition={{ ease: "easeOut", duration: 0.5, delay: 1.5 }}
            ref={form}
            className="flex flex-col flex-[3] space-y-8"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="input-contact"
              required
            />

            <div className="flex justify-between space-x-6">
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
              rows={8}
              placeholder="Message"
              name="message"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="bg-green-400 w-max px-10 py-3 text-lg rounded-full text-white cursor-pointer hover:bg-green-600"
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
