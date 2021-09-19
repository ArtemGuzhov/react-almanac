import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Post } from './Post'

export const PostList = ({ posts, deletePost }) => {
  if (!posts.length) {
    return (
      <h3 style={{ textAlign: 'center', fontWeight: 'lighter' }}>
        Записи не найдены...
      </h3>
    )
  }

  return (
    <div style={{ overflow: 'auto', height: '60vh' }}>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <Post {...post} delete={deletePost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}
