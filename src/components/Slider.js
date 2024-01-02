import React from 'react'
import "./../App.css";

export default function Slider() {
    return (
        <>
        <div className='bg-black py-4'>
        <div className="container mx-auto px-4 grid grid-rows-1 grid-flow-col">
            <div class="grid grid-cols-2 xl:grid-cols-2" >
                <div>
                    <h1 className='text-2xl '>Category</h1>
                </div>
                {/* <div>
                    <h4 className='text-lg text-right'> see more</h4>
                </div> */}
            </div>
        </div>


        <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div class="grid" >
        
                <div className="grid grid-rows-1 grid-flow-col gap-4 py-4">
                    <div class="grid" >

                    <div className="carousel carousel-center   p-4 space-x-4">
                    <div className="carousel-item  ">
                        <img src="https://i.ytimg.com/vi/sRG4XRqViOs/maxresdefault.jpg" className="rounded-box w-full" />
                    </div> 
                    <div className="carousel-item ">
                        <img src="https://i.ytimg.com/vi/sRG4XRqViOs/maxresdefault.jpg" className="rounded-box w-full" />
                    </div> 
                    <div className="carousel-item ">
                        <img src="https://i.ytimg.com/vi/sRG4XRqViOs/maxresdefault.jpg" className="rounded-box w-full" />
                    </div> 
                    <div className="carousel-item ">
                        <img src="https://i.ytimg.com/vi/sRG4XRqViOs/maxresdefault.jpg" className="rounded-box w-full" />
                    </div> 
                    <div className="carousel-item ">
                        <img src="https://i.ytimg.com/vi/sRG4XRqViOs/maxresdefault.jpg" className="rounded-box w-full" />
                    </div> 
                    <div className="carousel-item ">
                        <img src="https://i.ytimg.com/vi/sRG4XRqViOs/maxresdefault.jpg" className="rounded-box w-full" />
                    </div> 
                    <div className="carousel-item ">
                        <img src="https://i.ytimg.com/vi/sRG4XRqViOs/maxresdefault.jpg" className="rounded-box w-full" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div> 
        </div> 
        </>
    )
}