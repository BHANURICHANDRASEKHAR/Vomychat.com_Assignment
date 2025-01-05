import React from "react";

const Card = ({ data }) => {
  return (
    <div
      className="main-container w-100 p-2" style={{maxHeight:'300px'}}>
      <div className="mt-1 d-flex align-items-center">
       
        <div className="img-container" style={{ flexShrink: 0, marginRight: "16px" }}>
          <img
            src="https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
      
            alt="Banner"
            
          />
        </div>
        
        <div className="content-container">
          <a href={`https://www.reddit.com${data.name}`} target="_blank" rel="noopener noreferrer"  style={{ textDecoration:'none', color:'white' }}>
          {data.name}
           </a>
          <p className="text-white mt-1" style={{ margin: 0 }}>
            {data.subscribers}&ensp;Members
          </p>
        </div>
      </div>
      
      <div className="mt-3">
         <h6 className="text  "><span className="border-bottom border-3 border-secondary">Description</span></h6>
        <p className="text-white text-center">{data.description}</p>
      </div>
    </div>
  ); 
};

export default Card;
