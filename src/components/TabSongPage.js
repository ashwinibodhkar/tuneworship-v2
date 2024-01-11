import React from 'react'
import "./../App.css";

export default function TabSongPage() {
    return (
        <>
         <div className="grid grid-rows-1 grid-flow-col">
            <div class="grid grid-cols-1 " >
                <div role="tablist" className="tabs tabs-bordered">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab pl-0" aria-label="Chords" checked/>
                    <div role="tabpanel" className="tab-content py-10 whitespace-pre-line ...">Lyrics With Chords 
                    {/* <pre> */}
                    Em                                 D
                    Dil mein basa liya hai tujhko,

                    Am                                      Em
                    Rooh mein samaa liya hai tujhko.                    

                            Em                   D
                    Teri tareef ho, Teri tareef ho, 

                            C        B          Em
                    Teri tareef ho, Aye Yeshu.

                    Em                           D
                    Mere liye tu mara, Mere liye tu gadha,

                    C                                   B             Em
                    Yeshu tu kaisa piya, lahoo se mol liya.

                    Em                                 D
                    Dil mein basa liya hai tujhko,

                    Am                                      Em
                    Rooh mein samaa liya hai tujhko.                    

                            Em                   D
                    Teri tareef ho, Teri tareef ho, 

                            C        B          Em
                    Teri tareef ho, Aye Yeshu.

                    Em                           D
                    Mere liye tu mara, Mere liye tu gadha,

                    C                                   B             Em
                    Yeshu tu kaisa piya, lahoo se mol liya.

                    Em                                 D
                    Dil mein basa liya hai tujhko,

                    Am                                      Em
                    Rooh mein samaa liya hai tujhko.                    

                            Em                   D
                    Teri tareef ho, Teri tareef ho, 

                            C        B          Em
                    Teri tareef ho, Aye Yeshu.

                    Em                           D
                    Mere liye tu mara, Mere liye tu gadha,

                    C                                   B             Em
                    Yeshu tu kaisa piya, lahoo se mol liya.

                    Em                                 D
                    Dil mein basa liya hai tujhko,

                    Am                                      Em
                    Rooh mein samaa liya hai tujhko.                    

                            Em                   D
                    Teri tareef ho, Teri tareef ho, 

                            C        B          Em
                    Teri tareef ho, Aye Yeshu.

                    Em                           D
                    Mere liye tu mara, Mere liye tu gadha,

                    C                                   B             Em
                    Yeshu tu kaisa piya, lahoo se mol liya.


                    {/* </pre> */}
                    </div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Lyrics"  />
                    <div role="tabpanel" className="tab-content py-10">Without Chords ....lyrics only</div>
                    {/* <h4 className='text-lg text-right'>Transpose</h4> */}
                </div>
                
            </div>
        </div>
        
       
        </>
    )
}