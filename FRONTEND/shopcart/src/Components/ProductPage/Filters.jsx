import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BiFilter } from "react-icons/bi";

const Filters = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Flex align={"center"}>
        <Button
          ref={btnRef}
          onClick={onOpen}
          leftIcon={<BiFilter style={{ fontSize: "1.6rem" }} />}
          bg={"transparent"}
          _active={{ border: "1px solid black" }}
          _hover={{ bg: "transparent" }}
        >
          Show Filters
        </Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader  textAlign={"center"}>All Filters</DrawerHeader>

          <DrawerBody>
            
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Filters;
