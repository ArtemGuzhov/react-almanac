import React from 'react'
import OutlineButton from '../../UI/button/OutlineButton'

export const Post = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.title}</strong>
        <div>{props.body}</div>
      </div>
      <div className="post__btns">
        <OutlineButton onClick={() => props.delete(props.id)}>
          Удалить
        </OutlineButton>
      </div>
    </div>
  )
}
