
import React from 'react'
import Navbar from '../components/Navbar';
import {
	FaYoutube,
  FaSearchPlus,
} from "react-icons/fa"
import TabSongPage from '../components/TabSongPage';
import Advertise from '../components/Advertise';

export default function song() {
  return (
    <>
    <Navbar />
      <div className="container mx-auto px-4">
        <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div class="grid md:grid-cols-1 xl:grid-cols-2" >
              <div>
                <div>
                  <img src="https://quotesbook.com/quotes/music-quotes/unknown-authors/music-is-life-thats-why-our-hearts-have-beats-2560x1440-2160.jpg" alt="car!" />
                  <h2>Title of Song</h2>
                  <h4>Artist Name</h4>
                </div>
                


                <div className="grid grid-rows-1 grid-flow-col gap-4 py-2">
                  <div class="grid grid-cols-2 " >
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-left">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                      </svg>
                      <FaYoutube className='w-6 h-6 mx-3 float-left'></FaYoutube>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-left">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                      </svg>
                    </div>
                          
                    <div class="justify-self-end ...">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                      </svg>
                    </div>
                        
                  </div>
                </div>

                <div>
                  <TabSongPage />
                </div>

                
              </div>

              <div className='lg:pl-12 md:pl-0 '>
                <div className='h-54 self-start shadow-2xl shadow-slate-500/40 w-full' >
                <iframe width="100%" height="318" src="https://www.youtube.com/embed/fEwDx8YJndU?si=v3q74ciIHJyG__p5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='self-end'>
                <Advertise />
                </div>
               
              </div> 


            </div>
                  
                           
        </div>
        {/* Bottom Nav for song page */}
        <div className="btm-nav btm-nav-lg shadow-2xl rounded-t-lg ... lg:invisible md:visible w-full z-40">
          <div class="grid grid-cols-3 justify-items-center ..." >
            <div>
              <h4 className="float-left">Transpose</h4>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-left">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-left">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>

            <div>
              <h4>Sharp</h4>
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
    </div>
    </>
  )
}
