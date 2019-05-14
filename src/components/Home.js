import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';
import List from './List';
import Post from './Posts';

const Home = () => {
  return (
    <Layout>
      <p>Hello World of React and webpack!</p>
      <p>
        <Link to='/dynamic'>Nav to dynamic</Link>
      </p>
      <p>
        <Link to='/calculator'>Nav to Calculator</Link>
      </p>
      <div className='row mt-5'>
        <div className='col-md-4 offset-md-1'>
          <h2>Articles</h2>
          <List />
        </div>
        <div className='col-md-4 offset-md-1'>
          <h2>API Posts</h2>
          <Post />
        </div>
      </div>
    </Layout>
  );
};

export default Home;