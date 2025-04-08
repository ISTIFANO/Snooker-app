import React from 'react';
import snookerTable from '../../assets/images/12345678-1.png';
import snookerCover from '../../assets/images/billiard-table-with-green-surface-and-balls-in-the-billiard-club-pool-game-e1640711989794.jpg';
import Read from "../button/Read";
import { IoIosCheckmarkCircle } from "react-icons/io";

function About() {
    return (
        <>
            <div className='flex bg-black text-white'>
                <div className='relative pr-12'>
                    <img src={snookerCover} alt="snooker" className='w-full' />
                    <img src={snookerTable} alt="snooker" className='absolute top-4 left-6 z-10 rounded-md ' />
                </div>
                <div className='pl-8'>
                    <h2 className='text-3xl font-semibold pb-12'>Senior Writer - An Introduction by Peter Tesh</h2>

                    <p>Snooker is more than just a game; it’s a captivating world of green baize, bright balls, and thrilling matches. It’s a sport that combines skill, excitement, and drama, delighting fans worldwide.</p>

                    <p>Here, we bring you the ultimate snooker resource: live scores, the latest news, and detailed guides on everything from cues to tables and accessories.</p>

                    <p>Join us at The Snooker Site, a place created by enthusiasts for enthusiasts.</p>

                    <ul className='pb-12'>
                        <li className='flex items-center'>
                            <IoIosCheckmarkCircle color='yellow' className='mr-2' />
                            Latest Snooker News
                        </li>
                        <li className='flex items-center'>
                            <IoIosCheckmarkCircle color='yellow' className='mr-2' />
                            "Break-Off" Snooker Blog
                        </li>
                        <li className='flex items-center'>
                            <IoIosCheckmarkCircle color='yellow' className='mr-2' />
                            Snooker Buyer Guides
                        </li>
                    </ul>

                    <Read value="VISIT THE SNOOKER SITE SHOP" url="/shop" />
                </div>
            </div>
        </>
    );
}

export default About;
