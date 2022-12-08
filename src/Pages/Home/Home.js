import React from 'react';
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import MakeAppointment from "./MakeAppointment";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
     return (
          <div className='px-12'>
              <Banner></Banner>
              <Info></Info>
              <Services></Services>
              <MakeAppointment></MakeAppointment>
              <Testimonial></Testimonial>
              <Contact></Contact>
              <Footer></Footer>
              
          </div>
     );
};

export default Home;