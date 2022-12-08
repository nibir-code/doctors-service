import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Appointment = () => {
     return (
         <section style={
          {
               background : `url(${appointment})`
          }
         } className="flex items-center" >
         <div className='flex-1 lg:block'>
              <img className="mt-[-150px] animate-pulse" src={doctor} alt="" />
         </div>
         <div className="flex-1 px-5">
              <p className='text-cyan-400 font-bold text-2xl'>Appointment</p>
              <h1 className='text-4xl text-white animate-pulse py-5'>Make an Appointment Today</h1>
              <p className='text-white py-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Dignissimos assumenda libero quas possimus. Eveniet ducimus 
              odio, obcaecati magni commodi aliquid, delectus a numquam unde 
              illo voluptatem laudantium! Culpa, delectus fugit?</p>
              
              <PrimaryButton>Appointment</PrimaryButton>
         </div>
 </section>
     );
};

export default Appointment;