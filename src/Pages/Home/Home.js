import React from 'react';
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import Appointment from "./Appointment";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
     return (
          <div>
              <Banner></Banner>
              <Info></Info>
              <Services></Services>
              <Appointment></Appointment>
              <Testimonial></Testimonial>
              <Contact></Contact>
              <Footer></Footer>
              
          </div>
     );
};

export default Home;