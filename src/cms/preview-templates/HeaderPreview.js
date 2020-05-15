import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '../../components/Header'

const HeaderPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <Header
        title={data.title}
        subtitle={data.subtitle}
        logo={data.logo}
        hero={data.hero}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

HeaderPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HeaderPreview
