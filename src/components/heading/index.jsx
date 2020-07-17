import React from "react";
import { Box } from "@chakra-ui/core";
import { useStyleConfig } from "@chakra-ui/system";

const Heading = ({ children }) => {
  const styles = useStyleConfig("Heading", {});

  return (
    <Box as="h1" sx={styles}>
      {children}
    </Box>
  );
};

export default Heading;
