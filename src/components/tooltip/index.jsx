import React from "react";

import { Box } from "@chakra-ui/core";
import { useStyleConfig } from "@chakra-ui/system";

const Tooltip = ({ open, children }) => {
  const styles = useStyleConfig("Tooltip", { open });

  return (
    <Box sx={styles.container}>
      <Box as="span" sx={styles.text}>
        {children}
      </Box>
    </Box>
  );
};

export default Tooltip;
