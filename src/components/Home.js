import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <p>Hello World of React and webpack!</p>
      <p>
        <Link to='/dynamic'>Nav to dynamic</Link>
      </p>
    </Layout>
  );
};

export default Home;