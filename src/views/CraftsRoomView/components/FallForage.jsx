import React from 'react'
import { BundleGroup, Checkbox } from '@components/Layout'

const FallForage = ({ handleChecked }) => {
  return (
    <BundleGroup title='Fall Foraging - Fall Seeds (30)'>
      <Checkbox
        id='commonMushroom'
        name='fallForage'
        label='Common Mushroom'
        value='commonMushroom'
        handleChecked={handleChecked}
      />
        <Checkbox
        id='wildPlum'
        name='fallForage'
        label='Wild Plum'
        value='wildPlum'
        handleChecked={handleChecked}
      />
        <Checkbox
        id='hazelnut'
        name='fallForage'
        label='Hazelnut'
        value='hazelnut'
        handleChecked={handleChecked}
      />
        <Checkbox
        id='blackberry'
        name='fallForage'
        label='Blackberry'
        value='blackberry'
        handleChecked={handleChecked}
      />
    </BundleGroup>
  )
}

export default FallForage