import React from 'react'
import PropTypes from 'prop-types';
import { MembersPageTemplate } from '../../templates/members-page';

const MembersPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <MembersPageTemplate
        content={data.content}
        title={data.title}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

MembersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default MembersPagePreview;
