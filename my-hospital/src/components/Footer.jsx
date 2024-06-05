import React from 'react'

const Footer = () => {
    return (
        <>
        <footer>
          <div className='flex flex-col '>
    
    
          <div className="w-auto flex flex-row gap-4 bg-custom-blue  mt-12 ml-7 mr-7 px-7 p-5 rounded-t-3xl">
            <div className="flex flex-col mb-6">
              <img className='w-32 h-32'
                src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/04/hospa_logo_white.svg"
                alt="blank"
                />
              <p className="text-white mt-4">
                Locations:
                <span style={{ color: '#ADB1BC' }}>
                  485 Bayshore Blvd.Ste154,
                  <br /> San Francisco, CA 95124
                </span>
              </p>
              <p className="text-white mt-4">
                Visiting Hours:
                <span style={{ color: '#ADB1BC' }}>
                  <br />Sunday:08:00 AM-10:00 PM 
                  <br /> Monday-Friday:06:00 AM-12:00 AM
                </span>
              </p>
            </div>
            <div className='flex flex-row gap-x-8'>
            <div className="text-white flex flex-col mt-8 ml-7 ">
              <ul className="font-bold">
                <li>Community</li>
              </ul>
              <ul className='mt-7 flex flex-col gap-y-4 text-custom-white'>
                <li>Doctors</li>
                <li>Testimonials</li>
                <li>FAQs</li>
                <li>Blog</li>
                <li>Site Map</li>
              </ul>
            </div>
            <div className="text-white flex flex-col mt-8 ml-7 ">
              <ul className="font-bold">
                <li>About</li>
              </ul>
              <ul className='mt-7 flex flex-col gap-y-4 text-custom-white'>
                <li>Careers</li>
                <li>Education</li>
                <li>About Us</li>
                <li>Areas Of Care</li>
                <li>Volunteers</li>
              </ul>
            </div>
            <div className="text-white flex flex-col mt-8 ml-7 ">
              <ul className="font-bold">
                <li>Support</li>
              </ul>
              <ul className='mt-7 flex flex-col gap-y-4 text-custom-white'>
                <li>Visitor information</li>
                <li>Emergency Care</li>
                <li>Donate</li>
                <li>Online Services</li>
                <li>Pay Your Bills</li>
              </ul>
            </div>
            <div className="text-white flex flex-col mt-8 ml-7 ">
              <ul className="font-bold">
                <li>Trust & Legal</li>
              </ul>
              <ul className='mt-7 flex flex-col gap-y-4 text-custom-white'>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Hospital Stay</li>
    
              </ul>
            </div>
            </div>
          </div>
          <div className='bg-custom-sky ml-7 mr-7 pr-2.5 py-2 mt-0 place-content-center flex '>
            <p><span style={{color:'#020D2B',}}>© Hospa</span> <span style={{color:'#444F65'}}>All Rights Reserved by </span> HiBootstrap</p>
    
          </div>
    
                </div>
                </footer>
        </>
      );
}

export default Footer
