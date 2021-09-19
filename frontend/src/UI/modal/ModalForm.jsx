import React from 'react'
import classes from './ModalForm.module.css'

const ModalForm = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.modalForm]

  if (visible) {
    rootClasses.push(classes.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className={classes.modalFormContent}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default ModalForm
