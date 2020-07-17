import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Box, Wrap, Stack, SimpleGrid } from "@chakra-ui/core";

import Layout from "components/layout";
import Heading from "components/heading";
import Button from "components/button";
import Tooltip from "components/tooltip";
import Case from "components/case";

import useClipboard from "hooks/use-clipboard";

import cv from "files/cv.pdf";

const email = "alex@gavrusev.dev";

const Index = () => {
  const data = useStaticQuery(graphql`
    query Projects {
      allContentfulPortfolioProject(sort: { order: ASC, fields: order }) {
        edges {
          node {
            image {
              fluid(quality: 50) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            url
            description
            order
            gridColumnsSm
          }
        }
      }
    }
  `);

  const [hasCopiedEmail, onEmailCopy, hideTooltip] = useClipboard(email, 3000);

  return (
    <Layout title="Alex Gavrusev">
      <Box mx="auto" maxWidth="62rem">
        <Stack mx={16} my={32} spacing={32}>
          <Heading>
            Creating performant <br />
            websites and PWAs
          </Heading>

          <Wrap spacing="16px">
            <Box position="relative">
              <Button
                variant="outlined"
                onClick={onEmailCopy}
                onMouseOut={hideTooltip}
              >
                Email: {email}
              </Button>
              <Tooltip open={hasCopiedEmail}>Copied to clipboard</Tooltip>
            </Box>
            <Button variant="contained" as="a" href={cv} target="_blank">
              View CV
            </Button>
          </Wrap>

          <SimpleGrid columns={6} spacing={16}>
            {data.allContentfulPortfolioProject.edges.map(
              ({ node: { image, url, description, order, gridColumnsSm } }) => (
                <Case
                  key={order}
                  image={image.fluid}
                  alt={description}
                  href={url}
                  // First 2 project images are probaby above the fold
                  loading={order < 3 ? "eager" : "lazy"}
                  gridColumn={["span 6", `span ${gridColumnsSm}`]}
                />
              )
            )}
          </SimpleGrid>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Index;
