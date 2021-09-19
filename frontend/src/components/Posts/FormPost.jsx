import React, { useRef, useState } from 'react'
import OutlineButton from '../../UI/button/OutlineButton'
import TextInput from '../../UI/input/TextInput'

export const FormPost = (props) => {
  const [post, setPost] = useState({ title: '', body: '' })

  // По необходимости, компоненты с использованием ref неуправляемые(неконтролируемые)
  const titleRef = useRef()
  const bodyRef = useRef()

  const changeHandler = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value })
  }

  const addNewPost = (event) => {
    event.preventDefault()

    props.create(post)

    setPost({ title: '', body: '' })

    console.log('title', titleRef.current.value)
    console.log('body', bodyRef.current.value)
  }

  return (
    <form>
      <TextInput
        ref={titleRef}
        type="text"
        placeholder="Название..."
        name="title"
        value={post.title}
        onChange={changeHandler}
      />
      <TextInput
        ref={bodyRef}
        type="text"
        placeholder="Описание..."
        name="body"
        value={post.body}
        onChange={changeHandler}
      />
      <OutlineButton onClick={addNewPost}>Добавить</OutlineButton>
    </form>
  )
}
