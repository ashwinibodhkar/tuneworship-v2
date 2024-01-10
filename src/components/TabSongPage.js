import React from 'react'
import "./../App.css";

export default function TabSongPage() {
    return (
        <>
         <div className="grid grid-rows-1 grid-flow-col">
            <div class="grid grid-cols-1 " >
                <div role="tablist" className="tabs tabs-bordered">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab pl-0" aria-label="Chords" />
                    <div role="tabpanel" className="tab-content py-10">Lyrics With Chords</div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Lyrics" checked />
                    <div role="tabpanel" className="tab-content py-10">Without Chords ....lyrics only</div>
                    
                    <input type="radio" name="" className="tab ml-32" aria-label="Transpose"  />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />

                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>


                    {/* <h4 className='text-lg text-right'>Transpose</h4> */}
                </div>
                
            </div>
        </div>
        
       
        </>
    )
}