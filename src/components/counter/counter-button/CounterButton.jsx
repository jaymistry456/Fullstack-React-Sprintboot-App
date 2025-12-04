import PropTypes from 'prop-types';
import './CounterButton.css';

export default function CounterButton({by, incrementFunction, decrementFunction}) {
  return (
    <div className='Counter'>
      <div>
        <button className='counterButton' onClick={() => incrementFunction(by)}>+{by}</button>
        <button className='counterButton' onClick={() => decrementFunction(by)}>-{by}</button>
      </div>
    </div>
  );
}

CounterButton.propTypes = {
  by: PropTypes.number
}

CounterButton.defaultProps = {
  by: 5
}