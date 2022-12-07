import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from "./Review";

const Testimonial = () => {
     const reviews =[
          {    _id : 1,
               name : "Harry",
               review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquid quae, rerum voluptas recusandae veUllam beatae sit aliquid ex quisquam",
               img : people1,
               location : 'DHAKA' 

          },
          {    _id : 2,
               name : "Parry",
               review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquid quae, rerum voluptas recusandae veUllam beatae sit aliquid ex quisquam",
               img : people2,
               location : 'KHULNA' 

          }, 
          {    _id : 3,
               name : "Barry",
               review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquid quae, rerum voluptas recusandae veUllam beatae sit aliquid ex quisquam",
               img : people3,
               location : 'BARISAL' 

          }
     ]

     return (
          <section className="my-28">
               <div className='flex justify-between'>
                    <div>
                         <h1 className='text-2xl font-bold text-cyan-400 py-5 px-4'>Testimonial</h1>
                         <p className='text-4xl px-4 animate-pulse'>What Our Patients Say?</p>
                    </div>
                    <div>
                         <img  className='h-48 w-40 ' src={quote} alt="" />
                    </div>
               </div>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
               }
               </div>
          </section>
     );
};

export default Testimonial;