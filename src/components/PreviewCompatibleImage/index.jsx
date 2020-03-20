import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ src, alt }) => {

  if (src.childImageSharp && src.childImageSharp.fluid) {
    return (
      <Img fluid={src.childImageSharp.fluid} alt={alt} />
    );
  }

  if (src && typeof src === 'string')
    return <img src={src} alt={alt} />;

  return null;
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  }).isRequired,
};

export default PreviewCompatibleImage;