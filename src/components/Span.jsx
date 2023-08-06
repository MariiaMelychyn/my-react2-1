import React from 'react';
 
const Span = ({ handleClick, handleNeutral, handleBad }) => (
<div className="btn">
            <button type="button" className="btn-good" onClick={handleClick}>Good</button>
            <button type="button" className="btn-neutral" onClick={handleNeutral}>Neutral</button>
            <button type="button" className="btn-bad" onClick={handleBad}>Bad</button>
            </div>
  );
  
  export default Span;