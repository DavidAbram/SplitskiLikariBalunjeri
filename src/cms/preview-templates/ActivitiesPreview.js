import React from 'react'
import PropTypes from 'prop-types';
import { Activities } from '../../components/Activities';

const ActivitiesPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();
  if (data) {
    return (
      <Activities
        content={widgetFor('body')}
        title={data.title}
        date={data.date ? data.date.toISOString() : new Date()}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ActivitiesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ActivitiesPreview;
