import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Members from '../components/Members';
import Content, { HTMLContent } from '../components/Content';
import { device } from '../components/styles';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-wrap: wrap;
  }

  @media ${device.mobile} {
    flex-wrap: wrap;
  }
`;

const StyledDiv = styled.div`
  flex-basis: 30%;
  width: 30%;

  @media ${device.tablet} {
    flex-grow: 1;
    flex-basis: 30%;
    width: 30%;
    
    .activity {
      width: calc(100% - 35px);  
      margin: 17.5px;
    }
  }

  @media ${device.mobile} {
    flex-basis: 100%;
    width: 100%;
    .activity {
      margin: 20px;
    }
  }
`;

const LeftSideDiv = styled.div`
  max-width: 900px;
  flex-basis: calc(70% - 30px);
  width: calc(70% - 30px);

  @media ${device.tablet} {
    min-width: 600px;
    flex-grow: 1;
    flex-basis: calc(70% - 30px);
    width: calc(70% - 30px);
    margin-right: 30px;
  }

  @media ${device.mobile} {
    flex-basis: 100%;
    width: 100%;
  }
`;


export const MembersPageTemplate = ({
  title,
  membersTitle,
  content,
  PageContent = Content,
}) => (
    <StyledWrapper>
      <LeftSideDiv>
        <Title>{title}</Title>
        <PageContent>{content}</PageContent>
      </LeftSideDiv>
      <StyledDiv>
        <Members title={membersTitle}/>
      </StyledDiv>
    </StyledWrapper>
  );

MembersPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

const MembersPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <MembersPageTemplate
        title={frontmatter.title}
        content={html}
        PageContent={HTMLContent}
        membersTitle={frontmatter.membersTitle}
      />
    </Layout>
  );
};

MembersPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.object,
    }),
  }),
};

export default MembersPage;

export const pageQuery = graphql`
  query MembersPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "members-page" } }) {
      html
      frontmatter {
        title
        membersTitle
      }
    }
  }
`;
