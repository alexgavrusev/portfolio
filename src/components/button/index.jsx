import React from "react";
import { Box } from "@chakra-ui/core";
import { useStyleConfig } from "@chakra-ui/system";

const Button = ({ variant, children, ...props }) => {
  const styles = useStyleConfig("Button", { variant });

  return (
    <Box as="button" sx={styles.container} {...props}>
      <Box as="span" sx={styles.text}>
        {children}
      </Box>
    </Box>
  );
};

export default Button;
