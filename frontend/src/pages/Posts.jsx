import React, { useEffect, useState } from 'react'
import '../styles/Posts.css'
import axios from 'axios'
import { v4 } from 'uuid'
import { FormPost } from '../components/Posts/FormPost'
import { PostList } from '../components/Posts/PostList'
import { PostFilter } from '../components/Posts/PostFilter'
import ModalForm from '../UI/modal/ModalForm'
import OutlineButton from '../UI/button/OutlineButton'
import { usePosts } from '../hooks/usePosts'
import { useHttp } from '../hooks/useHttp'
import Loader from '../UI/loader/Loader'
import { getPagesCount } from '../utils/pages'
import { Pagination } from '../UI/pagination/Pagination'

export const Posts = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetchPosts, loading, error] = useHttp(async (limit, page) => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      { params: { _limit: limit, _page: page } }
    )

    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
    console.log(getPagesCount(totalCount, limit))
  })

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
  console.log(totalPages)

  const createPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: v4() }])
    setModal(false)
  }

  const deletePost = (id) => {
    setPosts([...posts.filter((post) => post.id !== id)])
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  return (
    <div className="posts">
      <h1 style={{ textAlign: 'center', fontWeight: 'lighter' }}>Записи</h1>
      <ModalForm visible={modal} setVisible={setModal}>
        <FormPost create={createPost} />
      </ModalForm>
      <OutlineButton onClick={() => setModal(true)}>
        Создать запись
      </OutlineButton>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <br />
      {error && (
        <h3 style={{ textAlign: 'center', fontWeight: 'lighter' }}>
          Произошла следующая ошибка: {error}
        </h3>
      )}
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList posts={sortedAndSearchPosts} deletePost={deletePost} />
      )}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  )
}
