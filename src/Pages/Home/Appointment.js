import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from "../../assets/images/appointment.png";

const Appointment = () => {
     return (
         <section style={
          {
               background : `url(${appointment})`
          }
         } className="flex items-center" >
         <div className='flex-1 lg:block'>
              <img className="mt-[-150px]" src={doctor} alt="" />
         </div>
         <div className="flex-1">
              <p className='text-cyan-400 font-bold text-2xl'>Appointment</p>
              <h1 className='text-4xl text-white'>Make an Appointment Today</h1>
              <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Dignissimos assumenda libero quas possimus. Eveniet ducimus 
              odio, obcaecati magni commodi aliquid, delectus a numquam unde 
              illo voluptatem laudantium! Culpa, delectus fugit?</p>
              
              <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-blue-500 to-cyan-500">Get Started</button>
         </div>
 </section>
     );
};

export default Appointment;