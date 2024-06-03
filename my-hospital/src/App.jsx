import Navbar from "./components/Navbar";
import bg from './assets/bg3.jpeg';
import { FaUserDoctor } from "react-icons/fa6";

function App() {
  return (
    <>
      <div className="static">
        <div className='relative' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}></div>
        <div className="absolute backdrop-blur-lg bg-white/40 bottom-20 h-3/6 w-3/6 ml-16 rounded-3xl flex items-center justify-center">
          <button className="bg-blue-600 rounded-full flex items-center px-4 py-2 text-white hover:bg-blue-900 hover:ease-in duration-500 mt-48 mr-64">
            <FaUserDoctor className="mr-2" />
            <span className="text-lg">Make an Appointment</span>
          </button>
        </div>
        <Navbar />
      </div>
      <div className="min-h-screen"></div>
    </>
  );
}

export default App;
