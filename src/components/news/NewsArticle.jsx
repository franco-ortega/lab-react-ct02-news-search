import React from 'react';
import PropTypes from 'prop-types';

const NewsArticle = ({ author, title, description }) => (
  <>
    <h3>{title}</h3>
    <p>by {author}</p>
    <p>{description}</p>
  </>
);

NewsArticle.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string.isRequired
};

export default NewsArticle;
