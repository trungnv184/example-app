import { FeedItem } from 'components/FeedItem/FeedItem';
import { Col, Container, Row } from 'react-bootstrap';
import { Feed } from 'types';

export type FeedListProps = {
  items: Feed[];
};

export const FeedList: React.FC<FeedListProps> = ({ items }) => {
  return (
    <Container fluid>
      <Row>
        {items.map((feed) => (
          <Col key={feed.id} sm={12} md={3} lg={4} xl={2} className='my-4'>
            <FeedItem item={feed} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
