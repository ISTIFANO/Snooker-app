import React from 'react'
import snookerCover from '../../assets/images/army-snooker.jpeg'
function Definition() {

    return (
        <>


            <div className='flex bg-black text-white text- pt-24'>

                <div className='pl-8'>

                    <p>Snooker is more than just a game; it’s a captivating world of green baize, bright balls, and thrilling matches.  It’s a sport that combines skill, excitement, and drama, delighting fans worldwide.</p>

                    <p>Here, we bring you the ultimate snooker resource: live scores, the latest news, and detailed guides on everything from cues to tables and accessories.</p>

                    <p>Join us at The Snooker Site, a place created by enthusiasts for enthusiasts.</p>
                </div>
                <div className='relative pr-56'>
                    <img src={snookerCover} alt="snooker" className='w-full pl-12 rounded-xl' />                </div>
            </div>





        </>)
}

export default Definition