import React, { PropTypes } from 'react';

const Repos = ({ params }) => <div>{params.repoName}</div>;

Repos.propTypes = {
  params: PropTypes.object,
};

export default Repos;
