import React from 'react'
import { BundleGroup, Checkbox } from '@components/Layout'

const Construction = ({ handleChecked }) => {
  return (
    <BundleGroup title='Construction - Charcoal Kiln (1)'>
      <Checkbox
        id='ninetyNineWood-A'
        name='fallForage'
        label='Wood (99)'
        value='ninetyNineWood-A'
        handleChecked={handleChecked}
      />
      <Checkbox
        id='ninetyNineWood-B'
        name='fallForage'
        label='Wood (99)'
        value='ninetyNineWood-B'
        handleChecked={handleChecked}
      />
      <Checkbox
        id='stone'
        name='fallForage'
        label='Stone (99)'
        value='stone'
        handleChecked={handleChecked}
      />
      <Checkbox
        id='hardwood'
        name='fallForage'
        label='Hardwood (10)'
        value='hardwood'
        handleChecked={handleChecked}
      />
    </BundleGroup>
  )
}

export default Construction