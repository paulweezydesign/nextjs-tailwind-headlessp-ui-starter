import Menu from '../components/menu.js';
import Menu2 from '../components/menu2.js';
import Discloseure from '../components/discloseure.js';
import Link from 'next/link';

export default function About() {
  return (
    <main>
      <div className="container-6xl flex flex-col items-center w-full h-full ">
        <h1 className="text-7xl text-center font-black mb-4">About us</h1>

        <section className="flex flex-row items-center w-full mt-8">
          <div className="mr-8 mt-4"></div>
          <div className="">
            <Link href="/">
              <a className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mb-2 w-24  ">
                Back
              </a>
            </Link>
          </div>
        </section>
        <Discloseure />
      </div>
    </main>
  );
}
