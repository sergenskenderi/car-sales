import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.car.additionalFeatures.length ? (
        <ol type="1">
          {props.car.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} car={props.car}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
