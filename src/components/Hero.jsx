import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-48 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Ayushpal01", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Web Summarizer with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Summarize your results with Webrizer, an open-source text summarizer
        that provides you with a crisp summary of your article and web pages.
      </h2>
    </header>
  );
};

export default Hero;
