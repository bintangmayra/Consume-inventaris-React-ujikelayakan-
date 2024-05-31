import React from 'react';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <div className="lg:w-1/2 lg:float-right">
            <img src="./public/analisis.png" className="mx-auto" alt="Flowbite Logo" />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-500 md:text-5xl lg:text-6xl dark:text-white mt-40">
            Selamat Datang di Inventaris
          </h1>
          <p className="mb-15 text-lg font-normal text-gray-500 lg:text-xl sm:px-10 lg:px-5 dark:text-gray-900">
            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
          </p>

        </div>
      </section>
    </>
  );
}
