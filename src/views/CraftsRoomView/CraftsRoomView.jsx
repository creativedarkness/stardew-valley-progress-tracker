import React from 'react'
import {
  SpringForage,
  SummerForage,
  FallForage,
  WinterForage,
  Construction,
  ExoticForage
} from './components/'

const CraftsRoomView = ({ updateProgress }) => {
  return (
    <div className='crafts-room bundle-container'>
      <span className='bundle-title'>Crafts Room - Bridge Repair</span>
      <SpringForage handleChecked={updateProgress} />
      <SummerForage handleChecked={updateProgress} />
      <FallForage handleChecked={updateProgress} />
      <WinterForage handleChecked={updateProgress} />
      <Construction handleChecked={updateProgress} />
      <ExoticForage handleChecked={updateProgress} />
    </div>
  )
}

export default CraftsRoomView