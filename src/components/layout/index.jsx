import React from "react";
import "fonts/operator-mono/index.css";

import Seo from "components/seo";

const Layout = ({ children, title }) => (
  <>
    <Seo title={title} />
    {children}
  </>
);

export default Layout;
