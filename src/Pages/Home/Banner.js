
import Stethoscope from '../../../src/assets/images/Stethoscope.png';
import bg from '../../assets/images/bg.png';
import PrimaryButton from "./../Shared/PrimaryButton";
import './Banner.css';





const Banner = () => {

     return (
           <div 
           style=
           {{ backgroundImage: `url(${bg})`
          }} 
           className="hero min-h-screen  hero min-h-screen"  >
            <div className="hero-content flex-col lg:flex-row-reverse">
             <img src={Stethoscope}  animate={{ x: 100 }} className="max-w-sm rounded-lg shadow-2xl  bg-transparent rounded-full  " />
            <div>
            
              <h1 className="text-5xl font-bold animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 "> Your Smile New Starts </h1>
             
              <br />
              
              <h1 className="text-5xl font-bold animate-pulse  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Here</h1>
              <p className="py-6 font-medium ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <br />
             <PrimaryButton >Get Started</PrimaryButton>
            </div>
          </div>
        </div>
     );
};

export default Banner;