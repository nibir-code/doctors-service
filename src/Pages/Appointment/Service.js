import React from 'react';

const Service = ({service,setTreatment}) => {
     const {name,slots} = service ;
     return (
          <div className="card lg:max-w-lg w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <h1 className='text-cyan-400 text-xl font-bold'>{name}</h1>
            
          </figure>
          <div className="card-body items-center text-center">
          <p>
               {
                    slots.length > 0 ? 
                    <span>{slots[0]}</span>
                    : <span className='text-red-500'>not available</span>
               }
            </p>

            <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
            <div className="card-actions">
              <label 
              onClick={()=>setTreatment(service)} disabled={slots.length === 0} 
              htmlFor="booking-modal" 
              className="btn btn-primary text-white font-bold bg-gradient-to-r from-blue-500 to-cyan-500">Booking Appointment</label>
              </div>
          </div>
        </div>
     );
};

export default Service;