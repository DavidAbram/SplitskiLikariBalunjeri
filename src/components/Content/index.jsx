import React from 'react';
import PropTypes from 'prop-types';

export const HTMLContent = ({ children }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: children }} />
  )
}

const Content = ({ children }) => (
  <div>{children}</div>
)

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes;

export default Content;