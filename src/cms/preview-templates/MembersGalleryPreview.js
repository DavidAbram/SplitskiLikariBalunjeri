import React from 'react'
import PropTypes from 'prop-types';
import { Member } from '../../components/Members';

const MembersGalleryPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  console.log(data);
  if (data) {
    return (
      <Member
        image={data.image}
        title={data.title}
        position={data.position}
      />
    )
  } else {
    return <div>Loading...</div>
  } 
}

MembersGalleryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default MembersGalleryPreview;
