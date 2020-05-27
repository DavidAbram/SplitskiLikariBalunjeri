import React from 'react';
import PropTypes from 'prop-types';
import { GalleryPageTemplate } from '../../templates/gallery-page';

const GalleryPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <GalleryPageTemplate title={data.title} />;
  } else {
    return <div>Loading...</div>;
  }
};

GalleryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default GalleryPagePreview;
