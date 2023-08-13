import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

const Players = () => {
  return (
    <Flex>
      <Box>
        <ChakraLink as={ReactRouterLink} to="/games">
          <Button>Games</Button>
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default Players;
