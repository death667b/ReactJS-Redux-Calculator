import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import { pullRight, h1 } from './layout.css';

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to='/'>
        <Header as='h1' className={h1}>
          CAB402 - Assignment 2
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={pullRight}>
        Created by Ian Daniel (n5372828)
      </p>
    </Container>
  );
};

export default Layout;