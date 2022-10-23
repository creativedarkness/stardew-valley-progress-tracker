import React from 'react'
import { BundleGroup, Checkbox } from '@components/Layout'

const WinterForage = ({ handleChecked }) => {
  return (
    <BundleGroup title='Winter Foraging - Winter Seeds (30)'>
      <Checkbox
        id='winterRoot'
        name='fallForage'
        label='Winter Root'
        value='winterRoot'
        handleChecked={handleChecked}
      />
      <Checkbox
        id='crystalFruit'
        name='fallForage'
        label='Crystal Fruit'
        value='crystalFruit'
        handleChecked={handleChecked}
      />
      <Checkbox
        id='snowYam'
        name='fallForage'
        label='Snow Yam'
        value='snowYam'
        handleChecked={handleChecked}
      />
      <Checkbox
        id='crocus'
        name='fallForage'
        label='Crocus'
        value='crocus'
        handleChecked={handleChecked}
      />
    </BundleGroup>
  )
}

export default WinterForage