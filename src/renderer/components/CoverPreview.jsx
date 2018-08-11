import React from 'react';
import propTypes from 'prop-types';
import MdAlbum from 'react-icons/lib/md/album';

import './CoverPreview.css';

const CoverPreview = ({ coverSrc }) => (
  <div className="coverPreviewContainer">
    {
        coverSrc ? (
          <img className="coverPreviewImage" src={coverSrc} />
        ) : (
          <MdAlbum className="coverPreviewNoCoverIcon" />
        )
      }
  </div>
);

CoverPreview.propTypes = {
  coverSrc: propTypes.string,
};

export default CoverPreview;
