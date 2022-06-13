import Head from 'next/head';
import Menu from '../components/discloseure.js';
import Link from 'next/link';
import { Transition } from '@headlessui/react';

import { useState } from 'react';

export default function Home() {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="">
      <Transition show={isShowing}>
        <Transition.Child
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        ></Transition.Child>

        {/* Sliding sidebar */}
        <Transition.Child
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div class="z-[5000] text-white/90 absolute p-4 top-0 left-0 h-[100vh] w-[350px] bg-[#111] ">
            <div className="flex justify-end">
              <button
                className="relative"
                onClick={() => setIsShowing((isShowing) => !isShowing)}
              >
                &times;
              </button>
            </div>
            <h1 className="text-2xl font-black text-center underline">Menu</h1>
          </div>
        </Transition.Child>
      </Transition>

      <Head>
        <title>Create Next App</title>
      </Head>
      <nav className="grid grid-cols-2 items-center h-[75px] w-full bg-[#111] text-white/90">
        <div className="">
          <Link href="/">
            <a className="">
              <h2 className="text-4xl ml-[8%] font-black">Next App</h2>
            </a>
          </Link>
        </div>
        <div className="">
          <button
            className="relative"
            onClick={() => setIsShowing((isShowing) => !isShowing)}
          >
            Toggle
          </button>
        </div>
        <div className=""></div>
      </nav>

      <main className="">
        <h1 className="text-7xl text-center font-black  ">
          Welcome to{' '}
          <a href="https://nextjs.org" className="text-blue-600">
            Next.js!
          </a>
        </h1>
        <Link href="/about">
          <a className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mb-2 w-24  ">
            About ->
          </a>
        </Link>
      </main>

      <footer className="">
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
