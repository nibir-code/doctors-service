import React from 'react';

const PrimaryButton = ({children}) => {
     return (
          <div>
          <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-blue-500 to-cyan-500 ">{children}</button>
          </div>
     );
};

export default PrimaryButton;