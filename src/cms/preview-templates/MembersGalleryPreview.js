import React from 'react'
import PropTypes from 'prop-types';
import { Members } from '../../components/Members';

const MembersPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  if (data) {
    return (
      <Members
        image={{ src: data.image.src }}
        title={data.title}
        position={data.position}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

MembersPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default MembersPreview;
