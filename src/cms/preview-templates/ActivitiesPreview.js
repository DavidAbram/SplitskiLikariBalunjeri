import React from 'react'
import PropTypes from 'prop-types';
import { ActivitiesTemplate } from '../../templates/activities';

const ActivitiesPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(data);
  if (data) {
    return (
      <ActivitiesTemplate
        content={data.content}
        title={data.title}
        date={data.date.toISOString()}
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
  getAsset: PropTypes.func,
}

export default ActivitiesPreview;
