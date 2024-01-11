import React from 'react'
import "./../App.css";

export default function TabSongPage() {
    return (
        <>
         <div className="grid grid-rows-1 grid-flow-col">
            <div class="grid grid-cols-1 " >
                <div role="tablist" className="tabs tabs-bordered">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab pl-0" aria-label="Chords" />
                    <div role="tabpanel" className="tab-content py-10">Lyrics With Chords lorem epsum Build Your Own Startup With React
Let me send you the list of 5 profitable startup ideas. They're easy to build and can earn you thousand of dollars each month.

Email address

Author
Hi! I'm Bernard, owner and author of this blog. In my free time, I like to build micro startups using React and NextJS.
Lyrics With Chords lorem epsum Build Your Own Startup With React
Let me send you the list of 5 profitable startup ideas. They're easy to build and can earn you thousand of dollars each month.

Email address

Author
Hi! I'm Bernard, owner and author of this blog. In my free time, I like to build micro startups using React and NextJS.
Lyrics With Chords lorem epsum Build Your Own Startup With React
Let me send you the list of 5 profitable startup ideas. They're easy to build and can earn you thousand of dollars each month.

Email address

Author
Hi! I'm Bernard, owner and author of this blog. In my free time, I like to build micro startups using React and NextJS.
Lyrics With Chords lorem epsum Build Your Own Startup With React
Let me send you the list of 5 profitable startup ideas. They're easy to build and can earn you thousand of dollars each month.

Email address

Author
Hi! I'm Bernard, owner and author of this blog. In my free time, I like to build micro startups using React and NextJS.  
Lyrics With Chords lorem epsum Build Your Own Startup With React
Let me send you the list of 5 profitable startup ideas. They're easy to build and can earn you thousand of dollars each month.

Email address

Author
Hi! I'm Bernard, owner and author of this blog. In my free time, I like to build micro startups using React and NextJS.
Lyrics With Chords lorem epsum Build Your Own Startup With React
Let me send you the list of 5 profitable startup ideas. They're easy to build and can earn you thousand of dollars each month.

Email address

Author
Hi! I'm Bernard, owner and author of this blog. In my free time, I like to build micro startups using React and NextJS.
                    </div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Lyrics" checked />
                    <div role="tabpanel" className="tab-content py-10">Without Chords ....lyrics only</div>
                    {/* <h4 className='text-lg text-right'>Transpose</h4> */}
                </div>
                
            </div>
        </div>
        
       
        </>
    )
}