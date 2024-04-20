"use client"
import { useRouter } from 'next/navigation';
import ActiveCampaigns from './components/ActiveCampaigns';
import Link from 'next/link';
import PricingCard from './components/PricingCard';

export default function Home() {
  const router = useRouter()
  return (
    // min-h-screen
    <main className="flex flex-col items-center justify-between  ">


      {/* <div className="flex flex-col justify-center items-center h-full mb-20">
        <h1 className="text-center text-2xl font-semibold">Coming soon...</h1>
        <h1 className="text-center font-light md:mb-20 sm:mb-40">Under maintenance</h1>
        <button onClick={() => { router.replace("/createcampaign") }} className="text-center bg-blue-400 p-2 mt-5 rounded-md  transition-colors font-medium hover:border-2 hover:border-gray-300 hover:bg-blue-300">Create Compagian<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span></button>
      </div> */}


      <div className="w-full bg-gray-200 mb-10 rounded-md p-4 py-10 " style={{ height: "50vh" }}>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-2xl font-semibold">Coming soon..!</h1>
          <h1 className="text-center font-light ">Under maintenance</h1>
        </div>
        <div className="flex flex-col r items-center">

          <h1 className='text-4xl m-2 mt-5'>Welcome to </h1>
          <h1 className='text-4xl font-bold'>ShareLight </h1>
          <div className="flex items-center text-center mt-10 gap-2 flex-wrap">
            <div className="flex flex-col">
              <button onClick={() => { router.replace("/createcampaign") }} className="text-xl2 py-2 px-4 text-white hover:text-black bg-green-600 rounded-md hover:cursor-pointer hover:bg-white hover:border-2">Create Compagian </button>
              <hr className="border-2 border-gray-300 w-20 mt-2 rounded-full" />
            </div>

            <div className="flex flex-col">
              <button onClick={() => { router.replace("/explore") }} className="text-xl2 py-2 px-4 bg-blue-500 text-white hover:text-black rounded-md hover:cursor-pointer hover:bg-white hover:border-2">Explore Compagian! </button>
              <hr className="border-2 border-gray-300 w-20 mt-2 rounded-full" />
            </div>

          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center">

        <h1 className="text-xl2 py-2 px-4 font-bold bg-green-500 rounded-full hover:cursor-pointer hover:bg-white hover:border-2">Active Compaigns </h1>
        <hr className="border-2 border-gray-200 w-20 mt-2 rounded-full" />

      </div>

      <div className="flex flex-wrap justify-center my-10">
        <ActiveCampaigns />
        <ActiveCampaigns />
        <ActiveCampaigns />
        <ActiveCampaigns />
        <ActiveCampaigns />
        <ActiveCampaigns />
        <ActiveCampaigns />
        <ActiveCampaigns />
        <ActiveCampaigns />
        <ActiveCampaigns />
        <ActiveCampaigns />
        <ActiveCampaigns />
        <ActiveCampaigns />
        <ActiveCampaigns />
        <ActiveCampaigns />
      </div>

      <div className="flex flex-col items-center text-center my-10">

        <h1 className="text-xl2 py-2 px-4 font-bold bg-green-500 rounded-full hover:cursor-pointer hover:bg-white hover:border-2">Pricing</h1>
        <hr className="border-2 border-gray-200 w-20 mt-2 rounded-full" />

      </div>
        <div className="flex flex-wrap items-center justify-center">
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>

      <div className="flex flex-col items-center text-center my-10">

        <h1 className="text-xl2 py-2 px-4 font-bold bg-green-500 rounded-full hover:cursor-pointer hover:bg-white hover:border-2">Contact Us!</h1>
        <hr className="border-2 border-gray-200 w-20 mt-2 rounded-full" />

      </div>
      <Link href={`tel:+919645917277`} ><h1>+91 96459 17277</h1></Link>
      <Link href={`mail:muhammedafsalch7@gmail.com`} ><h2>muhammedafsalch7@gmail.com</h2></Link>

      <div className="flex flex-col items-center text-center my-20">

        <h1 className="text-xl2 py-2 px-4 font-bold bg-green-500 rounded-full hover:cursor-pointer hover:bg-white hover:border-2">Learn More </h1>
        <hr className="border-2 border-gray-200 w-20 mt-2 rounded-full" />

      </div>

      <div className="mb-32 gap-2 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about sharethelight features and API.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about sharethelight in an interactive course with&nbsp;questions!
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Support{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter for sharethelight.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contact{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Contact our community sharethelight and get connected with us!
          </p>
        </a>
      </div>
    </main>
  );
}
