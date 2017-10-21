import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import GetImage from 'components/Ipfs/GetImage';
import playerState from 'state/player';
import addAlbumToPlaylist from 'scripts/addAlbumToPlaylist';

const Album = (album) => {
  const { title, artist, cover, tracks } = album.data;
  return (
    <Card centered >
      <GetImage
        hash={cover}
        view={({ data }) => {
          console.log(data);
          const url = URL.createObjectURL(data);
          return <Image src={url} />;
        }}
      />
      <Card.Content>
        <Card.Header>
          {title}
        </Card.Header>
        <Card.Description>
          {artist}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a onClick={
          () => {addAlbumToPlaylist(album)}
        }>
          <Icon name="play" />
          {`${tracks.length} tracks`}
        </a>
      </Card.Content>
    </Card>
  );
};

export default Album;
