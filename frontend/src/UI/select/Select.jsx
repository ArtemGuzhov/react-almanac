import React from 'react'
import classes from './Select.module.css'

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className={classes.customSelect}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled>{defaultValue}</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default Select
