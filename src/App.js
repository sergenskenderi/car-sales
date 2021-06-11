import React from 'react';
import {connect} from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  const state = {
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
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

export default connect( mapStateToProps , {} )(App); // function currying
