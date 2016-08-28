import * as React from 'react';
const connect = require('react-redux').connect;

import { increment, decrement } from '../actions/counter';
import Counter from '../components/counter';
import Container from '../components/container';
import {Counter as CounterModel} from '../reducers/counter';

interface ICounterPageProps extends React.Props<any> {
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
};

function mapStateToProps(state : { counter : CounterModel }) {
  return {
    counter: state.counter.value
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: (): void => dispatch(increment()),
    decreaseCounter: (): void  => dispatch(decrement()),
  };
}

class CounterPage extends React.Component<ICounterPageProps, void> {
  render() {
    const { counter, increaseCounter, decreaseCounter } = this.props;
 
    return (
      <Container testid="counter" size={2} center>
      <h2
        data-testid="counter-heading"
        className="center caps"
        id="qa-counter-heading">
        Counter
      </h2>

      <Counter
        counter={ counter }
        increment={ increaseCounter }
        decrement={ decreaseCounter } />
    </Container>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);
