import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import GetImage from '../Ipfs/GetImage';

const CardExampleCard = ({ title, artist, cover }) => (
  <Card centered >
    <GetImage
      hash={cover[0].hash}
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
      <Card.Meta>
        <span className="date">
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
        {artist}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

export default CardExampleCard;
