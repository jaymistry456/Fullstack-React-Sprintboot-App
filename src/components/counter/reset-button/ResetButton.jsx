import './ResetButton.css'

export default function ResetButton({resetFunction}) {
  return (
    <div className='Reset'>
      <div>
        <button className='resetButton' onClick={resetFunction}>Reset</button>
      </div>
    </div>
  );
}