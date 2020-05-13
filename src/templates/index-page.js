import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Notifications from '../components/Notifications';
import Activities from '../components/Activities';

export const IndexPageTemplate = () => (
  <>
    <Notifications />
    <Activities />
  </>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}


export default IndexPage;
