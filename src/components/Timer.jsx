import React from 'react';
import Actions from './Actions';
import Progress from './Progress';

function Timer() {
  return (
    <div className='timer'>
      <Progress />
      <Actions />
    </div>
  )
}

export default Timer