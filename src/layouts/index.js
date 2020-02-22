import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

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
            {
              name: 'viewport',
              content: 'user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, minimal-ui, viewport-fit=cover',
            },
            { name: 'msapplication-tap-highlight', content: 'no' },
            { name: 'mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
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
