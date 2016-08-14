import React, { PropTypes } from 'react';

const Home = ({ params }) => <div>{params.repoName}</div>;

Home.propTypes = {
  params: PropTypes.object,
};

export default Home;
