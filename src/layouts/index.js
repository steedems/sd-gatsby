import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import typography from '../utils/typography';

import './index.css';
import '../assets/font-awesome/style.css';

typography.injectStyles();

class TemplateWrapper extends React.PureComponent {
  render() {
    const { children, data } = this.props;
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        />
        {children()}
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
};

export default TemplateWrapper;


export const pageQuery = graphql`
    query PageQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
    }
`;
