import React from 'react'
import PropTypes from 'prop-types'
import { Footer } from '../../components/Footer'

const FooterPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <Footer
        name={data.name}
        address={data.address}
        additionalData={data.additionalData}
        logo={data.logo}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default FooterPreview
