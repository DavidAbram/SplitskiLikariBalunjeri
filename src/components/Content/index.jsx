import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
  & img {
    max-width: 100%;
  }
`;

export const HTMLContent = ({ children, style = {} , className = '' }) => {
  return (
    <StyledDiv style={style} className={className} dangerouslySetInnerHTML={{ __html: children }} />
  )
}

const Content = ({ children, style = {} , className = ''}) => (
  <StyledDiv style={style} className={className} >{children}</StyledDiv>
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