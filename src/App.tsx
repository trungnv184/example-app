import { FeedList } from 'components/Feeds/FeedList';
import { Layout } from 'components/Layout/Layout';
import { Feed } from 'types';
import './App.css';

function App() {
  const feedList: Feed[] = [];

  return (
    <Layout>
      <FeedList items={feedList} />
    </Layout>
  );
}

export default App;
