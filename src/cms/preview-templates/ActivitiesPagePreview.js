import React from 'react';
import PropTypes from 'prop-types';
import { ActivitiesPageTemplate } from '../../templates/activities-page';

const ActivitiesPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <ActivitiesPageTemplate title={data.title} />;
  } else {
    return <div>Loading...</div>;
  }
};

ActivitiesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ActivitiesPagePreview;
