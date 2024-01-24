import React from 'react'
import "./../App.css";
export default function SongPageBottomNav() {
    return (
        <>
         <div className="btm-nav btm-nav-lg shadow-2xl rounded-t-lg ... lg:invisible md:visible w-full z-40">
          <div class="grid grid-cols-4 justify-items-center ..." >
            <div >
              <h4 className="text-center">C</h4>
              <p>Key</p>
            </div>
            
            <div className="items-center">   
            <div className="text-center m-auto">         
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-left">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-right">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div> 
            <p className="">Transpose</p>
            </div>

            <div>
              <h4 className="text-center">#/d</h4>
              <p>Sharp</p>
            </div>
            
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-left">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6" />
              </svg>
            </div>

          </div>


        </div>
        </>
    )
}