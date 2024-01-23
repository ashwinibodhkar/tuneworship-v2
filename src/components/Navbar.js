import React from 'react'
import "./../App.css";
import Logo from "./../content/image/1.png";
export default function Navbar() {
    return (
    <div class="navbar bg-black mb-5 shadow-xl rounded-b-lg ... shadow-black-400 sticky top-0 ... z-40" >
        <div className="navbar-start w-auto">
            <div className="dropdown">
                <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content btn btn-ghost btn-circle">
                    {/* Page content here */}
                  <label htmlFor="my-drawer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" htmlFor="my-drawer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            

                  </label>
                </div> 
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a href="./../pages/song.js">Sidebar Item 1</a></li>
                    <li><a href="/">Sidebar Item 2</a></li>
                    
                    </ul>
                </div>
                </div>


            {/* <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Homepage</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
            </ul> */}
            </div>
        </div>
        <div className="navbar">
            <a href="/" className="btn btn-ghost text-xl subpixel-antialiased ...">
            <img src={Logo} alt="Movie" className="w-12 rounded-full ..." />
              TuneWorship</a>
        </div>
        <div className="navbar-end">
            
            <button className="btn btn-ghost btn-circle w-full">
            <div className="form-control w-full lg:visible md:invisible sm:invisible">
                <input type="text" placeholder="Search" className="input input-bordered w-full" />
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> */}
            </button>
            <button className="btn btn-ghost btn-circle">
            <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="animate-bounce w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>

                <span className="badge badge-xs badge-Green indicator-item"></span>
            </div>
            </button>
        </div>
        </div>
    )
}