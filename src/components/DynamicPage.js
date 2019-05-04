import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from './Layout';

const DynamicPage = () => {
  return (
    <Layout>
      <Header as='h2'>Dynamic Page</Header>
      <p>This pasge was loaded async??</p>
    </Layout>
  );
};

export default DynamicPage;