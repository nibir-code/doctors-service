import React, { useState } from 'react';
import doctorAppointment from '../../assets/images/doctorAppointment.jpg'
import bg2 from '../../assets/images/bg2.jpg';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = () => {
     
     const[date,setDate] = useState(new Date());
     return (
          <div 
          style={
               {
                    background : `url(${bg2})`,
                    backgroundSize : 'cover'
               }
          }
          className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={doctorAppointment} className="max-w-sm rounded-lg shadow-2xl" />
            <div >
                <DayPicker
                mode='single'
                selected={date}
               onSelect={setDate} 
                />
                <p className='px-5 font-bold'>You selected {format(date, 'PP')}</p>
            </div>
          </div>
        </div>
     );
};

export default AppointmentBanner;