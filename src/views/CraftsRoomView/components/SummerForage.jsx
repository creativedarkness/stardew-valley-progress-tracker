import React from 'react'
import { BundleGroup, Checkbox } from '@components/Layout'

const SummerForage = ({ handleChecked }) => {
  return (
    <BundleGroup title='Summer Foraging - Summer Seeds (30)'>
      <Checkbox
        id='grape'
        name='summerForage'
        label='Grape'
        value='grape'
        handleChecked={handleChecked}
      />
      <Checkbox
        id='spiceBerry'
        name='summerForage'
        label='Spice Berry'
        value='spiceBerry'
        handleChecked={handleChecked}
      />
      <Checkbox
        id='sweetPea'
        name='summerForage'
        label='Sweet Pea'
        value='sweetPea'
        handleChecked={handleChecked}
      />
    </BundleGroup>
  )
}

export default SummerForage