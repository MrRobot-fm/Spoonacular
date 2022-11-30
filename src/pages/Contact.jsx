import React, { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useGlobalContext } from '../context';

const Contact = () => {
  const { setNav } = useGlobalContext();
  const form = useRef();

  useEffect(() => {
    setNav(false);
  }, [setNav]);

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dvwh9g2',
        'template_q2knal8',
        form.current,
        'CFzTTibrOp18Lwgbb'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="flex min-h-[90vh]  sm:min-h-screen lg:min-h-[90vh] flex-col bg-emerald-400 justify-center">
      <motion.div
        className="  flex-wrap flex justify-center items-center"
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 1, bounce: 0.5, delay: 0.4 }}
      >
        <Box
          ref={form}
          onSubmit={sendEmail}
          component="form"
          sx={{
            '& > :not(style)': { m: 1.5, width: '14rem' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          autoComplete="on"
          className=" w-ful bg-stone-100 rounded-lg px-8 py-10 md:px-16 shadow-xl"
        >
          <motion.h3
            className="text-xl font-bold text-center pb-7 "
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              duration: 1,
              delay: 0.7,
              bounce: 0.3
            }}
          >
            Send me an email <span className="text-3xl ">📨</span>
          </motion.h3>
          <TextField
            id="outlined-basic"
            type="text"
            name="user_name"
            label="Name"
            variant="outlined"
            required
          />
          <TextField
            id="outlined-basic"
            type="email"
            name="user_email"
            label="Email"
            variant="outlined"
            required
          />
          <TextField
            id="outlined-basic"
            label="Message"
            name="message"
            variant="outlined"
            multiline
            required
          />
          <button
            type="submit"
            className="p-3 rounded-lg bg-yellow-300 hover:bg-yellow-400 hover:scale-105 hover:transition-all font-semibold"
          >
            Send
          </button>
        </Box>
      </motion.div>
    </div>
  );
};

export default Contact;
