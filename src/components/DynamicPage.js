import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import uuidv1 from 'uuid';

import Layout from './Layout';
import { addArticle } from '../store/actions';

const mapDispatchToProps = dispatch => {
  return { addArticle: article => dispatch(addArticle(article)) }
}

const ConnectedDynamicPage = ({addArticle}) => {
  const [eventTarget, setEventTarget] = useState({});

  const handleChange = event => {
    setEventTarget(events => Object.assign(events, {[event.target.id]: event.target.value}));
  }

  const handleSubmit = event => {
    event.preventDefault();
    const id = uuidv1();
    const title = eventTarget.title;
    addArticle({title, id});
  }

  return (
    <Layout>
      <Header as='h2'>Testing a Form with Redux and friends</Header>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={eventTarget.title}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-success btn-lg'>
          SAVE 
        </button>
      </form>
    </Layout>
  );
};

const DynamicPage = connect(null, mapDispatchToProps)(ConnectedDynamicPage);
export default DynamicPage;