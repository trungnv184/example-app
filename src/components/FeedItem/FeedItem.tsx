import React from 'react';
import { Card } from 'react-bootstrap';
import { Feed } from 'types/Feed';

export type FeedProps = {
  item: Feed;
};

export const FeedItem: React.FC<FeedProps> = ({ item }) => {
  return (
    <Card className='text-center'>
      <Card.Img src={item.imageUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};
