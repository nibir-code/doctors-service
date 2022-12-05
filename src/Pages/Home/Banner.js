import React from 'react';
import chair from '../../../src/assets/images/chair.png';

const Banner = () => {
     return (
          
           <div className="hero min-h-screen px-12 hero min-h-screen" style={{ backgroundImage: `url("")`}} >
            <div className="hero-content flex-col lg:flex-row-reverse">
             <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Your New Smile Starts</h1>
              <br />
              <h1 className="text-5xl font-bold">Here</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <br />
              <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-blue-500 to-cyan-500">Get Started</button>
            </div>
          </div>
        </div>
     );
};

export default Banner;