import { FeedList } from 'components/Feeds/FeedList';
import { Spinner } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { fetchFeeds } from 'services';
import { ApiServiceKey } from 'utils';

export const HomePage: React.FC<{}> = () => {
  const { isLoading, data: feedList } = useQuery(
    ApiServiceKey.FetchFeeds,
    async () => {
      const response = await fetchFeeds();
      console.log(response.data, 'LOG');
      return response.data;
    }
  );

  if (isLoading) {
    return <Spinner animation='border' variant='success' />;
  }

  return <FeedList items={feedList} />;
};
