import React from 'react';
import Rxdb from 'components/Rxdb';
import Album from './Album';
import FormAlbum from '../ModalAddAlbum/FormAlbum';

const AlbumsList = ({ data }) => {
  if (!data) {
    return (
      <h1>No albums found yet</h1>
    );
  }
  return (
    <div className='izi-fill-width izi-ys izi-center'>
      {
        data.map(
          (album) => (
            <Album {...album} key={album._id} />
          )
        )
      }
    </div>
  );
};

export default () => (
  <Rxdb
    collection="albums"
    reactive
    view={AlbumsList}
  />
);

