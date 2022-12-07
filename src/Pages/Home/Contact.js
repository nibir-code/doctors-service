import React from 'react';
import bg from "../../assets/images/bg.png";
import './Contact.css';

const Contact = () => {
     return (
          
          <div>
               <div className="px-20">
                    <h1 className='text-cyan-400 font-bold text-3xl'>Contact Us</h1>
                    <h1 className='text-4xl font-bold animate-bounce'>Stay Connected With Us</h1>
               </div>
               <div className="hero min-h-screen"
          style=
          {{ 
               backgroundImage: `url(${bg})`
         }} >
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold animate-pulse">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <br />
          <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
     );
};

export default Contact;