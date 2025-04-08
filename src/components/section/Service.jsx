import React from 'react'
import Read from '../button/Read'
import data from '../../components/data/service.json';
function Service() {
    return (
  
        <div className="bg-black">

            <div className='flex space-between  gap-6   p-8'>
                {data.services.map(item => {
                    return (<div className=' rounded-md bg-black text-white h-48 p-6 ' key={item.id}>
                        <h2 classNama="text-3xl font-semibold ">{item.titre}</h2>
                        <p className='mt-6'>{item.description}</p>
                        <Read value={item.btntext} url={item.url} />
                    </div>)
                }
                )}  
            </div>
        </div>
 
    )
}

export default Service;