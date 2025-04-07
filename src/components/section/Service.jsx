import React from 'react'
import Read from '../button/Read'
import data from '../../components/data/service.json';
function Service() {


    return (
        <>
            <div className='flex content-center '>

                {data.services.map(function (item) {
                    <div key={item.id}>
                        <h2 classNama="text-xl font-semibold " >{item.titre}</h2>
                        <p>{item.description}</p>
                        <Read value={item.btntext} url={item.url} />
                    </div>

                })}
            </div >
        </>
    )
}

export default Service;