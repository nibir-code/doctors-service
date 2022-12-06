import React from 'react';
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import Appointment from "./Appointment";

const Home = () => {
     return (
          <div>
              <Banner></Banner>
              <Info></Info>
              <Services></Services>
              <Appointment></Appointment>
              
          </div>
     );
};

export default Home;