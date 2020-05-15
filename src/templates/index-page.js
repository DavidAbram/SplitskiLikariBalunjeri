import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Notifications from '../components/Notifications'
import Activities from '../components/Activities'
import Gallery from '../components/Gallery'

export const IndexPageTemplate = () => (
  <>
    <Notifications />
    <Activities />
    <Gallery />
  </>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

export default IndexPage
