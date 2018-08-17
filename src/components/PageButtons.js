import React from 'react';

const PageButtons = ({handleIncrementPage, handleDecrementPage}) => (
  <div>
    <button className='butt' onClick={() => handleDecrementPage()}>Back</button>
    <button className='butt' onClick={() => handleIncrementPage()}>Forward</button>
  </div>
);

export default PageButtons;
