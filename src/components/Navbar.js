import React from 'react'
import "./../App.css";
import Logo from "./../content/image/1.png";
import Drawer from "./Drawer";


export default function Navbar() {
    return (
    <div class="navbar bg-black mb-5 shadow-xl rounded-b-lg ... shadow-black-400 sticky top-0 ... z-40" >
        <div className="navbar-start w-auto">            
           {/* sidebar login page start */}
           <Drawer />
           {/* sidebar login page start */}
        </div>

        {/* Logo */}
        <div className="navbar">
            <a href="/" className="btn btn-ghost text-xl subpixel-antialiased">
            <img src={Logo} alt="Movie" className="w-12 rounded-full" />
              TuneWorship</a>
        </div>

        <div className="navbar-end">  
              {/* Desktop searchBar */}
            <button className="btn btn-ghost btn-circle lg:w-full md:w-0 lg:visible md:invisible">
                <div className="form-control w-full fullScreenSearchBar">
                    <input type="text" placeholder="Search" className="input input-bordered w-full" />
                </div>
            </button>

            {/* mobile view searchBar start */}
            <button className="btn btn-ghost btn-circle lg:w-0 md:w-full lg:invisible md:visible" onClick={()=>document.getElementById('my_modal_2').showModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" htmlFor="my_modal_7"  className=" h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>            
            </button>

            <dialog id="my_modal_2" className="modal ">
                <div className="modal-box fixed top-4">
                    <div className="form-control w-full">
                        <input type="text" placeholder="Search" className="input input-bordered w-full" />
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            {/* mobile view searchBar end */}  

            {/* App download option start*/}
            <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="animate-bounce w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                    <span className="badge badge-xs badge-Green indicator-item"></span>
                </div>
            </button>
             {/* App download option end*/}
        </div>
    </div>
    )
}