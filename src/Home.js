import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import Header from './components/Header';

const Home = (props) => {
  return (
    props.car.map((car , index) => {
        return (
      <div className="boxes">
      <div className="boxesHome" key={index}>
      <div className="box">
        <Header car={car} />
        <Link to={`/selected/${car.name}`}><button>Show more</button></Link>
      </div>
    </div>
    </div>
        )
    })
  );
};

const mapStateToProps = (state) => {
	return {
	car : state.car,
    additionalPrice : state.additionalPrice
	}
}

export default connect( mapStateToProps , {} )(Home); // function currying
