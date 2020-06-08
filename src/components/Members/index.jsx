import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage'

export const titles = {
  president: "Predsjednik Udruge",
  secretary: "Tajnik Udruge",
  boardMember: "Članovi Upravnog Odbora",
  member: "Članovi Udruge",
  liquidator: "Likvidator Udruge",
}

const StyledMemberWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 400px;
  margin: 10px auto;

  span {
    padding: 0 20px;
    flex-grow: 1;
  }

  &:nth-child(2) span,
  &:nth-child(6) span,
  &:nth-child(8) span,
  &:nth-child(11) span {
    
  }

  &:nth-child(2n + 1) span,  &:nth-child(12) span {
    order: 2;
  }
  &:nth-child(5) span{
    order: 0;
  }
`;

export const Member = ({ name, position, image }) => (
  <StyledMemberWrapper className="member">
    <span>
      {name}
    </span>
    <PreviewCompatibleImage
      style={{ borderRadius: '50%' }}
      height="128px"
      width="128px"
      src={image}
      alt={`${position} ${name}`}
    />
  </StyledMemberWrapper>
);

export const Members = ({ members }) => {

  return (
    <div>
      <h2 style={{ maxWidth: '400px', margin: '40px auto 5px auto' }}>Članovi</h2>
      {
        Object.values(titles).map((title, index) => {
          if (members
            .filter(
              member => member.position === Object.keys(titles)[index]
            ).length === 0) return null;
            return (
              <React.Fragment key={title}>
                <h3 style={{ maxWidth: '400px', margin: '40px auto 5px auto' }} >{title}</h3>
                {
                  members
                    .filter(
                      member => member.position === Object.keys(titles)[index]
                    )
                    .map(
                      member => <Member key={`${title}-${member.name}`} image={member.image} name={member.name} position={member.position} />
                    )
                }
              </React.Fragment>
            )
        }).filter(result => result !== null)
      }
    </div>
  )
};


const MembersWithQuery = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "members"}}}) {
          nodes {
            frontmatter {
              title
              position
              image {
                src {
                  childImageSharp {
                    fluid(maxWidth: 128, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (<Members members={
      data.allMarkdownRemark.nodes.map(node =>
        ({
          name: node.frontmatter.title,
          position: node.frontmatter.position,
          image: node.frontmatter.image.src,
        })
      )}
    />)}
  />
);

export default MembersWithQuery;