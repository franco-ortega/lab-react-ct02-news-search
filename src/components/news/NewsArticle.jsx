import React from 'react';
import PropTypes from 'prop-types';

const NewsArticle = ({ author, title, description }) => (
  <>
    <h3>{title}</h3>
    <p>By {author}</p>
    <p>{description}</p>
  </>

);

NewsArticle.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default NewsArticle;

// export default class NewsArticle extends Component {
//   render() {
//     return (
//       <>
//         This is a news article.
//       </>
//     );
//   }
// }
