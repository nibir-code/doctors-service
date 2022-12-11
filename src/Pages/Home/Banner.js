
import chair from '../../../src/assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import PrimaryButton from "./../Shared/PrimaryButton";
import './Banner.css';



const Banner = () => {

     return (
           <div style=
           {{ backgroundImage: `url(${bg})`
          }} 
           className="hero min-h-screen  hero min-h-screen"  >
            <div className="hero-content flex-col lg:flex-row-reverse">
             <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold animate-pulse text-cyan-400"> Your Smile New Starts </h1>
             
              <br />
              <h1 className="text-5xl font-bold animate-pulse ">Here</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <br />
             <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
        </div>
     );
};

export default Banner;