import React, { Component } from 'react';

//Import { connect } from 'react-redux' so we can connect this component to redux
import {connect} from 'react-redux';

//Import action creators from redux
import {increment, decrement} from './ducks/counter';

class Counter extends Component {
  render() {
    //Destruct the action creators from props
    const {currentValue, increment, decrement} = this.props;

    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{currentValue}</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={() => increment(1)}
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={() => increment(5)}
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={() => decrement(1)}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => decrement(5)}
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={true}
              onClick={() => null}
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={true}
              onClick={() => null}
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </section>
      </div>
    );
  }
}

//Write a function to map the redux state to props for the coponent
  //pass in the state as an argument
function mapStateToProps(state){
  return state;
}

//Export the component wrapper by connect
export default connect(mapStateToProps, {increment, decrement})(Counter);
