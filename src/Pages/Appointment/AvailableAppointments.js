import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import Service from "./Service";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({date}) => {
     const [services, setService] = useState([]);
     const [treatment, setTreatment] = useState(null);


     useEffect(()=>{
          fetch('http://localhost:5000/service')
          .then(res => res.json())
          .then(data=> setService(data))
     },[])
     return (
          <div>
               <h1 className='text-center pt-5 pb-2 text-2xl font-bold animate-pulse text-cyan-400'>Available Appointment on {format(date, 'PP')}</h1>
               <h1 className='text-center text-xl font-bold'>Please Select a Service</h1>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                         services.map(service => 
                              <Service 
                              key={service._id} 
                              service={service}
                              setTreatment={setTreatment}
                              >
                              </Service>)
                    }
               </div>
               {
                    treatment && 
                    <BookingModal 
                    date={date} 
                    setTreatment={setTreatment} 
                    treatment={treatment}>
                    </BookingModal>
               }
          </div>
     );
};

export default AvailableAppointments;