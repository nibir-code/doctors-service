import React from 'react';
import Fluoride from '../../../src/assets/images/fluoride.png';
import Cavity from '../../../src/assets/images/cavity.png';
import Whitening from '../../../src/assets/images/whitening.png';
import Service from "./Service";
import treatment from "../../assets/images/treatment.png"
import PrimaryButton from "./../Shared/PrimaryButton";

const Services = () => {
     const services = [
          {
               _id : 1 ,
               name : 'Fluoride Treatment',
               description : 'Very good in service which you get',
               img : Fluoride

          },
          {
               _id : 2 ,
               name : 'Cavity Filling',
               description : 'Very good in service which you get',
               img : Cavity

          },
          {
               _id : 3 ,
               name : 'Fluoride Treatment',
               description : 'Very good in service which you get',
               img : Whitening

          },
     ]
     return (
          
          <div className="my-28">
            <div className="text-center">
            <h1 className="text-cyan-500 font-bold  text-4xl">Our Services</h1>
            <h1 className="font-bold  text-2xl">Service We Provide</h1>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {
                    services.map(service => 
                         <Service 
                         key={service._id}
                         service={service}>
                         </Service>)
               }
            </div>
            <div className="hero min-h-screen ">
           <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-sm rounded-sm rounded-lg shadow-2xl " />
    <div className="py-25">
      <h1 className="text-5xl font-bold ">Exceptional Dental </h1>
      <h1 className="text-5xl font-bold ">Care On Your Term</h1>
      <p className="py-1 ">Provident cupiditate voluptatem et in..</p>
      <p className="py-1 "> Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
      <p className="py- "> In deleniti eaque aut repudiandae et a id nisi</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
          </div>
          
          
     );
};

export default Services;