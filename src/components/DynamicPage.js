import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import uuidv1 from 'uuid';

import Layout from './Layout';
import { addArticle } from '../store/actions';
import { errorInput, normalInput } from './DynamicPage.css';

// const mapDispatchToProps = dispatch => {
//   return { addArticle: article => dispatch(addArticle(article)) }
// }

const mapStateToProps = state => {
  return { 
    foundBadWord: state.foundBadWord, 
    oldTitle: state.oldTitle
  };
};

const DynamicPage = ({foundBadWord, oldTitle, addArticle}) => {
  const [title, setTitle] = useState(oldTitle);

  const handleChange = event => {
    const updated = event.target.value
    setTitle(updated)
  }

  const handleSubmit = event => {
    event.preventDefault();
    const id = uuidv1();
    addArticle({title, id});
    setTitle('');
  }

  const styleType = (foundBadWord) ? errorInput : normalInput

  return (
    <Layout>
      <Header as='h2'>Testing a Form with Redux and friends</Header>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className={styleType}
            id='title'
            value={title || oldTitle}
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

export default connect(mapStateToProps, { addArticle })(DynamicPage);