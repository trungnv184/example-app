import { FeedList } from 'components/Feeds/FeedList';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store/app-store';
import { fetchFeedsAsync } from 'store/feed';

export const HomePage: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { status, feeds } = useSelector((state: RootState) => state.feeds);

  useEffect(() => {
    dispatch(fetchFeedsAsync());
  }, [dispatch]);

  if (status === 'loading') {
    return <Spinner animation='border' variant='success' />;
  }

  return <FeedList items={feeds} />;
};
