import {
  Box,
  Flex,
  Button,
  Text,
  Grid,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

const Games = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPlayer, setSelectedPlayer] = useState(null); // To store the selected player's details
  let imageURL =
    "https://ichef.bbci.co.uk/news/1024/branded_news/D99D/production/_130290755_gettyimages-1082237082-594x594.jpg";

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("https://www.balldontlie.io/api/v1/players")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        console.log(data);
      });
  }, []);

  const openModalWithPlayer = (player) => {
    setSelectedPlayer(player);
    onOpen();
  };

  return (
    <Flex direction={"column"}>
      <Box>
        <ChakraLink as={ReactRouterLink} to="/">
          <Button>Players</Button>
        </ChakraLink>
      </Box>
      <u>
        <Text fontSize={"xl"}>All Players</Text>
      </u>
      <Grid templateColumns="repeat(5, 1fr)" gap={10}>
        {players.data?.map((el, i) => (
          <Flex direction={"column"} key={i} border={"2px solid #c9c9c9"}>
            <Text>First Name - {el.first_name}</Text>
            <Text>Last Name - {el.last_name}</Text>
            <Text>Position- {el.position}</Text>
            <Image src={imageURL} />

            <Button onClick={() => openModalWithPlayer(el)}>Details</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay
                styleProps={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust the opacity as needed
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: -1,
                }}
              />
              <ModalContent>
                <ModalHeader>Player Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {selectedPlayer && (
                    <>
                      <Text>{selectedPlayer.team.abbreviation}</Text>
                      <Text>{selectedPlayer.team.city}</Text>
                      <Text>{selectedPlayer.team.conference}</Text>
                      <Text>{selectedPlayer.team.division}</Text>
                      <Text>{selectedPlayer.team.full_name}</Text>
                      <Text>{selectedPlayer.team.name}</Text>
                    </>
                  )}
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default Games;
