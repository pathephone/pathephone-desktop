import React from 'react';
import { Grid } from 'semantic-ui-react';
import Rxdb from '../Rxdb';
import Album from './Album';

const AlbumsList = ({ data }) => {
  if (!data) {
    return (
      <h1>No albums found yet</h1>
    );
  }
  const filtered1 = data.filter((d, i) => !(i % 2));
  const filtered2 = data.filter((d, i) => i % 2);
  return (
    <Grid centered padded columns={2}>
      <Grid.Column >
        {
          filtered1.map(
            (album) => (
              <Album {...album} key={album._id} />
            )
          )
        }
      </Grid.Column>
      <Grid.Column >
        {
            filtered2.map(
              (album) => (
                <Album {...album} key={album._id} />
              )
            )
          }
      </Grid.Column>
    </Grid>
  );
};

export default () => (
  <Rxdb
    collection="albums"
    reactive
    view={AlbumsList}
  />
);

