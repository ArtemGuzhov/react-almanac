import React from 'react'
import { getPagesArray } from '../../utils/pages'
import OutlineButton from '../button/OutlineButton'

export const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages)

  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <OutlineButton
          className={page === p ? `page page__current` : `page`}
          key={p}
          onClick={() => changePage(p)}
        >
          {p}
        </OutlineButton>
      ))}
    </div>
  )
}
