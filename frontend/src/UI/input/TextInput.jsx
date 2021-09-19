import React from 'react'
import classes from './TextInput.module.css'

const TextInput = React.forwardRef((props, ref) => {
  return <input className={classes.textInput} ref={ref} {...props} />
})

export default TextInput
