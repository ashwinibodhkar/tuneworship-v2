import React from 'react'
import "./../App.css";
export default function Drawer() {
    return (
        <>
        <div className='py-4'>

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
                    

                    <ul className="menu p-0 w-80 min-h-full bg-base-200 text-base-content"> 
                        <li className="w-full p-4 bg-black text-center">PROFILE</li>

                        <div className="nameOfUser w-full h-6">
                        <li><a href="./../pages/song.js">Sidebar Item 1</a></li>
                        <li><a href="/">Sidebar Item 2</a></li>
                        </div> 


                        <li><a href="./../pages/song.js">Sidebar Item 1</a></li>
                        <li><a href="/">Sidebar Item 2</a></li>
                        
                    </ul>
                </div>
            </div> 















            {/* <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="nameOfUser w-full h-6">
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        Sidebar content here
                         <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        
                        </ul>
                    </div> 

                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content"> */}
                    {/* Sidebar content here */}
                    

                    {/* <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    
                    </ul>
                </div> 
            </div> */}




        </div>
        </>
        )
}