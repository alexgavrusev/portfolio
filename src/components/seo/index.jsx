import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import operatorMono from "fonts/operator-mono";

const Seo = ({ title }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query Seo {
      site {
        siteMetadata {
          lang
          meta
        }
      }
    }
  `);

  return (
    <Helmet>
      <html lang={siteMetadata.lang} />
      <title>{title}</title>
      {siteMetadata.meta.map((values, i) => (
        <meta key={i} {...Object.fromEntries(values)} />
      ))}

      <link
        rel="preload"
        href={operatorMono.woff2.medium}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={operatorMono.woff2.bold}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Helmet>
  );
};

export default Seo;
