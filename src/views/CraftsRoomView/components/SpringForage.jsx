import React from 'react'
import { BundleGroup, Checkbox } from '@components/Layout'

const SpringForage = ({ handleChecked }) => {
  return (
    <BundleGroup title='Spring Foraging - Spring Seeds (30)'>
        <Checkbox
          id='wildHorseradish'
          name='springForage'
          label='Wild Horseradish'
          value='wildHorseradish'
          handleChecked={handleChecked}
        />
        <Checkbox
          id='daffodil'
          name='springForage'
          label='Daffodil'
          value='daffodil'
          handleChecked={handleChecked}
        />
        <Checkbox
          id='leek'
          name='springForage'
          label='Leek'
          value='leek'
          handleChecked={handleChecked}
        />
        <Checkbox
          id='dandelion'
          name='springForage'
          label='Dandelion'
          value='dandelion'
          handleChecked={handleChecked}
        />
      </BundleGroup>
  )
}

export default SpringForage