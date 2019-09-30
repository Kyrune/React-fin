import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, input, inputNumber } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} clicks={this.props.clicks} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onInputNumber={this.props.onInputNumber} onInput={this.props.onInput}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onInputNumber: () => dispatch(inputNumber()),
    onInput: number => dispatch(input(number))
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      clicks: state.clicks,
      addCount: state.addCount
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);