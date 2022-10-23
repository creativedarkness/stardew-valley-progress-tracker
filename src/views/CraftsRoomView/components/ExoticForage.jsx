import React from 'react'
import { BundleGroup, Checkbox } from '@components/Layout'

const ExoticForage = ({ handleChecked }) => {
  return (
    <BundleGroup title="Exotic Foraging (Choose 5) - Autumn's Bounty (5)">
      <Checkbox
        id='coconut'
        name='exoticForage'
        label='Coconut'
        value='coconut'
        handleChecked={handleChecked}
      />
      <Checkbox
        id='cactusFruit'
        name='exoticForage'
        label='Cactus Fruit'
        value='cactusFruit'
        handleChecked={handleChecked}
      />
      <Checkbox
        id='caveCarrot'
        name='exoticForage'
        label='Cave Carrot'
        value='caveCarrot'
        handleChecked={handleChecked}
      />
      <Checkbox
        id='redMushroom'
        name='exoticForage'
        label='Red Mushroom'
        value='redMushroom'
        handleChecked={handleChecked}
      />
      <Checkbox
        id='purpleMushroom'
        name='exoticForage'
        label='Purple Mushroom'
        value='purpleMushroom'
        handleChecked={handleChecked}
      />
      <Checkbox
        id='mapleSyrup'
        name='exoticForage'
        label='Maple Syrup'
        value='mapleSyrup'
        handleChecked={handleChecked}
      />
      <Checkbox
        id='oakResin'
        name='exoticForage'
        label='Oak Resin'
        value='oakResin'
        handleChecked={handleChecked}
      />
      <Checkbox
        id='pineTar'
        name='exoticForage'
        label='Pine Tar'
        value='pineTar'
        handleChecked={handleChecked}
      />
      <Checkbox
        id='morel'
        name='exoticForage'
        label='Morel'
        value='morel'
        handleChecked={handleChecked}
      />

    </BundleGroup>
  )
}

export default ExoticForage