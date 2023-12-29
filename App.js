import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import HomePage from './components/HomePage';
import DetailsPage from './components/detailPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" component={<HomePage />} />
          <Route path="/details" component={<DetailsPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
