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


            <div className=" px-4 grid grid-rows-1 grid-flow-col py-4">
                <div class="grid grid-cols-2 xl:grid-cols-3 gap-5" >

                    <div className="card card-side bg-base-100 shadow-xl bg-black">
                        <figure className="w-24"><img src="https://www.jardiner-malin.fr/wp-content/uploads/2018/06/dahlia.jpg" alt="Movie"/></figure>
                        <div className="card-body w-full p-2 place-self-center">
                            {/* <h2 className="card-title">New movie is released!</h2> */}
                            <p className='text-sm'>Click the button to watch on Jetflix app.</p>
                            
                        </div>
                    </div>

                    <div className="card card-side bg-base-100 shadow-xl bg-black">
                        <figure className="w-24"><img src="https://www.jardiner-malin.fr/wp-content/uploads/2018/06/dahlia.jpg" alt="Movie"/></figure>
                        <div className="card-body w-full p-2 place-self-center">
                            {/* <h2 className="card-title">New movie is released!</h2> */}
                            <p className='text-sm'>Click the button to watch on Jetflix app.</p>
                            
                        </div>
                    </div>

                    <div className="card card-side bg-base-100 shadow-xl bg-black">
                        <figure className="w-24"><img src="https://www.jardiner-malin.fr/wp-content/uploads/2018/06/dahlia.jpg" alt="Movie"/></figure>
                        <div className="card-body w-full p-2 place-self-center">
                            {/* <h2 className="card-title">New movie is released!</h2> */}
                            <p className='text-sm'>Click the button to watch on Jetflix app.</p>
                            
                        </div>
                    </div>

                    <div className="card card-side bg-base-100 shadow-xl bg-black">
                        <figure className="w-24"><img src="https://www.jardiner-malin.fr/wp-content/uploads/2018/06/dahlia.jpg" alt="Movie"/></figure>
                        <div className="card-body w-full p-2 place-self-center">
                            {/* <h2 className="card-title">New movie is released!</h2> */}
                            <p className='text-sm'>Click the button to watch on Jetflix app.</p>
                            
                        </div>
                    </div>

                    <div className="card card-side bg-base-100 shadow-xl bg-black">
                        <figure className="w-24"><img src="https://www.jardiner-malin.fr/wp-content/uploads/2018/06/dahlia.jpg" alt="Movie"/></figure>
                        <div className="card-body w-full p-2 place-self-center">
                            {/* <h2 className="card-title">New movie is released!</h2> */}
                            <p className='text-sm'>Click the button to watch on Jetflix app.</p>
                            
                        </div>
                    </div>

                    <div className="card card-side bg-base-100 shadow-xl bg-black">
                        <figure className="w-24"><img src="https://www.jardiner-malin.fr/wp-content/uploads/2018/06/dahlia.jpg" alt="Movie"/></figure>
                        <div className="card-body w-full p-2 place-self-center">
                            {/* <h2 className="card-title">New movie is released!</h2> */}
                            <p className='text-sm'>Click the button to watch on Jetflix app.</p>
                            
                        </div>
                    </div>


                </div>
            </div>
        </div>
        </>
    )
}