import React from 'react'
import PropTypes from 'prop-types';
import { VisionPageTemplate } from '../../templates/vision-page';

const VisionPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <VisionPageTemplate
        content={data.content}
        title={data.title}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

VisionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default VisionPagePreview;
