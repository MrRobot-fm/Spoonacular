import React from 'react';
import { BsInstagram, BsFacebook, BsGithub, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 text-center pt-7 text-gray-500 text-sm pb-7 border-t-2 border-slate-300">
        <span>©️ 2022 Federico Migliore. All rights reserved.</span>
        <span>Terms - Privacy Policy</span>
        <div className="text-teal-500">
          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300">
            <a
              href="https://www.facebook.com/federico.migliore.11/"
              target="blank"
            >
              <BsFacebook />
            </a>
          </span>
          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300">
            <a href="https://www.instagram.com/federix_aegon/" target="blank">
              <BsInstagram />
            </a>
          </span>
          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300">
            <a href="https://github.com/Federix87" target="blank">
              <BsGithub />
            </a>
          </span>
          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300">
            <a href="https://wa.me/393289076191" target="blank">
              <BsWhatsapp />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
