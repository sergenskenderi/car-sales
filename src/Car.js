import React from 'react';
import {connect} from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { useParams } from 'react-router-dom';

const Car = (props) => {
  const {name} = useParams();
  const car = props.car.find(item => item.name === name);
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={car.additionalFeatures} />
        <Total car={car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
	return {
	car : state.car,
  additionalPrice : state.additionalPrice
	}
}

export default connect( mapStateToProps , {} )(Car); // function currying
