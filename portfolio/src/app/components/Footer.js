import Link from 'next/link';
import React from 'react'
import Template from './Template';

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-darkPurple
    font-medium text-lg
    "
    >
      <Template className="py-8 flex items-center justify-between  text-darkPurple">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center'>
          Build with <span className="text-cordovan text-2xl px-1 ">&#9825;</span>by&nbsp;
          <Link href="/" target='blank'>Eman</Link>
        </div>
        <Link href="/">Say Hello</Link>
      </Template>
    </footer>
  );
}

export default Footer