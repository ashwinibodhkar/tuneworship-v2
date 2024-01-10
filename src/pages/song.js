
import React from 'react'
import Navbar from '../components/Navbar';
import {
	FaYoutube,
} from "react-icons/fa"
import TabSongPage from '../components/TabSongPage';
export default function song() {
  return (
    <>
    <Navbar />
      <div className="container mx-auto px-4">
        <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div class="grid md:grid-cols-1 xl:grid-cols-2" >
                <div>
                    <img src="https://quotesbook.com/quotes/music-quotes/unknown-authors/music-is-life-thats-why-our-hearts-have-beats-2560x1440-2160.jpg" alt="car!" />
                    <h2>Title of Song</h2>
                    <h4>Artist Name</h4>
                </div>
                  
                <div>
                {/* <Advertise /> */}
                </div>                
            </div>
        </div>


        <div className="grid grid-rows-1 grid-flow-col gap-4 py-2">
          <div class="grid md:grid-cols-1 xl:grid-cols-2" >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-left">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-left">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg> */}
              <FaYoutube className='w-6 h-6 mx-3 float-left'></FaYoutube>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-left">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
              </svg>
            </div>
                  
            <div>
                {/* <Advertise /> */}
            </div>
                
          </div>
        </div>

        <div>
          <TabSongPage />
        </div>
      </div>
    </>
  )
}
