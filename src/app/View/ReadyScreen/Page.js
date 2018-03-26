import React from 'react'
import bind from '../utils/recallReact'
import currentPage from '../state/page'
import pagesMap from './pagesMap'

const getPageViewByName = (name) => {
  const pageObj = pagesMap.find(singleObj => singleObj.name === name)
  if (!pageObj) {
    console.error(new Error('No page info found.'))
  }
  return pageObj.view
}

const Page = ({ page }) => {
  const { name, props } = page
  const PageView = getPageViewByName(name)
  return (
    <main className='page izi-fill'>
      <PageView {...props} />
    </main>
  )
}

export default bind({ page: currentPage }, Page)
