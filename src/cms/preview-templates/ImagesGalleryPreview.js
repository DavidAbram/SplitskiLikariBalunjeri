import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '../../components/Gallery';

const ImagesGalleryPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  if (data) {
    return <Image image={data.image} name={data.title} />;
  } else {
    return <div>Loading...</div>;
  }
};

ImagesGalleryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ImagesGalleryPreview;
