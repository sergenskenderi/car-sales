import React from 'react';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.car.additionalPrice}</h4>
    </div>
  );
};

export default Total;
