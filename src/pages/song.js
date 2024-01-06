
import React from 'react'
import Navbar from '../components/Navbar';
import Category from '../components/Category';
import Slider from '../components/Slider';
import Artist from '../components/Artist';
import MostPlayed from '../components/MostPlayed';
import Advertise from '../components/Advertise';
import Carosel from '../components/carosel';
import BottomNav from '../components/BottomNav';



export default function song() {
  return (
    <>
    <Navbar />
      <div className="container mx-auto px-4">
        <div className="grid grid-rows-1 grid-flow-col">
            <div class="grid md:grid-cols-1 xl:grid-cols-2" >
                <div>
                    <img src="https://quotesbook.com/quotes/music-quotes/unknown-authors/music-is-life-thats-why-our-hearts-have-beats-2560x1440-2160.jpg" alt="car!"/>
                </div>
                <div>
                    <h4 className='text-lg text-right'> see more</h4>
                </div>
            </div>
        </div>
      </div>

    </>
  )
}
