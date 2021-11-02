import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAppDispatch } from 'store/app-store';
import { feedActions } from 'store/feed';
import { Feed } from 'types/Feed';

export type FeedProps = {
  item: Feed;
};

export const FeedItem: React.FC<FeedProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const selectItem = () => {
    dispatch(feedActions.selectItem(item));
  };
  return (
    <Card className='text-center'>
      <Card.Img src={item.url} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Button variant='primary' onClick={selectItem}>
          SELECT
        </Button>
      </Card.Body>
    </Card>
  );
};
