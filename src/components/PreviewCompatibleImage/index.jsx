import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const PreviewCompatibleImage = ({ src, alt, fluid }) => {

  if (fluid) {
    return (
      <Img fluid={fluid} alt={alt} />
    );
  }

  if (src && typeof src === 'string')
    return <img src={src} alt={alt} />;

  return null;
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
    fluid: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;