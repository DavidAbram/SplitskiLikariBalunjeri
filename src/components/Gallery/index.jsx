import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { colors, font, device } from '../styles';
import PreviewCompatibleImage from '../PreviewCompatibleImage';


export const Image = ({ image }) => <PreviewCompatibleImage width="100%" {...image} /> 
;

const StyledH2 = styled.h2`
  ${font.fluidSize(18,24, font.family)}
  font-weight: 700;
  color: ${colors.primaryDark};
  padding-bottom: 10px;
  border-bottom: 3px solid ${colors.primaryDark};
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  div {
    flex-basis: calc(50% - 5px);
    p {
      margin-top: 0;
      text-align: center;
    }

    @media ${device.tablet} {
      flex-basis: 100%;
    }
    @media ${device.mobile} {
      flex-basis: 100%;
    }
  }
`;



export const Gallery = ({ title, images }) => {
  return (
    <>
      <StyledH2>{title}</StyledH2>
      <StyledDiv>
      {
        images.map((image, index) => 
        <div key={`${image.title}-${image.date}-${index}`} title={image.title}>
          <Image image={image.image} />
          <p>{image.title}</p>
        </div>)
      }
      </StyledDiv>
    </>);
};


const GalleryWithQuery = (props) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "image-gallery"}}}, sort: {fields: frontmatter___date, order: DESC} ) {
          nodes {
            frontmatter {
              title
              date
              image {
                src {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                alt
              }
            }
          }
        }
      }
    `}
    render={data => (<Gallery title={props.title} images={
      data.allMarkdownRemark.nodes.map(node => 
        ({
          title: node.frontmatter.title,
          date: node.frontmatter.date,
          image: node.frontmatter.image,
        })
      )} 
    />)}
  />
);

export default GalleryWithQuery;