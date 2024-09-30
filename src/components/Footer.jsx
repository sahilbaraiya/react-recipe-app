import React from 'react'

function Footer() {
  return (
    // <div className='mt-20'>
    //   <h1 className="h-16 w-full bg-green-600 font-bold flex justify-center p-4 ">Footer</h1>
    // </div>

    <>
      




    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            {/* <h2 className="text-lg font-bold">Your Company</h2> */}
            <p className="text-sm">© {new Date().getFullYear()  } All rights reserved.</p>
          </div>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </>

  )
}

export default Footer