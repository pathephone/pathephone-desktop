import React from 'react';
import Album from './AlbumsFeed/Album';
import styles from './AlbumsFeed.css';

const AlbumsFeed = ({ albums }) => {
  return (
    <div className={styles.AlbumsFeed}>
      {
        albums.map(Album)
      }
    </div>
  );
};

export default AlbumsFeed;