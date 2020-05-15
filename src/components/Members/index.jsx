import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage'

export const titles = {
  president: "Predsjednik Udruge",
  secretary: "Tajnik Udruge",
  member: "Članovi Upravnog Odbora",
  liquidator: "Likvidator Udruge",
}



export const Member = ({name, position, image}) => (
  <>
    {name}
    <PreviewCompatibleImage
      height="128px"
      width="128px"
      src={image}
      alt={`${position} ${name}`}
    />
  </>
);

export const Members = ({ members }) => {

  return (
    <div>
      <h2>Članovi</h2>
      {
        Object.values(titles).map((title, index) => (
          <>
          <h3>{title}</h3>
          {
            members
            .filter(
              member => member.position === Object.keys(titles)[index]
            )
            .map(
              member => <Member image={member.image} name={member.name} position={member.position} />
              )
          }
          </>
        ))
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