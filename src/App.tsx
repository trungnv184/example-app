import { Layout } from 'components/Layout/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from 'pages/Home/Home';

const AppRoute = () => {
  return (
    <Switch>
      <Route path='/' component={HomePage} />
    </Switch>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <AppRoute />
      </Layout>
    </Router>
  );
}

export default App;
