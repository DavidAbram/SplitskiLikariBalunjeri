import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ src, alt, height, width, maxHeight, maxWidth }) => {

  const wrapStyle = {
    width: `${width}`,
    height: `${height}`,
    maxHeight: `${maxHeight}`,
    maxWidth: `${maxWidth}`,
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    margin: 0,
    backround: 'blue'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
  if (src.childImageSharp && src.childImageSharp.fluid) {
    return (
      <div style={wrapStyle}>
        <Img fluid={src.childImageSharp.fluid} alt={alt} />
      </div>
    );
  }

  if (src && typeof src === 'string')
    return (
      <div style={wrapStyle}>
        <img style={imageStyle} src={src} alt={alt} />
      </div>
    )

  return null;
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  }).isRequired,
};

export default PreviewCompatibleImage;