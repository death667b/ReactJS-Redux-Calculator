import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../store/actions';

const mapStateToProps = state => {
  return {
    articles: state.remoteArticles.slice(0, 10),
    API_Error: state.API_Error
  };
};

const Post = ({API_Error, articles, getData}) => {
  useEffect(() => {
    if (!articles.length) getData();
  }, []);

  const returnObject = (API_Error) ? 
    (<li className='list-group-item'>{API_Error}</li>) :
    articles.map(el => (
      <li className='list-group-item' key={el.id}> {el.title} </li>
    ))

  return (
    <ul className='list-group list-group-flush'>
      {returnObject}
    </ul>
  );
};

export default connect(mapStateToProps, { getData })(Post);