import React from 'react';
import PropTypes from 'prop-types';
import { MembersPageTemplate } from '../../templates/members-page';

const MembersPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <MembersPageTemplate content={widgetFor('body')} title={data.title} />
    );
  } else {
    return <div>Loading...</div>;
  }
};

MembersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default MembersPagePreview;
