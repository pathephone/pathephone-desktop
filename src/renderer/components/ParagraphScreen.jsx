import React from 'react'
import propTypes from 'prop-types'

import './ParagraphScreen.css'

const ParagraphScreen = ({ title, paragraph, id }) => (
  <div
    id={id}
    className='paragraph-screen'
  >
    <div className='paragraph-screen__container'>
      {
        title && (
          <h4 className='paragraph-screen__title'>{title}</h4>
        )
      }
      {
        paragraph && (
          <p className='paragraph-screen__paragraph'>{paragraph}</p>
        )
      }
    </div>
  </div>
)

ParagraphScreen.propTypes = {
  title: propTypes.string,
  paragraph: propTypes.string,
  id: propTypes.string
}

export default ParagraphScreen
