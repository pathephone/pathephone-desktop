import React from 'react'
import { connect } from 'react-redux'

import pagesMap from './Page/pagesMap'

const Page = ({ pageName }) => {
  const PageView = pagesMap[pageName]
  if (PageView) {
    return (
      <main className='page izi-fill'>
        <PageView />
      </main>
    )
  } else {
    return (
      <h1>Page not found</h1>
    )
  }
}

const mapStateToProps = (state) => ({
  pageName: state.currentPageName
})

export default connect(mapStateToProps)(Page)
