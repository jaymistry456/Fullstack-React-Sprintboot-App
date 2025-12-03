import PropTypes from 'prop-types';
import './CounterButton.css';

export default function CounterButton({by, incrementParentFunction, decrementParentFunction}) {

  function incrementChildFunction(by) {
    incrementParentFunction(by);
  }

  function decrementChildFunction(by) {
    decrementParentFunction(by);
  }

  return (
    <div className='Counter'>
      <div>
        <button className='counterButton' onClick={() => incrementChildFunction(by)}>+{by}</button>
        <button className='counterButton' onClick={() => decrementChildFunction(by)}>-{by}</button>
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