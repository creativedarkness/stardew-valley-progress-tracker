import React from 'react'

export const Checkbox = ({ id, value, label, handleChecked }) => (
  <div>
    <input type='checkbox' name={id} id={id} value={value} onChange={handleChecked} />
    <label htmlFor={id}>{label}</label>
  </div>
)

export const BundleGroup = ( { title, children }) => (
  <fieldset className='checkboxes'>
    <legend>{title}</legend>
    {children}
  </fieldset>
)

export const ProgressBar = ({ progress }) => (
  <div className='meter'>
    <span style={ {width: `${progress}%`} }></span>
  </div>

)
