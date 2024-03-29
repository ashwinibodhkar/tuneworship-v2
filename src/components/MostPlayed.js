import React from 'react'
import "./../App.css";
export default function MostPlayed() {
    return (
        <>
        <div className='py-4'>
            <div className="grid grid-rows-1 grid-flow-col">
                <div class="grid grid-cols-2 xl:grid-cols-2" >
                    <div>
                        <h1 className='text-2xl '>Most Popular</h1>
                    </div>
                    <div>
                        <h4 className='text-lg text-right'> see more</h4>
                    </div>
                </div>
            </div>


            <div className="grid grid-rows-1 grid-flow-col py-4">
                <div class="grid grid-cols-2 xl:grid-cols-3 gap-5" >

                    <div className="grid grid-cols-4 card card-side bg-base-100 shadow-xl bg-black">
                        <div><img src="https://www.jardiner-malin.fr/wp-content/uploads/2018/06/dahlia.jpg" alt="Movie" className="w-full"/></div>
                        <div className="col-span-3 ... card-body w-full p-2">
                            <h5 className="card-title">New movie is released!</h5>
                            <p className='text-sm'>Click the button to watch on Jetflix app.</p>
                            
                        </div>
                    </div>

                    <div className="grid grid-cols-4 card card-side bg-base-100 shadow-xl bg-black">
                        <div><img src="https://www.jardiner-malin.fr/wp-content/uploads/2018/06/dahlia.jpg" alt="Movie" className="w-full"/></div>
                        <div className="col-span-3 ... card-body w-full p-2">
                            <h5 className="card-title">New movie is released!</h5>
                            <p className='text-sm'>Click the button to watch on Jetflix app.</p>
                            
                        </div>
                    </div>

                    <div className="grid grid-cols-4 card card-side bg-base-100 shadow-xl bg-black">
                        <div><img src="https://www.jardiner-malin.fr/wp-content/uploads/2018/06/dahlia.jpg" alt="Movie" className="w-full"/></div>
                        <div className="col-span-3 ... card-body w-full p-2">
                            <h5 className="card-title">New movie is released!</h5>
                            <p className='text-sm'>Click the button to watch on Jetflix app.</p>
                            
                        </div>
                    </div>

                    <div className="grid grid-cols-4 card card-side bg-base-100 shadow-xl bg-black">
                        <div><img src="https://www.jardiner-malin.fr/wp-content/uploads/2018/06/dahlia.jpg" alt="Movie" className="w-full"/></div>
                        <div className="col-span-3 ... card-body w-full p-2">
                            <h5 className="card-title">New movie is released!</h5>
                            <p className='text-sm'>Click the button to watch on Jetflix app.</p>
                            
                        </div>
                    </div>

                    <div className="grid grid-cols-4 card card-side bg-base-100 shadow-xl bg-black">
                        <div><img src="https://www.jardiner-malin.fr/wp-content/uploads/2018/06/dahlia.jpg" alt="Movie" className="w-full"/></div>
                        <div className="col-span-3 ... card-body w-full p-2">
                            <h5 className="card-title">New movie is released!</h5>
                            <p className='text-sm'>Click the button to watch on Jetflix app.</p>
                            
                        </div>
                    </div>



                    <div className="grid grid-cols-4 card card-side bg-base-100 shadow-xl bg-black">
                        <div><img src="https://www.jardiner-malin.fr/wp-content/uploads/2018/06/dahlia.jpg" alt="Movie" className="w-full"/></div>
                        <div className="col-span-3 ... card-body w-full p-2">
                            <h5 className="card-title">New movie is released!</h5>
                            <p className='text-sm'>Click the button to watch on Jetflix app.</p>
                            
                        </div>
                    </div>


                </div>
            </div>
        </div>
        </>
    )
}