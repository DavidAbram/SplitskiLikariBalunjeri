import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import { colors, font } from '../styles';

export const titles = {
  president: "Predsjednik Udruge",
  secretary: "Tajnik Udruge",
  boardMember: "Članovi Upravnog Odbora",
  member: "Članovi Udruge",
  liquidator: "Likvidator Udruge",
}

// To determine which page shows what
const membersOnlyTitles = { member: titles.member };
const withoutMembersTitles =  {
  president: titles.president,
  secretary: titles.secretary,
  boardMember: titles.boardMember,
  liquidator: titles.liquidator
};

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

`;

export const Member = ({ name, position, image, isRight }) => (
  <StyledMemberWrapper className="member">
    <span style={isRight ? { order: 2 } : { order: 0 }}>
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


const StyledH2 = styled.h2`
  ${font.fluidSize(18,24, font.family)}
  font-weight: 700;
  color: ${colors.primaryDark};
  padding-bottom: 10px;
  border-bottom: 3px solid ${colors.primaryDark};
`;

export const Members = ({ members, title, showMembersOnly = false }) => {
  let previousMemberCount = 0;
  const displayValues = showMembersOnly ? membersOnlyTitles : withoutMembersTitles;
  return (
    <div>
      <StyledH2 style={{ maxWidth: '400px' }}>
        { title || "Članovi"}
      </StyledH2>
      {
        Object.values(displayValues).map((title, index) => {
            if (index !== 0){
              previousMemberCount += members.filter(member => member.position === Object.keys(displayValues)[index - 1]).length;
            }
            console.log(previousMemberCount)
            if (members
              .filter(
                member => member.position === Object.keys(displayValues)[index]
              ).length === 0) return null;
          return (
            <React.Fragment key={title}>
              {
                !showMembersOnly &&
                <h3 style={{ maxWidth: '400px', margin: '40px auto 5px auto' }} >{title}</h3>
              }
              {
                members
                  .filter(
                    member => member.position === Object.keys(displayValues)[index]
                  )
                  .map(
                    (member, memberIndex) => (
                      <Member
                        key={`${title}-${member.name}`}
                        image={member.image}
                        name={member.name}
                        position={member.position}
                        isRight={ ((previousMemberCount + memberIndex + 1) % 2 === 0) ? false : true}
                      />)
                  )
              }
            </React.Fragment>
          )
        }).filter(result => result !== null)
      }
    </div>
  )
};


const MembersWithQuery = ({title , showMembersOnly}) => (
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
    render={data => (<Members showMembersOnly={showMembersOnly} title={title} members={
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