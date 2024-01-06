
import React from 'react'
import Navbar from '../components/Navbar';
import Category from '../components/Category';
import Slider from '../components/Slider';
import Artist from '../components/Artist';
import MostPlayed from '../components/MostPlayed';
import Advertise from '../components/Advertise';
import Carosel from '../components/carosel';
import BottomNav from '../components/BottomNav';



export default function App() {
  return (
    <><React.StrictMode>
      <Navbar />

      <Carosel />
      <Slider />
      <div className="container mx-auto px-4">
        <Category />
        <MostPlayed />
        <Artist />
        <Advertise />
        <BottomNav />
      </div>
      {/* <App /> */}
    </React.StrictMode>
    
    {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Layout />} />
            <Route path="blogs" element={<Song />} />

          </Route>
        </Routes>
      </BrowserRouter> */}
      
      </>
  )
}
