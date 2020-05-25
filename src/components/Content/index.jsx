import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const HTMLContent = ({ children, style = {} , className = '' }) => {
  return (
    <div style={style} className={className} dangerouslySetInnerHTML={{ __html: children }} />
  )
}

const Content = ({ children, style = {} , className = ''}) => (
  <div style={style} className={className} >{children}</div>
)

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes;


export const StyledContent = styled.div`
  margin: auto;
  text-align: justify;
`;


export default Content;