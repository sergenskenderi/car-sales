import React from 'react';
import {connect} from "react-redux";
import {addFeature} from "../actions/carFeaturesActions";

const AdditionalFeature = props => {
  var added = false;
  
  if(props.selectedCar.features.find(item => item === props.feature)){
    added = true;
    console.log("props.car.features",props.selectedCar.features);
    console.log("props.feature.name",props.feature.name);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.feature)} className="button" disabled={added}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
	return {
	car : state.car,
	}
}

export default connect(mapStateToProps , {addFeature})(AdditionalFeature);
