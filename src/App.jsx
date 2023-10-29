import IMAGES from './img/image.js'
import popularDestinations from './data/popularDestinations.js';
import DestinationCard from "./components/DestinationCard";


function App() {
  return (
    <div>
      <div className=" lg:bg-yellow-400 xl:bg-blue-500 2xl:bg-red-500 grid lg:grid-cols-2">
        <div className='bg-gray-300'>
          <div className="py-10 px-8 w-xs m-auto sm:max-w-3xl sm:px-14 md:max-w-[950px] md:px-16">
            <img className="w-40 sm:w-52 md:w-64" src="img/logo.svg" alt="work cation logo" />
            <img src={ IMAGES.beach} alt="" className='mt-4 rounded-lg shadow-md sm:rounded-xl sm:mt-6 md:rounded-3xl lg:hidden'/>
            <h1 className='mt-5 uppercase font-bold text-base text-gray-800 sm:text-3xl md:text-[40px] md:mt-6 lg:text-[27px]'> 
              Trade Cryptocurrencies <br /> <span className='text-indigo-600  '>with Confidence</span>
            </h1>
            <p className='text-gray-800 text-justify text-sm mt-2 sm:text-lg sm:mt-3 md:text-2xl md:mt-4 lg:text-left'>
              Welcome to your trusted platform for cryptocurrency trading. At CoinApp, we empower you to trade cryptocurrencies with confidence, offering a secure and user-friendly environment to explore the exciting world of digital assets.
            </p>
            <div>
              <a className='mt-4 inline-block bg-indigo-600 py-2 px-4 uppercase font-semibold shadow-md  text-sm text-white rounded-lg transition transform hover:-translate-y-0.5 hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-300 active:bg-indigo-700 tracking-wider sm:px-6 sm:py-4 sm:text-2xl sm:rounded-xl md:mt-6 lg:py-5 lg:px-6' href="#">book your escape</a>
            </div>
          </div>
        </div>

        <div className="col2 hidden lg:block">
            <img className='w-full h-full object-cover object-center
            ' src={IMAGES.beach} alt="" />
          </div>
      </div>

      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {popularDestinations.map((destination) => (
            <DestinationCard destination={destination} key={destination.city} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
