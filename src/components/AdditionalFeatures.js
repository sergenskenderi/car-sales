import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.selectedCar.additionalFeatures.length ? (
        <ol type="1">
          {props.selectedCar.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} selectedCar={props.selectedCar}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
