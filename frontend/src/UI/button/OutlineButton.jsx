import React from 'react'
import classes from './OutlineButton.module.css'

const OutlineButton = ({ children, ...props }) => {
  return (
    <button className={classes.outlineBtn} {...props}>
      {children}
    </button>
  )
}

export default OutlineButton
