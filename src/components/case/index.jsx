import React from "react";
import { Flex } from "@chakra-ui/core";
import Image from "gatsby-image";
import { css } from "@emotion/core";

// TODO: use `as` prop when chakra fixes prop-forwarding
const Case = ({ gridColumn, image, href, loading = "lazy", alt }) => (
  <Flex
    as="a"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    justify="center"
    align="center"
    p={[32, 32, 64]}
    borderRadius={8}
    bgColor="primary.50"
    _hover={{ bgColor: "primary.100" }}
    transitionProperty="background-color"
    transitionTimingFunction="ease-out-quart"
    transitionDuration="fast"
    gridColumn={gridColumn}
  >
    <Image
      css={css`
        width: 100%;
        max-height: 512px;
      `}
      fluid={image}
      loading={loading}
      alt={alt}
      imgStyle={{ objectFit: "contain" }}
    />
  </Flex>
);

export default Case;
